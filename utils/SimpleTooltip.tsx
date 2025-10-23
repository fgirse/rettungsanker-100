'use client';

import '../styles/tooltip.css';
import React, { useState, useRef } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  delay?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const [active, setActive] = useState<boolean>(false);

  const showTip = (): void => {
    timeout.current = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = (): void => {
    clearTimeout(timeout.current);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
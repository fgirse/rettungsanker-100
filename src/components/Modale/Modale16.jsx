"use client";

/* This is required only if the project file is located
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Tooltip from "../../../utils/SimpleTooltip";
import TabelleBL from "../bundesliga-table";
import Image from "next/image";
import logoDFL from '../../../public/LogoDFL.png'

export default function Modale16() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <div className="example-wrapper">
          <Tooltip
            content="Click zu Bundesliga aktuelle Tabelle"
            direction="right"
          >
            <button
              type="button"
              onClick={openModal}
              className="mx-auto mb-[3vw] w-[170px] h-[200px] rounded-3xl bg-[#edc513] text-[1.66rem] font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={logoDFL}
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-4/4 h-4/4 object-contain"
                />
              </div>
            </button>
          </Tooltip>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-slate-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-yellow-600 w-full max-w-7xl transform overflow-hidden rounded-2xl border-8 bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <TabelleBL/>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-blue-50 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      zurück
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

'use client';

import LogoNeu from '../../public/LogoNeu.png';
import Link from 'next/link';
import SimpleTooltip from '../../utils/SimpleTooltip';
import Image from 'next/image';

// Define proper types for icon props
interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const navigation = {
  main: [
    { name: 'Impressum', href: '#' },
    { name: 'wohin?', href: 'lageplan' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.929.01 7.262.048 4.85.207 3.072 1.998 2.913 4.41.875 7.078.875 16.922 2.913 19.59c.159 2.412 1.937 4.203 4.349 4.362.667.038 1.134.048 4.755.048s4.088-.01 4.755-.048c2.412-.159 4.19-1.95 4.349-4.362 2.038-2.668 2.038-12.512 0-15.18C23.162 1.998 21.384.207 18.972.048 18.305.01 17.838 0 14.217 0H12.017zm0 2.16c3.595 0 4.023.016 5.439.08 1.363.062 2.103.29 2.595.48.65.25 1.115.547 1.604 1.036.49.49.787.954 1.037 1.604.19.492.418 1.232.48 2.595.064 1.416.08 1.844.08 5.439s-.016 4.023-.08 5.439c-.062 1.363-.29 2.103-.48 2.595-.25.65-.547 1.115-1.036 1.604-.49.49-.954.787-1.604 1.037-.492.19-1.232.418-2.595.48-1.416.064-1.844.08-5.439.08s-4.023-.016-5.439-.08c-1.363-.062-2.103-.29-2.595-.48-.65-.25-1.115-.547-1.604-1.036-.49-.49-.787-.954-1.037-1.604-.19-.492-.418-1.232-.48-2.595-.064-1.416-.08-1.844-.08-5.439s.016-4.023.08-5.439c.062-1.363.29-2.103.48-2.595.25-.65.547-1.115 1.036-1.604.49-.49.954-.787 1.604-1.037.492-.19 1.232-.418 2.595-.48 1.416-.064 1.844-.08 5.439-.08z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

// Update your component to use the optimized class
// Change sm:flex-shrink-0 to sm:shrink-0
const Footer = () => {
  return (
    <footer className="rounded-lg bg-yellow-800">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between">
          <div className="mt-8 xl:mt-0">
            <div className="flex flex-row items-start justify-around">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Fordere den Rettungsanker Newsletter an!
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  Die neuesten Nachrichten rund um den Rettungsanker,
                  wöchentlich in Deine eBox gesendet.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    placeholder="Enter your email"
                  />
                  <div className="mb-[3-vh] mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <div className="example-wrapper">
                      <SimpleTooltip
                        content="fordere den Newsletter an !!!"
                        direction="top"
                      >
                        <button
                          type="submit"
                          className=" flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          Subscribe
                        </button>
                      </SimpleTooltip>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <nav
              className="mt-[5vh] -mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {navigation.main.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <Link
                    href={item.href}
                    className="text-base text-gray-100 hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <hr className="mx-auto my-6 w-6/12 border-gray-300" />
        <div className="flex flex-row justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-8/12">
            <div className="mb-[3vh] py-1 text-sm font-semibold text-gray-100 lg:text-[0.77rem]">
              Copyright © {new Date().getFullYear()}{' '}
              <span className="headingG font-black text-black">
                {' '}
                medicus design basel switzerland
              </span>{' '}
              &{' '}
              <a
                href="https://www.rettungsanker-freiburg.de"
                className="text-gray-100 hover:text-gray-300"
              >
                Rettungsanker-Freiburg
              </a>
              <Image src={LogoNeu} width={192} height={192} alt="LogoNeu" className="mx-auto mt-[1vh] h-48 w-48 opacity-95" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
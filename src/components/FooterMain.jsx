import React from 'react'

function FooterMain() {
  return (
    <div>
      <hr className="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700"/>
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Company Profile</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Testimonial</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Portfolio</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Products</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Gurukul-online</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Gurukul-pro</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Estimate</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Messenger</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services We Provide</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Web Designing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Web Development</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Software Development</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Maintenance Services</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Logo Designing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">E-Commerce</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copy Rights © 2015 <a href="/" className="hover:underline">Shri Satya Technologies</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.512v.05A4.12 4.12 0 0 0 4.1 9.634a4.094 4.094 0 0 1-1.853.069 4.124 4.124 0 0 0 3.831 2.804A8.3 8.3 0 0 1 0 14.209 11.69 11.69 0 0 0 6.29 16c7.547 0 11.675-6.18 11.675-11.538 0-.174 0-.347-.012-.519A8.204 8.204 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .182A9.821 9.821 0 0 0 0 10.002a9.82 9.82 0 0 0 10 9.818 9.82 9.82 0 0 0 10-9.818A9.82 9.82 0 0 0 10 .182ZM7.872 14.31H5.685V7.59h2.187v6.72Zm-1.093-7.63a1.267 1.267 0 1 1 0-2.533 1.267 1.267 0 0 1 0 2.533ZM15.19 14.31h-2.187V10.98c0-.674-.012-1.543-.94-1.543-.943 0-1.087.737-1.087 1.496v3.378H8.79V7.59h2.1v.917h.029a2.307 2.307 0 0 1 2.071-1.137c2.216 0 2.625 1.459 2.625 3.357v3.584Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterMain;

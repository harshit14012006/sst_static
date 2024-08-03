import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import web from '../images/web2.jpg';
import webDev from '../images/webDev.jpg';
import single from '../images/singlePage.webp';
import dynamic from '../images/dynamic1.jpeg';
import flash from '../images/flash.webp';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';

function WebDevelopment() {
  const [showWebDesign, setShowWebDesign] = useState(true);

  return (
    <div>
      <NavbarMain />

      <div className="container">
        {/* Toggle Buttons */}
        <div className="flex justify-center my-10">
          <button
            onClick={() => setShowWebDesign(true)}
            className={`px-4 py-2 rounded-l ${showWebDesign ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out`}
          >
            Web Designing
          </button>
          <button
            onClick={() => setShowWebDesign(false)}
            className={`px-4 py-2 rounded-r ${!showWebDesign ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out`}
          >
            Website Development
          </button>
        </div>

        {/* Web Designing Section */}
        {showWebDesign && (
          <div>
            <div className="container mx-auto px-4 my-10">
        <div className="flex flex-col md:flex-row justify-center items-start my-20">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold leading-tight text-center md:text-left">WEB DESIGNING</h2>
            <p className="text-lg text-center md:text-left">
              <hr className="border-t-4 border-black my-4" />
              Website is the face of your company that can be read through all over the world, we do that exactly. May be you are professional or own a small business or want a corporate website, we have each and every solution for you and obviously within the budget that you can't imagine off.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img className="w-full h-auto" src={web} alt="Website Design" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-wrap justify-center gap-8 md:gap-32">
          <div className="max-w-sm rounded overflow-hidden shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
            <img className="w-full h-48 object-cover" src={flash} alt="Responsive Web Designing" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Responsive Web Designing</div>
              <hr className="border-black" />
              <p className="text-gray-700 text-base text-center">
                Responsive web design ensures a seamless user experience across various devices by adapting the layout and content dynamically.
              </p>
              <div className="text-center mt-4">
                      <Link to="/responsive-web" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
                        Read more
                      </Link>
                    </div>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
            <img className="w-full h-48 object-cover" src={single} alt="Single Page Designing" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Single Page Designing</div>
              <hr className="border-black" />
              <p className="text-gray-700 text-base text-center">
                This type of design is often used for portfolios, product sites, offering a seamless and engaging user experience without the need for multiple page loads.
              </p>
              <div className="text-center mt-4">
                      <Link to="/single-page-web" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
                        Read more
                      </Link>
                    </div>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
            <img className="w-full h-48 object-cover" src={dynamic} alt="Dynamic Web Designing" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Dynamic Web Designing</div>
              <hr className="border-black" />
              <p className="text-gray-700 text-base text-center">
                Today's market scenario requires every business to possess a solid web presence in order to attract visitors.
              </p>
              <div className="text-center mt-4">
                      <Link to="/dynamic-web" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
                        Read more
                      </Link>
                    </div>
            </div>
          </div>


              </div>
            </div>
          </div>
        )}

        {/* Website Development Section */}
        {!showWebDesign && (
          <div className="container mx-auto px-4 my-10">
          <div className="flex flex-col md:flex-row justify-center items-center md:mx-40 my-10">
            <div className="md:w-1/2 p-4">
              <div className="flex items-center">
                <img src={web} className="w-12 h-12 object-cover rounded-full" alt="Web Design" />&nbsp;
                <h2 className="text-2xl font-bold leading-tight">WEBSITE DEVELOPMENT</h2>
              </div>
              <p className="text-lg">
                <hr className="border-t-4 border-black my-4" />
                Many people use the two terms "web design" and "web development" interchangeably, but they really do have two different meanings. If you're looking for a new job or someone to build your website, you need to know the difference.
              </p>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="md:w-1/2 p-4">
              <img src={webDev} alt="Website Design" className="w-full h-auto" />
            </div>
          </div>
          <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>WEB DESIGNING</b></h1>
          <hr className="border-black mx-4 md:mx-40" />
          <p className="mx-4 md:mx-40 my-6">
            Web design is the customer-facing part of the website. A web designer is concerned with how a site looks and how the customers interact with it. Good web designers know how to put together the principles of design to create a site that looks great. They also understand about usability and how to create a site that customers want to navigate around in because it's so easy to do.
          </p>
        </div>
    
        )}
      </div>

      <SatyaFooter />
    </div>
  );
}

export default WebDevelopment;

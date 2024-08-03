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
      <div className="container mx-auto px-4 py-8">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowWebDesign(true)}
            className={`px-6 py-3 rounded-l-lg ${showWebDesign ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} transition duration-300 ease-in-out`}
          >
            Web Designing
          </button>
          <button
            onClick={() => setShowWebDesign(false)}
            className={`px-6 py-3 rounded-r-lg ${!showWebDesign ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} transition duration-300 ease-in-out`}
          >
            Website Development
          </button>
        </div>

        {/* Web Designing Section */}
        {showWebDesign && (
          <div className="mx-auto my-12">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-semibold leading-tight text-center md:text-left">WEB DESIGNING</h2>
                <p className="text-lg text-center md:text-left mt-4">
                  <hr className="border-t-2 border-black my-4" />
                  A website is the face of your company that can be read all over the world. Whether you are a professional, own a small business, or want a corporate website, we have every solution for you within a budget that you can't imagine.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <img className="w-full h-auto rounded-lg shadow-lg" src={web} alt="Website Design" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { img: flash, title: 'Responsive Web Designing', desc: 'Ensures a seamless user experience across various devices by adapting the layout and content dynamically.', link: '/responsive-web' },
                { img: single, title: 'Single Page Designing', desc: 'Often used for portfolios and product sites, offering a seamless and engaging user experience without the need for multiple page loads.', link: '/single-page-web' },
                { img: dynamic, title: 'Dynamic Web Designing', desc: 'In today’s market scenario, every business needs a solid web presence to attract visitors.', link: '/dynamic-web' }
              ].map((item, index) => (
                <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
                  <img className="w-full h-48 object-cover" src={item.img} alt={item.title} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl text-center mb-2">{item.title}</div>
                    <hr className="border-black" />
                    <p className="text-gray-700 text-base text-center mt-4">{item.desc}</p>
                    <div className="text-center mt-6">
                      <Link to={item.link} className="bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-800">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Website Development Section */}
        {!showWebDesign && (
          <div className="mx-auto my-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="md:w-1/2 p-4">
                <div className="flex items-center">
                  <img src={web} className="w-12 h-12 object-cover rounded-full" alt="Web Design" />
                  <h2 className="text-3xl font-semibold leading-tight ml-4">WEBSITE DEVELOPMENT</h2>
                </div>
                <p className="text-lg mt-4">
                  <hr className="border-t-2 border-black my-4" />
                  Many people use the terms "web design" and "web development" interchangeably, but they have different meanings. If you're looking for a job or someone to build your website, you need to know the difference.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <img src={webDev} alt="Website Development" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mx-4 md:mx-40">
              <h1 className="text-2xl font-bold leading-tight">WEBSITE DEVELOPMENT</h1>
              <hr className="border-black my-4" />
              <p className="my-6">
              Web development is the back-end of the website, the programming and interactions on the pages. A web developer focuses on how a site works and how the customers get things done on it. Good web developers know how to program CGI and scripts like PHP. They understand about how web forms work and can keep a site running effectively.
                    <br />At <b>Shri Satya Technologies</b>, we provide back-end of the website, the programming and interactions on the pages. Our web developer focuses on how a site works and how easily the customers get things done on it.
                </p>
            </div>
          </div>
        )}
      </div>
      <SatyaFooter />
    </div>
  );
}

export default WebDevelopment;

import React from 'react';
import soft from '../images/softLogo.jpg';
import softDev from '../images/softDev.jpg';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';

function SoftwareDevelopment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <img src={soft} className="w-12 h-12 object-cover rounded-full" alt="Software Logo" />
              <h2 className="text-2xl md:text-3xl font-bold ml-4 text-gray-800">SOFTWARE DEVELOPMENT</h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <hr className="border-t-4 border-gray-300 my-4" />
              We have demonstrated our abilities in delivering customized applications using cutting-edge technologies. Our customer-oriented approach enables us to deliver the optimum solutions for your requirements.<br />
              At <b>Shri Satya Technologies</b>, we strongly focus on creating customer-oriented software applications. Our development team minutely examines and analyzes the existing IT processes of the clients. It performs gap analysis to ensure complete compatibility between existing systems and custom-developed applications. The applications are designed, tested, and deployed to the complete satisfaction of the clients.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={softDev} alt="Software Development" className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <section className="mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Advantages Of Our Software Development</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>Fully Customized</li>
            <li>User Friendly</li>
            <li>Easy to Learn</li>
            <li>Easy to Update</li>
            <li>Performance Oriented</li>
            <li>Custom web-based application development using technologies like ASP.NET</li>
          </ul>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            We develop software that makes your business strategy easier and more effective and provides all your data in the format you want to see so that you can plan your business accordingly. We develop fully customized software that fulfills all your business needs.
          </p>
        </section>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default SoftwareDevelopment;

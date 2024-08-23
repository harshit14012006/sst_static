import React from 'react';
import Maintenance1 from '../images/service.jpg';
import logo from '../images/maintence.png';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';

function Maintenance() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="Logo" />
              <h2 className="text-3xl font-bold text-gray-800 ml-4">Maintenance Services</h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <hr className="border-t-4 border-gray-300 my-4" />
              <strong>"It is better not to have a product if you do not have someone to keep it updated and well maintained."</strong>
              We have the right resources, skills, and manpower to keep your product updated, operational, and trouble-free. Our website maintenance service includes revising, editing, or otherwise updating existing web pages to keep your site current with company news, latest developments, and new project deals.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Maintenance1} alt="Maintenance Service" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <section className="mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Maintenance Services Include:</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 pl-5">
            <li>CSS Updates</li>
            <li>Malware Removal</li>
            <li>Content Updates</li>
            <li>Re-structure your site contents</li>
            <li>Keep your website up-to-date</li>
            <li>Secure & Protect your site</li>
            <li>Modification and Addition of Website Content</li>
            <li>Update announcements, articles, etc.</li>
            <li>Adding/removing pages</li>
            <li>PDF creation and uploading</li>
          </ul>
        </section>
        <section className="mt-8 md:mt-12">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            All websites need maintenance to stay current. Whether your site requires daily updates or occasional tweaks, we can quickly diagnose and address your needs at an affordable fee.
          </p>
        </section>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default Maintenance;

import React from 'react'
import Maintenance1 from '../images/service.jpg';
import logo from '../images/maintence.png';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';
function Maintenance() 
{
  return (
    <div>
        <NavbarMain/>
        <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-40 my-10">
        <div className="md:w-1/2 p-4">
          <div className="flex items-center">
            <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="Logo" />&nbsp;
            <h2 className="text-2xl font-bold leading-tight">MAINTENANCE SERVICES</h2>
          </div>
          <p className="text-lg">
            <hr className="border-t-4 border-black my-4" />
            <b>"It is better not to have a product if you do not have someone to keep it updated and well maintained." </b>
            We have just the right resources, skills, and manpower needed to keep your product updated, keeping it operational and trouble-free. A website maintenance service includes revising, editing, or otherwise changing existing web pages to keep your website up to date and operational. Website maintenance services basically refer to keeping your website up to date in terms of company news, latest developments, and new project deals.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={Maintenance1} alt="Maintenance Service" className="w-full h-auto" />
        </div>
      </div>
      <div className="px-4 md:px-40">
        <h1 className="text-2xl font-bold leading-tight"><b>Our Maintenance Services Include:</b></h1>
        <hr className="border-black my-4" />
        <ul className="list-disc pl-5">
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
      </div>
      <div className="px-4 md:px-40 my-10">
        <p className="text-lg">
          All websites need to be maintained in order to keep them up to date. Some sites need daily updates while others only need occasional maintenance. We can diagnose your product and have it back to you really fast for an affordable fee.
        </p>
      </div>
    </div>

            <SatyaFooter/>
            </div>
  )
}

export default Maintenance;

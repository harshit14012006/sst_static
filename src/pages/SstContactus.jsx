import React from 'react';
import NavbarMain from '../components/NavbarMain';
import contactuspic from '../images/contactuspic.jpg';
import SstCardcontactus from '../components/SstCardcontactus';
import SstFormcontactus from '../components/SstFormcontactus';
import SatyaFooter from '../components/SatyaFooter';

function SstContactus() {
  return (
    <div>
      <NavbarMain />
    <div className="bg-gray-100">
      
      <div className="relative overflow-hidden">
        <img
          src={contactuspic}
          alt='Contact Us'
          className="w-full h-auto max-h-60 object-cover"
        />
      </div>

      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <SstCardcontactus />
        <br />
        <SstFormcontactus />
      </div>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default SstContactus;

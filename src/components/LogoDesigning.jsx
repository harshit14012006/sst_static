import React from 'react'
import logo from '../images/logo.png';
import logoDesign from '../images/logo.jpg';
import NavbarMain from './NavbarMain';
import './LogoDesigning.css'
import SatyaFooter from './SatyaFooter';
import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.jpg'
import logo4 from '../images/logo4.jpg'
import logo5 from '../images/logo5.jpg'
import logo6 from '../images/logo6.jpg'
import logo7 from '../images/logo7.jpg'
import logo8 from '../images/logo8.jpg'
import logo9 from '../images/logo9.jpg'
function LogoDesigning() {
    return (
        <div>
            <NavbarMain/>
            <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-40 mt-10">
        <div className="md:w-1/2 p-4">
          <div className="flex items-center">
            <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="Logo" />&nbsp;
            <h2 className="text-2xl font-bold leading-tight">LOGO DESIGNING</h2>
          </div>
          <p className="text-lg">
            <hr className="border-t-4 border-black my-4" />
            <b>"A logo does not regard entertainment or an art form, but as a medium of information." </b>
            In order to understand what a logo design is, it is important to first understand what a logo design is used for: branding and identification. A logo identifies a product or company through the portrayal of a symbol, mark, flag or signature.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={logoDesign} alt="Website Design" className="w-full h-auto" />
        </div>
      </div>
      <p className="mx-4 md:mx-40">
        Before a logo design is created, the procedures and values of a company must be apparent. A logo design does not need to explain business practices, but it should symbolize the quality of that business. If a coffee shop prides itself on using all organic ingredients and its logo design consists of a cup of coffee next to a skull, viewers will get mixed messages. Bottom line—the meaning behind a logo design is far more important than its appearance.
        It is important to keep in mind that your logo design will not function perfectly until it becomes recognizable to others. This will come with time. Once viewers are able to subconsciously connect your logo design with your company and its goals, your logo design will be able to successfully stand alone.
        With the absence of a memorable, eye-catching and meaningful logo design, a business - no matter how small or large - will fight an uphill battle when it comes to name and brand recognition. With great logo design, a company's name will resonate clearly with all of their customers.
      </p>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Advantages Of Our Logo Designing</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <div className="pl-4 md:pl-7">
        <ul className="list-disc mx-4 md:mx-40">
          <li>Brand Oriented</li>
          <li>Business Oriented</li>
          <li>Versatile</li>
          <li>Magnificent</li>
          <li>Professional</li>
        </ul>
      </div>
      <p className="mx-4 md:mx-40 my-4">
        And here we design the logo that summarizes your business ideas without any brainstorming.
      </p>
      <br />
    </div>

        <SatyaFooter/>
        </div>
    )
}

export default LogoDesigning

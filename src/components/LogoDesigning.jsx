import React from 'react';
import logo from '../images/logo.png';
import logoDesign from '../images/logo.jpg';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';

function LogoDesigning() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <NavbarMain />
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row items-center md:mx-20 mb-12">
                    <div className="md:w-1/2 p-4">
                        <div className="flex items-center mb-6">
                            <img src={logo} className="w-16 h-16 object-cover rounded-full shadow-lg" alt="Logo" />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-4">LOGO DESIGNING</h2>
                        </div>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                        <hr className="border-t-4 border-gray-300 my-4" />
                            <strong>"A logo does not regard entertainment or an art form, but as a medium of information."</strong> In order to understand what a logo design is, it is important to first understand what a logo design is used for: branding and identification. A logo identifies a product or company through the portrayal of a symbol, mark, flag, or signature.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <img src={logoDesign} alt="Logo Design" className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mx-4 md:mx-16 mb-12">
                    Before a logo design is created, the procedures and values of a company must be apparent. A logo design does not need to explain business practices, but it should symbolize the quality of that business. If a coffee shop prides itself on using all organic ingredients and its logo design consists of a cup of coffee next to a skull, viewers will get mixed messages. Bottom line—the meaning behind a logo design is far more important than its appearance.
                    <br /><br />
                    It is important to keep in mind that your logo design will not function perfectly until it becomes recognizable to others. This will come with time. Once viewers are able to subconsciously connect your logo design with your company and its goals, your logo design will be able to successfully stand alone.
                    <br /><br />
                    With the absence of a memorable, eye-catching, and meaningful logo design, a business—no matter how small or large—will fight an uphill battle when it comes to name and brand recognition. With great logo design, a company's name will resonate clearly with all of their customers.
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-4 md:mx-16 mb-6">
                    <strong>Advantages Of Our Logo Designing</strong>
                </h1>
                <hr className="border-blue-600 mx-4 md:mx-16 mb-8" />
                <div className="mx-4 md:mx-16">
                    <ul className="list-disc text-base md:text-lg text-gray-800 space-y-2">
                        <li>Brand Oriented</li>
                        <li>Business Oriented</li>
                        <li>Versatile</li>
                        <li>Magnificent</li>
                        <li>Professional</li>
                    </ul>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mx-4 md:mx-16 mt-4">
                    And here we design the logo that summarizes your business ideas without any brainstorming.
                </p>
            </div>
            <SatyaFooter />
        </div>
    );
}

export default LogoDesigning;

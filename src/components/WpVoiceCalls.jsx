import React from 'react';
import logo from '../images/wpLogo.webp';
import wp from '../images/voice.jpg';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function WpVoiceCalls() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 my-10">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img src={logo} className="w-16 h-16 object-cover rounded-full border-2 border-gray-300 shadow-lg" alt="WhatsApp Logo" />
              <h2 className="text-3xl font-bold text-gray-800 ml-4">Voice Calls</h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <hr className="border-t-2 border-gray-300 my-4" />
              Voice calls provide a reliable and immediate way to communicate, allowing for clear and direct conversations regardless of distance. They offer a personal touch, enhancing understanding and connection through tone and inflection. Whether for personal or professional use, voice calls facilitate real-time, meaningful interactions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={wp} alt="Voice Calls" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <section className="my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Advantages of Voice Calls</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 pl-5">
            <li>Real-Time Communication</li>
            <li>Personal Touch</li>
            <li>Clarity and Precision</li>
            <li>Efficiency</li>
            <li>Accessibility</li>
            <li>Versatility</li>
            <li>Security</li>
            <li>Compatibility</li>
          </ul>
        </section>
        <section className="my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">The Evolution of Voice Calls in the Digital Age</h1>
          <hr className="border-gray-300 mb-6" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Voice calls have come a long way since the days of landlines and rotary phones. With the advent of mobile technology and VoIP (Voice over Internet Protocol) services, making a call has never been more accessible or versatile. Modern smartphones offer high-definition voice quality, reducing background noise and enhancing clarity. Additionally, internet-based calling apps like WhatsApp, Skype, and Zoom have revolutionized how we connect, providing cost-effective and feature-rich alternatives to traditional calls. These platforms enable international communication without the hefty charges, making it easier to stay in touch with friends, family, and colleagues around the world. The integration of voice calls with other communication tools, such as video calls and instant messaging, creates a seamless user experience, blending various forms of interaction into a single, cohesive platform. As technology continues to advance, the future of voice calls promises even more innovation, with potential developments in AI-driven voice recognition and real-time language translation.
          </p>
        </section>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default WpVoiceCalls;

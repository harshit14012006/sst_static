import React from 'react';
import logo from '../images/wpLogo.webp';
import wp from '../images/voice.jpg';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function WpVoiceCalls() {
  return (
    <div>
      <NavbarMain/>
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-40 m-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="WhatsApp Logo" />
            <h2 className="text-2xl font-bold leading-tight ml-2">VOICE CALLS</h2>
          </div>
          <p className="text">
            <hr className="border-t-4 border-black my-4" />
            Voice calls provide a reliable and immediate way to communicate, allowing for clear and direct conversations regardless of distance. They offer a personal touch, enhancing understanding and connection through tone and inflection. Whether for personal or professional use, voice calls facilitate real-time, meaningful interactions.
            </p>
        </div>
        <div className="md:w-1/2">
          <img src={wp} alt="Website Design" className="w-full ml-2 h-auto object-cover" />
        </div>
      </div>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Advantages of Voice Calls</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <div className="pl-4 md:pl-7">
        <ul className="mx-4 md:mx-40 list-disc">
          <li>Real-Time Communication</li>
          <li>Personal Touch</li>
          <li>Clarity and Precision</li>
          <li>Efficiency</li>
          <li>Accessibility</li>
          <li>Versatility</li>
          <li>Security</li>
          <li>Compatibility</li>
        </ul>
      </div>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>The Evolution of Voice Calls in the Digital Age</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <p className="mx-4 md:mx-40 my-4">
      Voice calls have come a long way since the days of landlines and rotary phones. With the advent of mobile technology and VoIP (Voice over Internet Protocol) services, making a call has never been more accessible or versatile. Modern smartphones offer high-definition voice quality, reducing background noise and enhancing clarity. Additionally, internet-based calling apps like WhatsApp, Skype, and Zoom have revolutionized how we connect, providing cost-effective and feature-rich alternatives to traditional calls. These platforms enable international communication without the hefty charges, making it easier to stay in touch with friends, family, and colleagues around the world. The integration of voice calls with other communication tools, such as video calls and instant messaging, creates a seamless user experience, blending various forms of interaction into a single, cohesive platform. As technology continues to advance, the future of voice calls promises even more innovation, with potential developments in AI-driven voice recognition and real-time language translation.
      </p>
      <br />
    </div>
    <SatyaFooter/>
    </div>
  );
}

export default WpVoiceCalls;
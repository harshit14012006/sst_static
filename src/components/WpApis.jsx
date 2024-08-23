import React from 'react';
import logo from '../images/wpLogo2.jpg';
import wp from '../images/wpApi.png';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function WpApis() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 my-10">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img src={logo} className="w-16 h-16 object-cover rounded-full border-2 border-gray-300" alt="WhatsApp Logo" />
              <h2 className="text-3xl font-bold text-gray-800 ml-4">WhatsApp APIs</h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <hr className="border-t-2 border-gray-300 my-4" />
              WhatsApp APIs enable businesses to integrate WhatsApp messaging into their applications, allowing for automated and personalized communication with customers. These APIs support features such as sending messages, notifications, and media, enhancing customer engagement and support.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={wp} alt="WhatsApp API Features" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <section className="my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Advantages of WhatsApp APIs</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 pl-5">
            <li>Enhanced Customer Engagement</li>
            <li>Automation</li>
            <li>Multimedia Support</li>
            <li>Secure Messaging</li>
            <li>Real-Time Communication</li>
            <li>Cost-Effective</li>
            <li>Integration with CRM Systems</li>
            <li>Analytics and Reporting</li>
          </ul>
        </section>
        <section className="my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Streamlining Customer Support with WhatsApp APIs</h1>
          <hr className="border-gray-300 mb-6" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            WhatsApp APIs revolutionize customer support by providing a seamless and efficient communication channel. Businesses can automate responses to common queries, ensuring customers receive instant assistance even outside of regular business hours. The ability to send multimedia messages, such as images and videos, allows support teams to provide detailed instructions and solutions, enhancing the overall customer experience. Integration with CRM systems enables the storage and retrieval of customer interaction history, facilitating personalized support and faster issue resolution. Additionally, real-time messaging ensures that urgent issues are addressed promptly, boosting customer satisfaction and loyalty. By leveraging WhatsApp APIs, companies can create a more responsive and engaging support system that meets the demands of today's fast-paced digital world.
          </p>
        </section>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default WpApis;

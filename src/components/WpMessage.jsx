import React from 'react';
import logo from '../images/wpMsg.png';
import wp from '../images/wp2.jpg';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function WpMessage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 my-10">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img src={logo} className="w-16 h-16 object-cover rounded-full border-2 border-gray-300" alt="WhatsApp Logo" />
              <h2 className="text-3xl font-bold text-gray-800 ml-4">WhatsApp Messages</h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <hr className="border-t-2 border-gray-300 my-4" />
              WhatsApp messages offer a reliable and instant way to communicate with friends, family, and businesses globally. They support text, voice, video, and multimedia, making conversations dynamic and interactive. WhatsApp messages provide a secure platform with end-to-end encryption, ensuring privacy in all communications.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={wp} alt="WhatsApp Messaging" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <section className="my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Advantages of WhatsApp Messages</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 pl-5">
            <li>Instant Communication</li>
            <li>Multimedia Support</li>
            <li>End-to-End Encryption</li>
            <li>Cross-Platform Compatibility</li>
            <li>Status Updates</li>
            <li>User-Friendly Interface</li>
            <li>Integration with Contacts</li>
          </ul>
        </section>
        <section className="my-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Enhancing Business Communication with WhatsApp Messages</h1>
          <hr className="border-gray-300 mb-6" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            WhatsApp messages are transforming the way businesses communicate with their customers. By leveraging WhatsApp's vast user base, businesses can reach their audience quickly and effectively. The app's multimedia capabilities allow companies to send promotional images, videos, and catalogs directly to customers, making marketing campaigns more interactive and engaging. Automated responses and chatbots can handle routine inquiries, freeing up human resources for more complex tasks. Additionally, the end-to-end encryption ensures that all business communications remain secure, fostering trust between the company and its customers. With features like broadcast lists and group chats, businesses can easily segment their audience and tailor messages to specific customer groups, improving the relevance and impact of their communications. Overall, WhatsApp messages offer a versatile and efficient platform for enhancing customer engagement and streamlining business operations.
          </p>
        </section>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default WpMessage;

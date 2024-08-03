import React from 'react';
import logo from '../images/wpMsg.png';
import wp from '../images/wp2.jpg';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function WpMessage() {
  return (
    <div>
      <NavbarMain/>
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-40 m-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="WhatsApp Logo" />
            <h2 className="text-2xl font-bold leading-tight ml-2">WHATSAPP MESSAGES</h2>
          </div>
          <p className="text">
            <hr className="border-t-4 border-black my-4" />
            WhatsApp messages offer a reliable and instant way to communicate with friends, family, and businesses globally. They support text, voice, video, and multimedia, making conversations dynamic and interactive.WhatsApp messages provide a secure platform with end-to-end encryption, ensuring privacy in all communications. 
            </p>
        </div>
        <div className="md:w-1/2">
          <img src={wp} alt="Website Design" className="w-full ml-2 h-auto object-cover" />
        </div>
      </div>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Advantages of WhatsApp Messages</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <div className="pl-4 md:pl-7">
        <ul className="mx-4 md:mx-40 list-disc">
          <li>Instant Communication</li>
          <li>Multimedia Support</li>
          <li>End-to-End Encryptiont</li>
          <li>Cross-Platform Compatibility</li>
          <li>Status Updates</li>
          <li>User-Friendly Interface</li>
          <li>Integration with Contacts</li>
        </ul>
      </div>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Enhancing Business Communication with WhatsApp Messages</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <p className="mx-4 md:mx-40 my-4">
      WhatsApp messages are transforming the way businesses communicate with their customers. By leveraging WhatsApp's vast user base, businesses can reach their audience quickly and effectively. The app's multimedia capabilities allow companies to send promotional images, videos, and catalogs directly to customers, making marketing campaigns more interactive and engaging. Automated responses and chatbots can handle routine inquiries, freeing up human resources for more complex tasks. Additionally, the end-to-end encryption ensures that all business communications remain secure, fostering trust between the company and its customers. With features like broadcast lists and group chats, businesses can easily segment their audience and tailor messages to specific customer groups, improving the relevance and impact of their communications. Overall, WhatsApp messages offer a versatile and efficient platform for enhancing customer engagement and streamlining business operations.
      </p>
      <br />
    </div>
    <SatyaFooter/>
    </div>
  );
}

export default WpMessage;
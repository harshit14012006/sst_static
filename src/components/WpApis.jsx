import React from 'react';
import logo from '../images/wpLogo2.jpg';
import wp from '../images/wpApi.png';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function WpApis() {
  return (
    <div>
        <NavbarMain/>
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-40 m-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="WhatsApp Logo" />
            <h2 className="text-2xl font-bold leading-tight ml-2">WHATSAPP APIs</h2>
          </div>
          <p className="text">
            <hr className="border-t-4 border-black my-4" />
            WhatsApp APIs enable businesses to integrate WhatsApp messaging into their applications, allowing for automated and personalized communication with customers. These APIs support features such as sending messages, notifications, and media, enhancing customer engagement and support.
            </p>
        </div>
        <div className="md:w-1/2">
          <img src={wp} alt="Website Design" className="w-full ml-2 h-auto object-cover" />
        </div>
      </div>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Advantages of WhatsApp APIs</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <div className="pl-4 md:pl-7">
        <ul className="mx-4 md:mx-40 list-disc">
          <li>Enhanced Customer Engagement</li>
          <li>Automation</li>
          <li>Multimedia Support</li>
          <li>Secure Messaging</li>
          <li>Real-Time Communication</li>
          <li>Cost-Effective</li>
          <li>Integration with CRM Systems</li>
          <li>Analytics and Reporting</li>
        </ul>
      </div>
      <br />
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Streamlining Customer Support with WhatsApp APIs</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <p className="mx-4 md:mx-40 my-4">
      WhatsApp APIs revolutionize customer support by providing a seamless and efficient communication channel. Businesses can automate responses to common queries, ensuring customers receive instant assistance even outside of regular business hours. The ability to send multimedia messages, such as images and videos, allows support teams to provide detailed instructions and solutions, enhancing the overall customer experience. Integration with CRM systems enables the storage and retrieval of customer interaction history, facilitating personalized support and faster issue resolution. Additionally, real-time messaging ensures that urgent issues are addressed promptly, boosting customer satisfaction and loyalty. By leveraging WhatsApp APIs, companies can create a more responsive and engaging support system that meets the demands of today's fast-paced digital world.
      </p>
      <br />
    </div>
    <SatyaFooter/>
    </div>
  );
}

export default WpApis;
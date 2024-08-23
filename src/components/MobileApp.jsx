import React from 'react';
import mob from '../images/mobLogo.png';
import logo from '../images/mobile.jpg';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';

function MobileApp() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-16 my-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="flex items-center mb-6">
              <img src={mob} className="w-16 h-16 object-cover rounded-full shadow-lg" alt="Mobile App Logo" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-4">MOBILE APP DEVELOPMENT</h2>
            </div>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              <hr className="border-t-4 border-gray-300 my-4" />
              Mobile app development involves creating software applications designed to run on mobile devices, such as smartphones and tablets. This process encompasses designing user interfaces, coding functionality, and ensuring compatibility across different devices and operating systems. It aims to provide users with seamless, intuitive, and engaging experiences tailored to their needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={logo} alt="Mobile App Design" className="w-full ml-5 h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-4 md:mx-16 my-6">
          <strong>Advantages of Mobile App Development</strong>
        </h1>
        <hr className="border-gray-300 mx-4 md:mx-16 mb-8" />

        <div className="mx-4 md:mx-16">
          <ul className="list-disc text-base md:text-lg text-gray-800 space-y-2">
            <li>Enhanced User Engagement</li>
            <li>Accessibility</li>
            <li>Brand Visibility</li>
            <li>Direct Marketing Channel</li>
            <li>Improved Customer Loyalty</li>
            <li>Revenue Generation</li>
            <li>Performance</li>
            <li>Offline Functionality</li>
            <li>Data Collection</li>
            <li>Integration with Device Features</li>
          </ul>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mx-4 md:mx-16 my-6">
          <strong>The Role of User Experience in Mobile App Development</strong>
        </h1>
        <hr className="border-gray-300 mx-4 md:mx-16 mb-8" />
        
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mx-4 md:mx-16">
          User experience (UX) is a critical factor in mobile app development, determining how users interact with and perceive an app. A well-designed UX ensures that the app is intuitive, easy to navigate, and visually appealing, which can significantly enhance user satisfaction and retention. Developers must consider various aspects such as layout, color schemes, font sizes, and touch-friendly interfaces to create an engaging experience. Furthermore, seamless integration with device features, quick load times, and minimal bugs are essential to maintain user interest. Regular updates and user feedback loops help in continuously improving the app's usability and functionality. By prioritizing UX, developers can create mobile applications that not only attract users but also encourage long-term engagement and loyalty.
        </p>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default MobileApp;

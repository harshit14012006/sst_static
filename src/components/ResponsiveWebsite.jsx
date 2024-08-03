import React from 'react';
import statics from '../images/responsiveWeb.png';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function ResponsiveWebsite() {
  return (
    <div>
      <NavbarMain />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img
            src={statics}
            alt="Responsive Website Design"
            className="w-full sm:w-3/4 lg:w-1/2 h-auto object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            RESPONSIVE WEBSITE DESIGNING
          </h1>
          <hr className="border-black mx-auto w-1/2" />
        </div>
        <p className="text-base sm:text-lg leading-relaxed mb-8">
          In today's digital age, the diversity of devices used to access the
          internet is vast. From desktops and laptops to tablets and smartphones,
          users expect a seamless and intuitive experience regardless of the
          device they use. Responsive web design is the solution that bridges
          this gap, ensuring that websites are accessible, user-friendly, and
          visually appealing on all devices. This approach not only enhances
          user satisfaction but also boosts engagement and retention, making it
          an essential practice for modern web development.
        </p>
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Advantage of Responsive Website Designing
          </h1>
          <hr className="border-black mx-auto w-1/2" />
        </div>
        <div className="pl-4 sm:pl-6 lg:pl-8 mb-8">
          <ul className="list-disc text-base sm:text-lg leading-relaxed">
            <li className="mb-2">Enhanced User Experience</li>
            <li className="mb-2">Increased Mobile Traffic</li>
            <li className="mb-2">Improved SEO Performance</li>
            <li className="mb-2">Cost Efficiency</li>
            <li className="mb-2">Easier Maintenance</li>
            <li className="mb-2">Faster Page Load Times</li>
            <li className="mb-2">Higher Conversion Rates</li>
            <li className="mb-2">Future-Proofing</li>
            <li className="mb-2">Better Analytics and Reporting</li>
            <li className="mb-2">Improved Brand Perception</li>
          </ul>
        </div>
        <p className="text-base sm:text-lg leading-relaxed mb-8">
          We are developing simple, innovative and informative websites with an
          attractive look and feel, in the most affordable and competitive
          prices.
        </p>
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            The Role of User Experience (UX) in Responsive Web Design
          </h1>
          <hr className="border-black mx-auto w-1/2" />
        </div>
        <p className="text-base sm:text-lg leading-relaxed mb-8">
          User experience (UX) plays a pivotal role in responsive web design by
          ensuring that a website is not only visually appealing but also
          functional and easy to navigate across various devices. A strong UX
          strategy starts with understanding the needs and behaviors of users
          on different devices, which helps in creating a layout that is
          intuitive and user-friendly. This involves designing clear and
          accessible navigation menus, optimizing touch interactions for mobile
          users, and ensuring that content is easily readable regardless of
          screen size. Additionally, incorporating feedback loops and
          conducting usability testing are crucial for identifying potential
          issues and making necessary adjustments. By prioritizing UX in
          responsive design, websites can enhance user satisfaction, foster
          engagement, and drive conversions, ultimately contributing to the
          overall success of the online presence.
        </p>
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Best Practices for Responsive Web Design
          </h1>
          <hr className="border-black mx-auto w-1/2" />
        </div>
        <div className="pl-4 sm:pl-6 lg:pl-8 mb-8">
          <ul className="list-disc text-base sm:text-lg leading-relaxed">
            <li className="mb-2">Mobile-First Approach</li>
            <li className="mb-2">Flexible Grid Layouts</li>
            <li className="mb-2">Media Queries</li>
            <li className="mb-2">Responsive Images</li>
            <li className="mb-2">Consistent Navigation</li>
            <li className="mb-2">Testing Across Devices</li>
            <li className="mb-2">Optimize Performance</li>
          </ul>
        </div>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default ResponsiveWebsite;

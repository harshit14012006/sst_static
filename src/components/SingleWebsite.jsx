import React from 'react';
import single from '../images/singleWeb.png';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function SingleWebsite() {
  return (
    <div>
      <NavbarMain />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img
            src={single}
            alt="Single Page Design"
            className="w-full sm:w-3/4 lg:w-1/2 h-auto object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            SINGLE PAGE DESIGNING
          </h1>
          <hr className="border-black mx-auto w-1/2" />
        </div>
        <p className="text-base sm:text-lg leading-relaxed mb-8">
          Single page design is a web design approach where all the content is
          contained within a single, scrollable page. This design method is ideal
          for creating seamless, continuous user experiences, as it eliminates
          the need for multiple page loads. It often employs techniques like
          parallax scrolling, dynamic loading, and smooth transitions to enhance
          interactivity and engagement. Single page websites are particularly
          effective for portfolios, product presentations, and landing pages where
          a linear storytelling format can be beneficial. By focusing on a
          streamlined and focused layout, single page design helps keep users'
          attention and guides them through the content in a controlled and
          intuitive manner.
        </p>
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Advantage of Single Page Designing
          </h1>
          <hr className="border-black mx-auto w-1/2" />
        </div>
        <div className="pl-4 sm:pl-6 lg:pl-8 mb-8">
          <ul className="list-disc text-base sm:text-lg leading-relaxed">
            <li className="mb-2">Enhanced User Experience</li>
            <li className="mb-2">Faster Navigation</li>
            <li className="mb-2">Improved Mobile Compatibility</li>
            <li className="mb-2">Increased Conversion Rates</li>
            <li className="mb-2">Easier Maintenance</li>
            <li className="mb-2">SEO Benefits</li>
            <li className="mb-2">Simplified User Flow</li>
            <li className="mb-2">Reduced Development Time</li>
          </ul>
        </div>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default SingleWebsite;

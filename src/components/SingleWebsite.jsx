import React from 'react';
import single from '../images/singleWeb.png';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function SingleWebsite() {
  return (
    <div>
      <NavbarMain />
      <div className="container my-10 px-4 sm:px-6 lg:px-8">
        <center>
          <img
            src={single}
            alt=""
            className="w-full sm:w-1/2 h-auto object-contain"
          />
        </center>
        <h1 className="text-xl sm:text-2xl font-bold leading-tight my-4">
          <b>SINGLE PAGE DESIGNING</b>
        </h1>
        <hr className="border-black" />
        <p className="my-6 text-sm sm:text-base">
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
        <h1 className="text-xl sm:text-2xl font-bold leading-tight my-4">
          <b>Advantage of Single Page Designing</b>
        </h1>
        <hr className="border-black" />
        <div className="pl-4 sm:pl-7">
          <ul className="list-disc text-sm sm:text-base">
            <li>Enhanced User Experience</li>
            <li>Faster Navigation</li>
            <li>Improved Mobile Compatibility</li>
            <li>Increased Conversion Rates</li>
            <li>Maintain records.</li>
            <li>Easier Maintenance</li>
            <li>SEO Benefits</li>
            <li>Simplified User Flow</li>
            <li>Reduced Development Time</li>
          </ul>
        </div>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default SingleWebsite;

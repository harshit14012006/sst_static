import React from 'react';
import logo from '../images/onlineLogo.png';
import online from '../images/digital.jpg';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';

function DigitalMarketing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="md:w-1/2 p-4">
            <div className="flex items-center mb-6">
              <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="Logo" />
              <h2 className="text-2xl md:text-3xl font-bold leading-tight ml-4 text-gray-800">DIGITAL MARKETING</h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <hr className="border-t-4 border-gray-300 my-4" />
              Digital marketing combines SEO (Search Engine Optimization) and SMO (Social Media Optimization) to enhance a brand's online presence and drive traffic. SEO focuses on improving website visibility in search engine results through keyword optimization, content quality, and technical improvements, helping attract organic traffic. SMO, on the other hand, leverages social media platforms to increase brand awareness, engage with the audience, and drive traffic through strategic content sharing and targeted advertising.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src={online} alt="Digital Marketing" className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <section className="my-10 px-4 md:px-16">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Advantages Of Search Engine Optimization</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-2">
            <li>Search Engine Optimization</li>
            <li>Social Media Optimization</li>
            <li>Pay Per Click</li>
            <li>Customer Oriented</li>
            <li>Brand Oriented</li>
            <li>Millions of Customers</li>
            <li>Versatile</li>
            <li>Strong web presence</li>
            <li>Targeted Traffic</li>
            <li>Manage files such as photos and documents</li>
            <li>Ever increasing sales</li>
            <li>Long term positioning</li>
            <li>More revenue</li>
          </ul>
        </section>
        <section className="my-10 px-4 md:px-16">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Advantages Of Social Media Optimization</h1>
          <hr className="border-gray-300 mb-6" />
          <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 space-y-2">
            <li>Increased Brand Visibility</li>
            <li>Enhanced Customer Engagement</li>
            <li>Improved Search Engine Rankings</li>
            <li>Targeted Advertising</li>
            <li>Higher Website Traffic</li>
            <li>Better Customer Insights</li>
            <li>Cost-Effective Marketing</li>
            <li>Brand Loyalty and Trust</li>
            <li>Competitive Advantage</li>
          </ul>
        </section>
        <section className="px-4 md:px-16 my-10">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Many businesses seem to think that a company logo on a banner ad is enough to get people to click on it. But it's not. Remember that an online customer is already engaged and focused--unlike a radio listener or even a TV viewer, who may only be half paying attention or out of the room when an ad appears. You want to take advantage of that focus while web surfers' fingers are on their keyboards.
            <br />
            Having a website is not synonymous with internet marketing. The internet is vast and your website may be easily lost among millions of other similar sites. You need the help of a specialist to market your products and services online. So, we not only prepare a website for you, we also promote your website in search engines for better results.
          </p>
        </section>
      </div>
      <SatyaFooter />
    </div>
  );
}

export default DigitalMarketing;

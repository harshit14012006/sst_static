import React from 'react'
import aboutPic from '../images/aboutPic.jpg'
import NavbarMain from '../components/NavbarMain'
import SatyaFooter from '../components/SatyaFooter'
import aboutUS from '../images/aboutUS.jpg'
function SstAboutUs() 
{
  return (
    <div>
        <NavbarMain/>
        <img src={aboutUS} className='w-full h-96'/>
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="max-w-5xl w-full px-4 md:px-8">
        <div className='flex display-center'>
        <img src={aboutPic} className="w-12 h-12 object-cover rounded-full" />
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        </div>
        <hr className="border-t-4 border-gray-400 my-4" />
        <p className="text-gray-700 leading-loose mb-4">
          A website is your best salesman. Creating an online presence that represents your business is more important now than ever. We provide top quality websites to small and medium size businesses at affordable prices. We pride ourselves by offering solutions that help keep the power in the hands of the business owner.
        </p>
        <p className="text-gray-700 leading-loose mb-4">
          In the modern era of technology, there are millions of people accessing the websites every day; therefore it is very important for you to have a website that provides a platform to your products and services. You might be doing well with your business strategies, but if your enterprise has a presence in web world than it will able to stand to its optimum potentials.
        </p>
        <p className="text-gray-700 leading-loose mb-4">
          At <b>Shri Satya Technologies</b>, we never stop improving. We never stop thinking out fresh new ideas that could get our client's goal across. We never stop finding an updated technology that could translate a business's vision into reality. We know that there is so much room for change, especially in this kind of business. We renovate the concept of your business into a dazzling website that helps you in making durable impression for your brand, in increasing leads and sales. We have a team that has the creativity, technology and marketing know-how to make it happen.
        </p>
        <p className="text-gray-700 leading-loose mb-4">
          In today's competitive world we understand the significance of competition in every business venture. The way we deal with competition is translated to how we make our clients win it over the others as well. That's why we not only deliver you a complete web solution but also provide you online website promotion services including SEO (Search Engine Optimization), SMO (Social Media Optimization) and PPC (Pay Per Click) to improve your online presence and bring highly targeted traffic to your website and build your brand name online.
        </p>
        <p className="text-gray-700 leading-loose mb-4">
          An effectively created website will do more good to your business than the all other poor ways of promotions. That's why we provide you a website that is based on visual quality, viewing speed, ease of navigation and hundreds of other factors that make a paramount web presence of your business.
        </p>
        <p className="text-gray-700 leading-loose">
          At <b>Shri Satya Technologies</b>, We have a team of expert to offer catchy and proficient website designs for any corporate, business, social and other organizations. Just have a look at our portfolio to see what we've done for our valuable clients.
        </p>
      </div>
    </div>
    <SatyaFooter/>
    </div>
  )
}

export default SstAboutUs

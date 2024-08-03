import React from 'react'
import soft from '../images/softLogo.jpg'
import softDev from '../images/softDev.jpg'
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';
function SoftwareDevelopment() {
    return (
        <div>
            <NavbarMain/>
            <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-40 my-10">
        <div className="md:w-1/2 p-4">
          <div className="flex items-center">
            <img src={soft} className="w-12 h-12 object-cover rounded-full" alt="Software Logo" />&nbsp;
            <h2 className="text-2xl font-bold leading-tight">SOFTWARE DEVELOPMENT</h2>
          </div>
          <p className="text-lg">
            <hr className="border-t-4 border-black my-4" />
            We have demonstrated our abilities in delivering the customized applications using cutting edge technologies. Our Customer oriented approach enables us to deliver the optimum solutions for your requirements.<br />
            At <b>Shri Satya Technologies</b>, we strongly focus on creating customer-oriented software applications. Our development team minutely examines and analyzes the existing IT processes of the clients. It performs gap analysis to ensure complete compatibility between existing systems and custom developed applications. The applications are designed, tested, and deployed to the complete satisfaction of the clients.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={softDev} alt="Software Development" className="w-full h-auto" />
        </div>
      </div>
      <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Advantages Of Our Software Development</b></h1>
      <hr className="border-black mx-4 md:mx-40" />
      <div className='pl-4 md:pl-7'>
        <ul className='list-disc mx-4 md:mx-40'>
          <li>Fully Customized</li>
          <li>User Friendly</li>
          <li>Easy to Learn</li>
          <li>Easy to Update</li>
          <li>Performance Oriented</li>
          <li>Custom web-based application development using technologies like ASP.NET</li>
        </ul>
      </div>
      <p className='mx-4 md:mx-40 my-4'>
        We develop software that makes your business strategy more easy and effective and provide all your data in the easiest format as you want to see so that you can plan your business accordingly. We develop fully customized software that fulfills all your business needs.
      </p>
      <br />
    </div>

        <SatyaFooter/>
        </div>
    )
}

export default SoftwareDevelopment;

import React from 'react'
import statics from '../images/dynamicWeb.png'
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';
function DynamicWebsite() {
    return (
        <div>
            <NavbarMain/>
            <div className='container mx-auto px-4 my-10'>
            <center><img src={statics} alt='' className='w-full max-w-sm md:max-w-md lg:max-w-lg' /></center><br />
            <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>DYNAMIC WEBSITE DESIGNING</b></h1>
            <hr className="border-black mx-4 md:mx-40" />
            <p className='mx-4 md:mx-40 my-6'>
                Today's market scenario requires every business to possess a solid web presence in order to attract visitors. Simply having a website is not enough; you need to update it in line with the changes that are taking place in your business to ensure that the latest information is conveyed to your prospective and existing customers.
                A dynamic web page is a page that changes according to the user. With the help of a connected database it gives response to the user's need and provides exact information to the user. A static website is good for small businesses dealing with relatively simple products and services that can be promoted without high level of interactivity. However, if your business requires you to maintain stuff like catalogues, albums or complex data series online and in turn ensure high interactivity, a dynamic website is exactly what you need. We offer you dynamic website design that helps you derive long term benefits at economical rates.
                We interact with no. of dynamic websites in our daily life like tradus.in, ebay, naaptol.com etc.
            </p>
            <h1 className="text-2xl font-bold leading-tight mx-4 md:mx-40"><b>Advantage of Dynamic Website Designing</b></h1>
            <hr className="border-black mx-4 md:mx-40" />
            <div className='pl-7'>
                <ul className='list-disc mx-4 md:mx-40'>
                    <li>Easy to maintain.</li>
                    <li>Easy to update.</li>
                    <li>Manage files such as photos and documents</li>
                    <li>Manage users of your website and decide who may access which pages and files at what time</li>
                    <li>Maintain records.</li>
                    <li>Create your own Color Schemes (you can define predefined color for website)</li>
                    <li>It's much easier to provide customized sales information like quotes, calculations, discounts, etc to the customer.</li>
                    <li>Dynamic sites are database oriented and allow for easy modification of content, videos or images without depending on the webmaster.</li>
                    <li>Dynamic web design offers high flexibility, both for the site owner and the visitor.</li>
                    <li>Such websites are built with advanced technology that allow for easy crawling by search engine spiders.</li>
                </ul>
            </div>
            <br /><br />
            <div className="max-w-md mx-auto bg-blue-100 border border-gray-400 rounded-lg shadow-md p-6 mb-4 hover:border-blue-500 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Note:</h3><hr className="border-black" />
                <p className="text-gray-700">The price of dynamic website is depend on the requirement. The range of dynamic website is starts from Rs. 15,000.</p>
            </div>
        </div>

        <SatyaFooter/>
        </div>
    )
}
export default DynamicWebsite;
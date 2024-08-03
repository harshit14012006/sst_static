import React from 'react'
import logo from '../images/onlineLogo.png';
import online from '../images/digital.jpg';
import SatyaFooter from './SatyaFooter';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';
function DigitalMarketing() {
    return (
        <div>
            <NavbarMain />
        <div className="container mx-auto px-4 my-10">
            
        <div className="flex flex-col md:flex-row justify-center items-center md:mx-40 m-10">
            <div className="md:w-1/2 p-4">
                <div className="flex items-center">
                    <img src={logo} className="w-12 h-12 object-cover rounded-full" alt="Logo" />&nbsp;
                    <h2 className="text-2xl font-bold leading-tight">DIGITAL MARKETING (SEO & SMO)</h2>
                </div>
                <p className="text-lg">
                    <hr className="border-t-4 border-black my-4" />
                    Digital marketing combines SEO (Search Engine Optimization) and SMO (Social Media Optimization) to enhance a brand's online presence and drive traffic. SEO focuses on improving website visibility in search engine results through keyword optimization, content quality, and technical improvements, helping attract organic traffic. SMO, on the other hand, leverages social media platforms to increase brand awareness, engage with the audience, and drive traffic through strategic content sharing and targeted advertising.
                </p>
            </div>
            <div className="md:w-1/2 p-4">
                <img src={online} alt="Digital Marketing" className="w-full h-auto" />
            </div>
        </div>
        <div className="px-4 md:px-40">
            <h1 className="text-2xl font-bold leading-tight"><b>Advantages Of Search Engine Optimization</b></h1>
            <hr className="border-black my-4" />
            <ul className="list-disc pl-5">
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
        </div>
        <div className="px-4 md:px-40 my-10">
            <h1 className="text-2xl font-bold leading-tight"><b>Advantages Of Social Media Optimization</b></h1>
            <hr className="border-black my-4" />
            <ul className="list-disc pl-5">
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
        </div>
        <div className="px-4 md:px-40 my-10">
            <p className="text-lg">
                Many businesses seem to think that a company logo on a banner ad is enough to get people to click on it. But it's not. Remember that an online customer is already engaged and focused--unlike a radio listener or even a TV viewer, who may only be half paying attention or out of the room when an ad appears. You want to take advantage of that focus while web surfers' fingers are on their keyboards.
                <br />
                Having a website is not synonymous with internet marketing. The internet is vast and your website may be easily lost among millions of other similar sites. You need the help of a specialist to market your products and services online. So, we not only prepare a website for you, we also promote your website in search engines for better results.
            </p>
        </div>
        </div>
        <SatyaFooter/>
    </div>

    )
}

export default DigitalMarketing
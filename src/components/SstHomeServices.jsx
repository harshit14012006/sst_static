import React from 'react';
import { Link } from 'react-router-dom';
import './SstHomeServices.css';

const cards = [
  {
    link: "/web-development-designing",
    icon: "fas fa-code",
    title: "Web Development",
    description: "Many people use the two terms 'web design' and 'web development' interchangeably, but have different meanings.",
    color: "#4A90E2",
  },
  {
    link: "/software-development",
    icon: "fas fa-laptop-code",
    title: "Software Development",
    description: "We have demonstrated our abilities in delivering customized applications using cutting-edge technologies.",
    color: "#50E3C2",
  },
  {
    link: "/e-commerce",
    icon: "fas fa-shopping-cart",
    title: "E-Commerce App",
    description: "An e-commerce app provides a seamless online shopping experience by allowing users to browse, select.",
    color: "#F5A623",
  },
  {
    link: "/mobile-app",
    icon: "fas fa-mobile-alt",
    title: "Mobile-App",
    description: "Mobile app development involves creating software applications designed to run on mobile devices, such as smartphones and tablets.",
    color: "#BD10E0",
  },
  {
    link: "/maintenance",
    icon: "fas fa-tools",
    title: "Maintenance Services",
    description: "It is better not to have a product if you do not have someone to keep it updated and well maintained.",
    color: "#7ED321",
  },
  {
    link: "/digital-marketing",
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    description: "Digital marketing combines SEO (Search Engine Optimization) and SMO (Social Media Optimization).",
    color: "#D0021B",
  },
  {
    link: "/voice-calls",
    icon: "fas fa-phone-alt",
    title: "Voice Calls",
    description: "Integrate voice call functionalities into your application for better communication.",
    color: "#F8E71C",
  },
  {
    link: "/whatsapp-messages",
    icon: "fas fa-comment-dots",
    title: "WhatsApp Messages",
    description: "WhatsApp messages offer a reliable and instant way to communicate with friends.",
    color: "#8B572A",
  },
  {
    link: "/whatsapp-apis",
    icon: "fas fa-project-diagram",
    title: "WhatsApp APIs",
    description: "WhatsApp APIs enable businesses to integrate WhatsApp messaging into their applications.",
    color: "#417505",
  },
  {
    link: "/logo-designing",
    icon: "fas fa-palette",
    title: "Logo Designing",
    description: "A logo does not regard entertainment or an art form, but as a medium of information.",
    color: "#9013FE",
  },
];

function SstHomeServices() {
  return (
    <div className="relative w-full py-8">
      <div className="a overflow-hidden">
        <div className="a flex animate-marquee">
          {cards.map((card, index) => (
            <div key={index} className="a flex-none w-64 sm:w-72 md:w-80 lg:w-96 p-4">
              <Link to={card.link} className="block bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative flex items-center justify-center h-48">
                  <i className={`${card.icon} text-6xl`} style={{ color: card.color }}></i>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-2 flex-1">{card.description}</p>
                  <p className="text-white text-sm rounded-lg font-medium bg-gray-700 max-w-24 p-1 pl-3">Read More</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SstHomeServices;

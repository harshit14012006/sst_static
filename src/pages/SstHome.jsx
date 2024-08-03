import React from "react";
import NavbarMain from "../components/NavbarMain";
import SliderMain from "../components/SliderMain";
import FooterMain from "../components/FooterMain";
import SstInfohome from "../components/SstInfohome";
//import SstCardhome from "../components/SstCardhome";
import SstTestimonial from "../components/SstTestimonial";
import SstFramework from '../components/SstFramework';
import SatyaFooter from "../components/SatyaFooter";
import SstHomeShow from "../components/SstHomeShow";
import SstHomeServices from '../components/SstHomeServices.jsx';
function SstHome() {
  return (
    <div>
      <NavbarMain />
      <SliderMain />
      <br/>
      <SstHomeShow/>
      <SstHomeServices/>
      <SstFramework/>
      <SstTestimonial/>
      <SatyaFooter/>
    </div>
  );
}

export default SstHome;

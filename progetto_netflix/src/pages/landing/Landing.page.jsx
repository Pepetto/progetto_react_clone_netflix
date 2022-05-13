import React from "react";
import AccordionLanding from "../../components/Accordion/Accordion.components";


// COMPONENTI
import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";

export default function Landing() {
  return (
    <div>
      <Header />
      <AccordionLanding/>
      <Footer />
    </div>
  );
}

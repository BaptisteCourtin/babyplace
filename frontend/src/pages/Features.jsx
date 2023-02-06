import React from "react";
import NavbarLite from "@components/features/components/NavbarLite";
import FooterLite from "@components/features/components/FooterLite";
import Mentions from "@components/features/components/Mentions";
import About from "@components/features/components/About";
import Profils from "@components/features/components/Profils";

function Features() {
  return (
    <div className="features" id="about">
      <NavbarLite />
      <About />
      <Profils />
      <Mentions />
      <FooterLite />
    </div>
  );
}

export default Features;

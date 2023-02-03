import React from "react";
import NavbarLite from "./components/NavbarLite";
import FooterLite from "./components/FooterLite";
import Mentions from "@components/features/components/Mentions";
import About from "@components/features/components/About";
import Profils from "@components/features/components/Profils";

function Features() {
  return (
    <div className="features" id="about">
      <NavbarLite />
      <section id="about-us">
        <About />
      </section>
      <section id="profil">
        <Profils />
      </section>
      <section id="mentions">
        <Mentions />
      </section>
      <FooterLite />
    </div>
  );
}

export default Features;

import React from "react";
import logoDave from "@assets/features/logoDave.png";

function About() {
  return (
    <section id="about-us">
      <h3>A propos de nous</h3>
      <div className="descriptionContainer">
        <div className="descriptionTxt">
          <p>
            Depuis 2022, l’agence Dave Warehouse propose ses services pour tous
            les projets de création de site et de référencement naturel.
            Implantée depuis sa créations à Nantes, Dave Warehouse peut vous
            accueillir pour améliorer nos échanges.
          </p>
          <p>
            {" "}
            Nous vivons le mouvement perpétuel. Nous aimons l’évolution, matière
            à réflexion et à innovation. Nous faisons notre métier avec
            enthousiasme et engagement. L’adaptation est l’essence même de notre
            longévité. Notre adaptation est une force et une capacité à avancer
            ensemble, que nous mettons au service de nos clients.
          </p>
        </div>
        <img src={logoDave} alt="logo des DaveWarehouse" />
      </div>
    </section>
  );
}

export default About;

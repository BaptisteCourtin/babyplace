import React from "react";
import PropTypes from "prop-types";

const tabFav = [
  {
    nom: "nom prenom",
    email: "email personne 1",
    tel: 606060606,
  },
  {
    nom: "nom prenom",
    email: "email personne 2",
    tel: 604040404,
  },
  {
    nom: "nom prenom",
    email: "email personne 3",
    tel: 609090909,
  },
];

function PersonnesConfiance({ setCompo }) {
  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Personnes De Confiance`}
        </button>
      </div>
      <main className="perso-confiance">
        {tabFav.map((each) => (
          <div className="card-confiance">
            <h3>{each.nom}</h3>
            <p>{each.email}</p>
            <p>0{each.tel}</p>
          </div>
        ))}
      </main>
    </>
  );
}

PersonnesConfiance.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default PersonnesConfiance;

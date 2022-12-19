import React, { useState } from "react";
import CreditCard from "@assets/app parents/CreditCard.svg";
import PropTypes from "prop-types";
import Check from "../filtres/Check";

const INITIAL_DATA = {
  cardNumber: "",
  expire: "",
  code: "",
  name: "",
};

function MoyensPaiement({ setCompo }) {
  const [sauvegarde, setSauvegarde] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Moyens De Paiement`}
        </button>
      </div>

      <main className="moyens-paiements">
        <img src={CreditCard} alt="card" />
        <form>
          <label htmlFor="cardNumber">
            <input
              required
              type="number"
              name="cardNumber"
              id="cardNumber"
              value={data.cardNumber}
              onChange={(e) => updateFields({ cardNumber: e.target.value })}
            />
            <p className="checkSymbol">Numero de la carte</p>
          </label>

          <label htmlFor="expire">
            <input
              required
              type="date"
              name="expire"
              id="expire"
              value={data.expire}
              onChange={(e) => updateFields({ expire: e.target.value })}
            />
            <p className="checkSymbol">Date d'expiration</p>
          </label>

          <label htmlFor="code">
            <input
              required
              type="number"
              name="code"
              id="code"
              value={data.code}
              onChange={(e) => updateFields({ code: e.target.value })}
            />
            <p className="checkSymbol">Code secret</p>
          </label>

          <label htmlFor="name">
            <input
              required
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={(e) => updateFields({ name: e.target.value })}
            />
            <p className="checkSymbol">Nom de la carte</p>
          </label>

          <Check
            setter={setSauvegarde}
            state={sauvegarde}
            nom="sauvegarde"
            p="Garder cette carte en mémoire"
          />
        </form>
      </main>
      <div className="button-bas grad">
        <button className="butt" type="button">
          Se connecter
        </button>
      </div>
    </>
  );
}

MoyensPaiement.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default MoyensPaiement;

import React, { useState } from "react";
import CreditCard from "@assets/app parents/CreditCard.svg";
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
      <button
        type="button"
        className="butt-top"
        onClick={() => setCompo(0)}
      >{`< Moyens De Paiement`}</button>
      <main className="moyens-paiements">
        <img src={CreditCard} alt="card" />
        <form>
          <label htmlFor="nom">
            <input
              required
              type="number"
              name="cardNumber"
              id="cardNumber"
              placeholder="Numero de la carte"
              value={data.cardNumber}
              onChange={(e) => updateFields({ cardNumber: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="nom">
            <input
              required
              type="date"
              name="expire"
              id="expire"
              placeholder="date expiration"
              value={data.expire}
              onChange={(e) => updateFields({ expire: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="nom">
            <input
              required
              type="number"
              name="code"
              id="code"
              placeholder="code secret"
              value={data.code}
              onChange={(e) => updateFields({ code: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <label htmlFor="nom">
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="nom"
              value={data.name}
              onChange={(e) => updateFields({ name: e.target.value })}
            />
            <p className="checkSymbol">&#x2713;</p>
          </label>

          <Check
            setter={setSauvegarde}
            state={sauvegarde}
            nom="sauvegarde"
            p="Garder cette carte en mémoire"
          />
        </form>
      </main>
      <div className="button-bas">
        <button type="button" className="butt">
          Enregistrer
        </button>
      </div>
    </>
  );
}

export default MoyensPaiement;

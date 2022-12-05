import React, { useState } from "react";

function Structure1({ nomStructure, telephone, updateFields }) {
  const [typeStructure, setTypeStructure] = useState("");
  return (
    <div>
      <div>
        <h4>Quel type d’accueil proposez-vous ?</h4>
        <div className="typeContainer">
          <button type="button" onClick={() => setTypeStructure("creche")}>
            Crèche
          </button>
          <button type="button" onClick={() => setTypeStructure("assmat")}>
            Assistante maternelle
          </button>
        </div>
      </div>
      {typeStructure === "creche" && (
        <div className="creche">
          <div>
            <h4>Maintenant précisons les choses...</h4>
            <div className="typeCrecheContainer">
              <button type="button">Crèche parentale</button>
              <button type="button">Micro-crèche</button>
              <button type="button">Crèche d'entreprise</button>
              <button type="button">Halte garderie</button>
              <button type="button">Crèche collective</button>
              <button type="button">Multi-accueil</button>
              <button type="button">Crèche municipale</button>
              <button type="button">Crèche associative</button>
            </div>
          </div>
          <h4>Complétez et vérifiez vos informations</h4>
          <div>
            <label htmlFor="nomStrucure">Nom</label>
            <input
              required
              type="text"
              name="nomStructure"
              placeholder="Nom de votre établissement"
              value={nomStructure}
              onChange={(e) => updateFields({ nomStructure: e.target.value })}
            />
            <p>Ce nom sera celui qui s’affichera en titre de votre annonce</p>
          </div>
        </div>
      )}
      {typeStructure === "assmat" && (
        <div className="assmat">
          <h4>Complétez et vérifiez vos informations</h4>
          <div>
            <label htmlFor="nomNaissance">Nom de naissance</label>
            <input
              required
              type="text"
              name="nomNaissance"
              placeholder="Nom de naissance"
              value={nomNaissance}
              onChange={(e) => updateFields({ nomNaissance: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="nomUsage">Nom d'usage</label>
            <input
              required
              type="text"
              name="nomUsage"
              placeholder="Nom d'usage"
              value={nomUsage}
              onChange={(e) => updateFields({ nomUsage: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="prenom">Prénom</label>
            <input
              required
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => updateFields({ prenom: e.target.value })}
            />
          </div>
        </div>
      )}
      <div>
        <label htmlFor="adresseStrucure">Adresse</label>
        <input
          required
          type="text"
          name="adresseStructure"
          placeholder="N°, rue, CP, ville"
          value={adresseStructure}
          onChange={(e) => updateFields({ adresseStructure: e.target.value })}
        />
        <p>
          Les parents n’obtiendront l’adresse exacte qu’après avoir effectué la
          réservation
        </p>
      </div>
      <div>
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          required
          type="tel"
          placeholder="0123456789"
          value={telephone}
          onChange={(e) => updateFields({ telephone: e.target.value })}
        />
        <p>Un sms vous sera envoyé pour confirmer votre compte</p>
      </div>
    </div>
  );
}

export default Structure1;

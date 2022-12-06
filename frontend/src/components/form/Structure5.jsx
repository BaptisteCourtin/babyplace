import React, { useState } from "react";

function Structure5({
  PCSC1,
  nesting,
  montessori,
  handi,
  jardin,
  sorties,
  promenades,
  eveil,
  musique,
  art,
  bilingue,
  bibli,
  transport,
  album_photo,
  photo_connecte,
  typeStructure,
  updateFields,
}) {
  return (
    <div className="structure5">
      <h4>Les petits plus de votre accueil</h4>
      <p>
        Il s’agit en général des services que les parents souhaitent retrouver
        pour l’accueil de leurs enfants, mais vous pourrez en ajouter d’autres
        auprès la publication.
      </p>
      <div className="inputsContainer">
        <h5>Expérience et Formations</h5>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="psci"
            name="psci"
            onChange={() => updateFields({ PCSC1: !PCSC1 })}
          />
          <label htmlFor="psci">Formation premiers secours (PCSC1)</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="nesting"
            name="nesting"
            onChange={() => updateFields({ nesting: !nesting })}
          />
          <label htmlFor="nesting">
            Formation Nesting (pollution intérieure)
          </label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="montessori"
            name="montessori"
            onChange={() => updateFields({ montessori: !montessori })}
          />
          <label htmlFor="montessori">
            Pedagogie Montessori / Pikler Loczy
          </label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="handi"
            name="handi"
            onChange={() => updateFields({ handi: !handi })}
          />
          <label htmlFor="handi">Formation accueil d’enfant handicapés</label>
        </div>
      </div>
      <div className="inputsContainer">
        <h5>Activités</h5>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="promenades"
            name="promenades"
            onChange={() => updateFields({ promenades: !promenades })}
          />
          <label htmlFor="promenades">Promenades</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="eveil"
            name="eveil"
            onChange={() => updateFields({ eveil: !eveil })}
          />
          <label htmlFor="eveil">Activités d'éveil</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="musique"
            name="musique"
            onChange={() => updateFields({ musique: !musique })}
          />
          <label htmlFor="musique">Atelier musique</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="art"
            name="art"
            onChange={() => updateFields({ art: !art })}
          />
          <label htmlFor="art">Activité artistique</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="bilingue"
            name="bilingue"
            onChange={() => updateFields({ bilingue: !bilingue })}
          />
          <label htmlFor="bilingue">Bilingue/internationale</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="bibli"
            name="bibli"
            onChange={() => updateFields({ bibli: !bibli })}
          />
          <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="transport"
            name="transport"
            onChange={() => updateFields({ transport: !transport })}
          />
          <label htmlFor="transport">Transport d'enfant</label>
        </div>
      </div>
      <div className="inputsContainer">
        <h5>Lien avec les parents</h5>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="album_photo"
            name="album_photo"
            onChange={() => updateFields({ album_photo: !album_photo })}
          />
          <label htmlFor="album_photo">Album photo</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="photo_connecte"
            name="photo_connecte"
            onChange={() => updateFields({ photo_connecte: !photo_connecte })}
          />
          <label htmlFor="photo_connecte">
            Connecté (Application de contact / site web....)
          </label>
        </div>
      </div>
      {typeStructure === "assmat" && (
        <div className="inputsContainer">
          <h5>Accueil</h5>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="jardin"
              name="jardin"
              onChange={() => updateFields({ jerdin: !jardin })}
            />
            <label htmlFor="jardin">Espace extérieur / jardin</label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="photo_connecte"
              name="photo_connecte"
              onChange={() => updateFields({ photo_connecte: !photo_connecte })}
            />
            <label htmlFor="photo_connecte">
              Connecté (Application de contact / site web....)
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Structure5;

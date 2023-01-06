import React, { useState, useEffect } from "react";
import axios from "axios";
import logoBlanc from "@assets/logo-blanc.svg";
import avatar1 from "@assets/avatar1.svg";
import PropTypes from "prop-types";

import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function NotifNote({ setCompo }) {
  // faire passer l'id de la structure
  const id = 6;
  const [structureNotes, setStructureNotes] = useState();

  const [noteCom, setNoteCom] = useState(0);
  const [noteEveil, setNoteEveil] = useState(0);
  const [noteSecurite, setNoteSecurite] = useState(0);
  const [noteProprete, setNoteProprete] = useState(0);
  const [noteHoraires, setNoteHoraires] = useState(0);

  const updateNotes = (dataNewNotes) => {
    axios.put(`http://localhost:5000/structure/notes/${id}`, {
      nbNotes: dataNewNotes.nbNotes,
      noteCom: dataNewNotes.avisCom,
      noteProprete: dataNewNotes.avisProprete,
      noteSecurite: dataNewNotes.avisSecurite,
      noteEveil: dataNewNotes.avisEveil,
      noteHoraires: dataNewNotes.avisHoraires,
    });
  };

  const submitNote = () => {
    let { nbNotes } = structureNotes;

    const avisCom = structureNotes.avisCom * nbNotes + noteCom;
    const avisEveil = structureNotes.avisEveil * nbNotes + noteEveil;
    const avisHoraires = structureNotes.avisHoraires * nbNotes + noteHoraires;
    const avisProprete = structureNotes.avisProprete * nbNotes + noteProprete;
    const avisSecurite = structureNotes.avisSecurite * nbNotes + noteSecurite;

    const dataNewNotes = {
      nbNotes: (nbNotes += 1),
      avisCom: (avisCom / nbNotes).toFixed(2),
      avisEveil: (avisEveil / nbNotes).toFixed(2),
      avisHoraires: (avisHoraires / nbNotes).toFixed(2),
      avisProprete: (avisProprete / nbNotes).toFixed(2),
      avisSecurite: (avisSecurite / nbNotes).toFixed(2),
    };

    updateNotes(dataNewNotes);

    // faire une pop up merci ???

    setCompo(0);
  };

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getStructureById = () => {
    axios
      .get(`http://localhost:5000/structure/${id}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setStructureNotes(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getStructureById();
  }, []);

  return (
    <div className="notif-container-grad">
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Retour`}
        </button>
      </div>

      <div className="notif-note">
        <img src={logoBlanc} alt="logo-blanc" className="logo" />
        <div className="avatars">
          <img src={avatar1} alt="img profil" className="avatar" />
          <img src={avatar1} alt="img creche" className="avatar" />
        </div>
        <h3>Donnez nous votre avis !</h3>

        <form>
          <div>
            <p>Communication</p>
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={noteCom}
              fractions={2}
              onChange={(value) => {
                setNoteCom(value);
              }}
            />
          </div>

          <div>
            <p>Propreté</p>
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={noteProprete}
              fractions={2}
              onChange={(value) => {
                setNoteProprete(value);
              }}
            />
          </div>
          <div>
            <p>Sécurité</p>
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={noteSecurite}
              fractions={2}
              onChange={(value) => {
                setNoteSecurite(value);
              }}
            />
          </div>
          <div>
            <p>Eveil de l'enfant</p>
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={noteEveil}
              fractions={2}
              onChange={(value) => {
                setNoteEveil(value);
              }}
            />
          </div>
          <div>
            <p>Souplesse des horaires</p>
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={noteHoraires}
              fractions={2}
              onChange={(value) => {
                setNoteHoraires(value);
              }}
            />
          </div>
        </form>

        <div className="button-bas">
          <button type="submit" className="butt" onClick={() => submitNote()}>
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

NotifNote.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default NotifNote;

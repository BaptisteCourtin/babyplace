import React from "react";
import logoBlanc from "@assets/logo-blanc.svg";
import avatar1 from "@assets/avatar1.svg";

import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function NotifNote({ setCompo }) {
  return (
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
            initialRating={0}
            fractions={2}
          />
        </div>

        <div>
          <p>Propreté</p>
          <Rating
            className="rating"
            emptySymbol={AiOutlineStar()}
            fullSymbol={AiFillStar()}
            initialRating={0}
            fractions={2}
          />
        </div>
        <div>
          <p>Sécurité</p>
          <Rating
            className="rating"
            emptySymbol={AiOutlineStar()}
            fullSymbol={AiFillStar()}
            initialRating={0}
            fractions={2}
          />
        </div>
        <div>
          <p>Eveil de l'enfant</p>
          <Rating
            className="rating"
            emptySymbol={AiOutlineStar()}
            fullSymbol={AiFillStar()}
            initialRating={0}
            fractions={2}
          />
        </div>
        <div>
          <p>Souplesse des horaires</p>
          <Rating
            className="rating"
            emptySymbol={AiOutlineStar()}
            fullSymbol={AiFillStar()}
            initialRating={0}
            fractions={2}
          />
        </div>
      </form>

      <div className="button-bas">
        <button type="button" className="butt" onClick={() => setCompo(0)}>
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default NotifNote;

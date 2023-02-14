import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import FamilleContext from "@components/context/FamilleContext";

function Connexion({ setCompo }) {
  const navigate = useNavigate();
  const { setFamilleId } = useContext(FamilleContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [typePwd, setTypePwd] = useState(true);
  const [typePwd2, setTypePwd2] = useState(true);

  const [otherPassword, setOtherPassword] = useState(false);

  const handleInscription = (e) => {
    e.preventDefault();
    if (email && password === password2) {
      axios
        .post(`${import.meta.env.VITE_PATH}/inscriptionAppFamille`, {
          email,
          password,
        })
        .then((ret) => {
          const { token, familleId } = ret.data;

          setFamilleId(familleId.toString());
          sessionStorage.setItem("BabyPlacefamilleId", familleId);

          navigate("/appli/search", {
            state: {
              token,
            },
          });
        })
        .catch((err) => {
          if (err.response.data.errno === 1062) {
            setOtherPassword(true);
          } else {
            console.error(err);
          }
        });
    }
  };

  return (
    <div className="applituto connexion">
      <main>
        <button
          type="button"
          className="se-connecter"
          onClick={() => setCompo(4)}
        >
          Se connecter
        </button>
        <h3>Création de compte</h3>
        <p>
          Nous vous déconseillons d'utiliser un mot de passe que vous utilisez
          réellement
        </p>

        <form>
          <label htmlFor="email">
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p>E mail</p>
          </label>

          <label htmlFor="mdp">
            <input
              required
              type={typePwd ? "password" : "text"}
              name="mdp"
              id="mdp"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <p>Mot de passe</p>
            <button
              type="button"
              className="view-password"
              onClick={() => setTypePwd(!typePwd)}
            >
              {typePwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </label>

          <label htmlFor="mdp2">
            <input
              required
              type={typePwd2 ? "password" : "text"}
              name="mdp2"
              id="mdp2"
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
            />
            <p>Confirmer Mot de passe</p>
            <button
              type="button"
              className="view-password"
              onClick={() => setTypePwd2(!typePwd2)}
            >
              {typePwd2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </label>
        </form>

        {otherPassword && (
          <p className="emailFail">
            Cet email est déjà utilisé, vous pouvez vous connecter en haut à
            droite
          </p>
        )}
      </main>
      <div className="button-bas">
        <button
          type="button"
          className="butt grad"
          onClick={(e) => handleInscription(e)}
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
}

Connexion.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Connexion;

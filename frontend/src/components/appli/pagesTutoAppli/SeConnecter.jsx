import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import FamilleContext from "@components/context/FamilleContext";
import { toast } from "react-hot-toast";

function SeConnecter({ setCompo }) {
  const navigate = useNavigate();
  const { setFamilleId } = useContext(FamilleContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePwd, setTypePwd] = useState(true);

  const updateToNote = async (familleId) => {
    await axios.put(`${import.meta.env.VITE_PATH}/resaToNote/${familleId}`);
  };
  const deleteAncienResa = async (familleId) => {
    await axios.delete(
      `${import.meta.env.VITE_PATH}/deleteAncienResa/${familleId}`
    );
  };

  const handleConnection = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(`${import.meta.env.VITE_PATH}/authFamille`, {
          email,
          password,
        })
        .then((ret) => {
          const { familleId, token } = ret.data;

          setFamilleId(familleId.toString());
          sessionStorage.setItem("BabyPlacefamilleId", familleId);

          updateToNote(ret.data.familleId);
          deleteAncienResa(ret.data.familleId);

          navigate("/appli/search", {
            state: {
              token,
            },
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error("le mot de passe ou l'email est erroné");
        });
    }
  };

  return (
    <div className="applituto connexion">
      <main>
        <button
          type="button"
          className="se-connecter"
          onClick={() => setCompo(0)}
        >
          S'inscrire
        </button>
        <h3>Se connecter</h3>

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
        </form>
        <div className="button-bas">
          <button
            className="butt grad"
            type="submit"
            onClick={(e) => {
              handleConnection(e);
            }}
          >
            Se connecter
          </button>
        </div>
      </main>
    </div>
  );
}

SeConnecter.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default SeConnecter;

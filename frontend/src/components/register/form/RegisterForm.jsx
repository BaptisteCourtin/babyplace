import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCheck,
} from "react-icons/ai";
import ReactModal from "react-modal";
import UserEmailContext from "@components/context/UserEmailContext";
import toast from "react-hot-toast";
import Axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setUserEmail } = useContext(UserEmailContext);
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [typePwd, setTypePwd] = useState(true);

  // --- password visible ou non ---
  const [pwdLength, setPwdLength] = useState(null);
  const handlePwdClick = (e) => {
    e.preventDefault();
    setTypePwd(!typePwd);
  };

  // --- s'enregistrer ---
  const handleClick = (e) => {
    e.preventDefault();
    if (email && password && checked && pwdLength >= 8) {
      Axios.post(`${import.meta.env.VITE_PATH}/inscription`, {
        email,
        password,
      })
        .then((ret) => {
          sessionStorage.setItem("structureEmail", email);
          setUserEmail(email);
          const { token } = ret.data;
          navigate("/structure/inscription-form", {
            state: {
              token,
            },
          });
        })
        .catch((err) => {
          if (err.response.data.errno === 1062) {
            setModalIsOpen(true);
          } else {
            console.error(err);
          }
        });
    }
  };

  // --- si password trop court ---
  const handlePwdLength = (e) => {
    e.preventDefault();
    if (pwdLength < 8) {
      toast.error("Mot de passe trop court");
    }
  };

  return (
    <section className="formCo">
      <p className="formSwitch">
        Vous avez déjà un compte ?⠀
        <Link to="/login">Se connecter</Link>
      </p>
      <h2>Je m'inscris sur Babyplace</h2>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <div className="passwordInput">
          <input
            type={typePwd ? "password" : "text"}
            name="pwd"
            id="pwd"
            placeholder="Password"
            onInput={(event) => {
              setPassword(event.target.value);
              setPwdLength(event.target.value.length);
            }}
            required
          />
          <button onClick={handlePwdClick} type="button">
            {!typePwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <p
          className="passwordCondition"
          style={{
            color: pwdLength < 8 ? "#EF3672" : "#2dcd7a",
          }}
        >
          {pwdLength >= 8 && (
            <span style={{ color: "#2dcd7a" }}>
              <AiOutlineCheck />
            </span>
          )}
          Minimum 8 caractères
        </p>
        <div className="inputCheck">
          <input
            type="checkbox"
            name="useConditions"
            id="useConditions"
            onChange={() => setChecked(!checked)}
            required
          />
          <label htmlFor="useConditions">
            J'accepte les conditions d'utilisation
          </label>
        </div>
        <button
          type="submit"
          className="btnSubmit"
          style={{
            opacity: !email || !password || !checked ? "0.7" : "1",
          }}
          disabled={!!(!email || !password || !checked)}
          onClick={(e) => {
            handleClick(e);
            handlePwdLength(e);
          }}
        >
          S'inscrire
        </button>
      </form>
      <ReactModal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        className="waitingModal"
        style={{
          overlay: {
            backgroundColor: "#000000",
            height: "100vh",
            width: "100vw",
          },
        }}
      >
        <h2>Cet email existe déjà</h2>
        <h4>
          Pour accéder à la page de connexion,{" "}
          <Link to="/login">cliquez ici</Link>
        </h4>
        <button
          type="button"
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          Fermer
        </button>
      </ReactModal>
    </section>
  );
}

export default RegisterForm;

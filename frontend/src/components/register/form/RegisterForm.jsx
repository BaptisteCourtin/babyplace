import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCheck } from "react-icons/ai";
import UserEmailContext from "@components/context/UserEmailContext";
import toast from 'react-hot-toast';
import Axios from "axios";


function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { userEmail, setUserEmail } = useContext(UserEmailContext);
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [typePwd, setTypePwd] = useState(true);

  const [pwdLength, setPwdLength] = useState(null);

  const handlePwdClick = (e) => {
    e.preventDefault();
    setTypePwd(!typePwd);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (email && password && checked && pwdLength >= 8) {
      Axios.post("http://localhost:5000/inscription", {
        email,
        password,
      })
        .then((ret) => {
          const { token } = ret.data;
          navigate("/structure/inscription-form", {
            state: {
              token,
            },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const handleChange = (event) => {
    setUserEmail(event.target.value)
  }
  const handlePwdLength = (e) => {
    e.preventDefault();
    if (pwdLength < 8) {
      toast.error("Mot de passe trop court");
    }
  };

  console.log(pwdLength);

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
            setEmail(event.target.value); handleChange(event);
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
              setPwdLength(password.length);
            }}
            required
          />
          <button onClick={handlePwdClick}>
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
    </section>
  );
}

export default RegisterForm;

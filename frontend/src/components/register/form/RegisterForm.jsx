import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [typePwd, setTypePwd] = useState(true);

  const handlePwdClick = (e) => {
    e.preventDefault();
    setTypePwd(!typePwd);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email && password && checked) {
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

  return (
    <section className="formCo">
      <p>
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
        />
        <div className="passwordInput">
          <input
            type={typePwd ? "password" : "text"}
            name="pwd"
            id="pwd"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button onClick={handlePwdClick}>
            {typePwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <div className="inputCheck">
          <input
            type="checkbox"
            name="useConditions"
            id="useConditions"
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="useConditions">
            J'accepte les conditions d'utilisation
          </label>
        </div>
        <button
          type="submit"
          style={{
            opacity: !email || !password || !checked ? "0.7" : "1",
          }}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          S'inscrire
        </button>
      </form>
    </section>
  );
}

export default RegisterForm;

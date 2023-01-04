import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePwd, setTypePwd] = useState(true);

  const handlePwdClick = (e) => {
    e.preventDefault();
    setTypePwd(!typePwd);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email && password) {
      Axios.post("http://localhost:5000/auth", {
        email,
        password,
      })
        .then((ret) => {
          const { token } = ret.data;

          navigate("/login-params", {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  return (
    <section className="formCo">
      <p className="formSwitch">
        Vous n'avez pas de compte ?⠀
        <Link to="/register">S'enregistrer</Link>
      </p>
      <h2>Je me connecte</h2>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onKeyPress={handleKeyPress}
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
            onKeyPress={handleKeyPress}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
          <button onClick={handlePwdClick}>
            {!typePwd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <button
          type="submit"
          className="btnSubmit"
          style={{
            opacity: !email || !password ? "0.7" : "1",
          }}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Se connecter
        </button>
      </form>
    </section>
  );
}

export default LoginForm;

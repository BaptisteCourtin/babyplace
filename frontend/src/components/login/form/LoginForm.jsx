import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePwd, setTypePwd] = useState(true)

  const handlePwdClick = (e) => {
    e.preventDefault();
    setTypePwd(!typePwd)
  }

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

  return (
    <section className="formCo">
      <h2>Je me connecte</h2>
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
            {typePwd
              ? <AiOutlineEye />
              : <AiOutlineEyeInvisible />
            }
          </button>
        </div>
        <button
          type="submit"
          style={{
            opacity:
              !email || !password ? "0.7" : "1"
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

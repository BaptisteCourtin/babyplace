import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);


  const handleCompletedChange = () => {
    setChecked(!checked);
  };

  const handleClick = (e) => {
    e.preventDefault();


    if (checked) {
      Axios
        .post("http://localhost:5000/auth", {
          email,
          password,
        })
        .then((ret) => {
          console.log(ret.data.token);
          const token = ret.data.token;
          navigate("/login-params", {
            state: {
              token
            }
          });

        })

        .catch((err) => {
          console.error(err);
        });
    };


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
        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div>
          <input type="checkbox" name="useConditions" id="useConditions" checked={checked} onChange={handleCompletedChange} />
          <label htmlFor="useConditions">
            J'accepte⠀
            <span>les conditions d'utilisation</span>
          </label>
        </div>
        <button
          type="submit"
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

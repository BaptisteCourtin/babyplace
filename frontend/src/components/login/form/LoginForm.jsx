import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login-params");
  };

  return (
    <section className="formCo">
      <h2>Je me connecte</h2>
      <form>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="pwd" id="pwd" placeholder="Password" />
        <div>
          <input type="checkbox" name="useConditions" id="useConditions" />
          <label htmlFor="useConditions">
            J'accepte⠀
            <span>les conditions d'utilisation</span>
          </label>
        </div>
        <button type="submit" onClick={handleClick}>
          Se connecter
        </button>
      </form>
    </section>
  );
}

export default LoginForm;

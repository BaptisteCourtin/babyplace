import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <section className="formCo">
      <p>
        Vous avez déjà un compte ?⠀
        <Link to="/login">Se connecter</Link>
      </p>
      <h2>Je m'inscris sur Babyplace</h2>
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
        <button type="submit">S'inscrire</button>
      </form>
    </section>
  );
}

export default RegisterForm;

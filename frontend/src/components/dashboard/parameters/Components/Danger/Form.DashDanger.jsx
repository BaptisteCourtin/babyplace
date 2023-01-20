import React from "react";

function FormDashDanger({ updatePassword, setNewPwd, setCNewPwd }) {
  return (
    <form
      onSubmit={(e) => {
        updatePassword(e);
      }}
    >
      <ul>
        <li>
          <label htmlFor="password">Mot de passe</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            pattern=".{8,}"
            placeholder="Nouveau mot de passe"
            onChange={(e) => {
              setNewPwd(e.target.value);
            }}
          />
        </li>
        <li>
          <label htmlFor="cpassword">Confirmer mot de passe</label>
          <input
            required
            type="password"
            name="cpassword"
            id="cpassword"
            pattern=".{8,}"
            placeholder="Confirmer le mot de passe"
            onChange={(e) => {
              setCNewPwd(e.target.value);
            }}
          />
        </li>
      </ul>
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default FormDashDanger;

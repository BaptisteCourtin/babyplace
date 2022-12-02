import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>
        Réservez une place auprès de professionnelles de la petite enfance
        gratuitement en quelques clics
      </h1>
      <div className="headerInputs">
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Assistante maternelle, crèche, ..."
        />
        <input type="text" name="date" id="date" placeholder="Date" />
        <input type="text" name="place" id="place" placeholder="Où" />
        <button type="submit">
          Rechercher <span>➜</span>
        </button>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function NavDashReservations({ statusToggle, setStatusToggle }) {
  return (
    <div className="dashReserFilters">
      <h2>Vos réservations</h2>
      <div className="reserBtn">
        <button
          type="button"
          onClick={() => setStatusToggle(0)}
          className={statusToggle === 0 ? "selected" : ""}
        >
          Toutes
        </button>
        <button
          type="button"
          onClick={() => setStatusToggle(1)}
          className={statusToggle === 1 ? "selected" : ""}
        >
          Acceptées
        </button>
        <button
          type="button"
          onClick={() => setStatusToggle(2)}
          className={statusToggle === 2 ? "selected" : ""}
        >
          En attente
        </button>
        <button
          type="button"
          onClick={() => setStatusToggle(3)}
          className={statusToggle === 3 ? "selected" : ""}
        >
          Refusées
        </button>
        <button
          type="button"
          onClick={() => setStatusToggle(4)}
          className={statusToggle === 4 ? "selected" : ""}
        >
          Payées
        </button>
      </div>
    </div>
  );
}

export default NavDashReservations;

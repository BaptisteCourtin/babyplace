import React from "react";
import PropTypes from "prop-types";

function FilterSimple({ setCompo, dataBasique, setDataBasique }) {
  const ChangeIsCreche = (e) => {
    setDataBasique((prevState) => ({
      ...prevState,
      isCreche: parseInt(e.target.value, 10),
    }));
  };

  return (
    <div className="filtres">
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(3)}
        >{`< Filtres Basiques`}</button>
      </header>

      <main className="filter-simple">
        <div className="tri">
          <span>quel type de structure : </span>
          <select id="isCreche" onChange={(e) => ChangeIsCreche(e)}>
            <option
              value="1"
              selected={dataBasique.isCreche === 1 ? "selected" : ""}
            >
              Crèche
            </option>
            <option
              value="0"
              selected={dataBasique.isCreche === 0 ? "selected" : ""}
            >
              Assistant maternel
            </option>
            <option
              value="2"
              selected={dataBasique.isCreche === 2 ? "selected" : ""}
              defaultValue
            >
              Crèche et Assistant maternel
            </option>
          </select>
        </div>
      </main>
      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Retour à la recherche
      </button>
    </div>
  );
}

FilterSimple.propTypes = {
  setCompo: PropTypes.func.isRequired,
  dataBasique: PropTypes.object.isRequired,
  setDataBasique: PropTypes.func.isRequired,
};

export default FilterSimple;

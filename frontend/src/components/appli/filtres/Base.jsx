import React from "react";
import PropTypes from "prop-types";

function Base({
  setCompo,
  setDataBasique,
  dataDateHeure,
  setDataDateHeure,
  dataServices,
  setDataServices,
  dataAggrements,
  setDataAggrements,
}) {
  const fullReset = () => {
    setDataBasique((prevState) => ({
      ...prevState,
      isCreche: parseInt(2, 10),
    }));

    for (const key in dataDateHeure) {
      setDataDateHeure((prevState) => ({
        ...prevState,
        [key]: "",
      }));
    }

    for (const key in dataServices) {
      setDataServices((prevState) => ({
        ...prevState,
        [key]: false,
      }));
    }

    for (const key in dataAggrements) {
      setDataAggrements((prevState) => ({
        ...prevState,
        [key]: false,
      }));
    }
  };

  return (
    <div className="filtres">
      <header>
        <button type="button" className="h2" onClick={() => setCompo(0)}>
          {`< Filtres`}
        </button>
        <button type="button" className="reset" onClick={() => fullReset()}>
          RESET FILTRES
        </button>
      </header>

      <main className="base">
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(4)}
        >{`Filtres Basiques >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(5)}
        >{`Dates et Heures >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(6)}
        >{`Services >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(7)}
        >{`Aggréments >`}</button>
      </main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Retour à la recherche
      </button>
    </div>
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
  setDataBasique: PropTypes.func.isRequired,
  dataDateHeure: PropTypes.object.isRequired,
  setDataDateHeure: PropTypes.func.isRequired,
  dataServices: PropTypes.object.isRequired,
  setDataServices: PropTypes.func.isRequired,
  dataAggrements: PropTypes.object.isRequired,
  setDataAggrements: PropTypes.func.isRequired,
};

export default Base;

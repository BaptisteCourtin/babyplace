import React from "react";
import PropTypes from "prop-types";

function Toggle({ setter, state, nom, p, classique }) {
  const handleChange = (e) => {
    if (classique) {
      setter(!state);
    } else {
      const { name } = e.target;
      setter((prevState) => ({
        ...prevState,
        [name]: !state,
      }));
    }
  };

  return (
    <div className="with-toggle">
      <p>{p}</p>
      <div>
        <input
          type="checkbox"
          name={nom}
          id={nom}
          checked={state ? "checked" : ""}
          className="input-toggle"
          onChange={(e) => handleChange(e)}
        />
        <label className="toggle" htmlFor={nom}>
          <span className="ball" />
        </label>
      </div>
    </div>
  );
}

Toggle.propTypes = {
  setter: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  nom: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  classique: PropTypes.bool,
};

export default Toggle;

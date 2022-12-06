import React from "react";
import PropTypes from "prop-types";

function Toggle({ setter, state, nom, p }) {
  return (
    <div className="with-toggle">
      <p>{p}</p>
      <div>
        <input
          type="checkbox"
          name={nom}
          id={nom}
          className="input-toggle"
          onChange={() => setter(!state)}
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
  state: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default Toggle;

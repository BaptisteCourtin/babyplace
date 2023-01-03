import React from "react";
import PropTypes from "prop-types";

function Check({ setter, state, nom, p }) {
  return (
    <div className="with-check">
      <label htmlFor={nom} className="check">
        <input
          type="checkbox"
          name={nom}
          id={nom}
          className="input-check"
          onChange={() => setter(!state)}
        />
        <p className="p-check">{p}</p>
      </label>
    </div>
  );
}

Check.propTypes = {
  setter: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  nom: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default Check;

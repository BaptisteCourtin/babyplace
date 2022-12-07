import React from "react";
import PropTypes from "prop-types";

function Check({ setter, state, nom, p }) {
  return (
    <div className="with-check">
      <label htmlFor={nom}>
        <input
          type="checkbox"
          name={nom}
          id={nom}
          className="input-check"
          onChange={() => setter(!state)}
        />
        <p>{p}</p>
      </label>
    </div>
  );
}

Check.propTypes = {
  setter: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default Check;

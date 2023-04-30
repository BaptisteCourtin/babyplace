import React from "react";
import PropTypes from "prop-types";

function OneFormInscr({ init, src, nomDoc, handleSupp, p, who }) {
  return (
    <div className="champ">
      <p>{p}</p>
      {init !== null && init !== "" ? (
        <div className="with-init">
          <button
            type="button"
            name={nomDoc}
            onClick={(e) => handleSupp(e, who)}
          >
            Supp
          </button>

          <a href={init} target="_blank" rel="noreferrer">
            {init.split("-qws-")[1]}
          </a>
        </div>
      ) : (
        <label htmlFor={nomDoc}>
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            name={nomDoc}
            id={nomDoc}
            ref={src}
          />
        </label>
      )}
    </div>
  );
}

OneFormInscr.propTypes = {
  init: PropTypes.string,
  src: PropTypes.object.isRequired,
  nomDoc: PropTypes.string.isRequired,
  handleSupp: PropTypes.func.isRequired,
  p: PropTypes.string.isRequired,
  who: PropTypes.number.isRequired,
};

export default OneFormInscr;

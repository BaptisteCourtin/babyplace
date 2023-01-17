import React from "react";

const OneFormInscr = ({ init, src, nomDoc, handleSupp, p, what }) => {
  let That = "";
  if (what === 1) {
    That = "Parents";
  }
  if (what === 2) {
    That = "Famille";
  }

  return (
    <div className="champ">
      <p>{p}</p>
      {init !== null && init !== "" ? (
        <div className="with-init">
          <button type="button" name={nomDoc} onClick={(e) => handleSupp(e)}>
            Supp
          </button>

          <a
            href={`http://localhost:5000/uploads/formInscription${That}/${init}`}
            target="_blank"
            rel="noreferrer"
          >
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
};

export default OneFormInscr;

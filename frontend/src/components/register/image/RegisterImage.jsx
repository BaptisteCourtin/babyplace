import React from "react";
import imgWoman from "@assets/img-woman.svg";

function RegisterImage() {
  return (
    <div className="registerImage">
      <div>
        <h2>
          Babyplace <span>PRO</span>
        </h2>
        <p>Gérez votre agenda professionnel</p>
        <p>24h/24 et 7j/7</p>
      </div>
      <img src={imgWoman} alt="" />
    </div>
  );
}

export default RegisterImage;

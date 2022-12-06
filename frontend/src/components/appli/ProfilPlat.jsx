import React from "react";
import avatar from "@assets/avatar1.svg";

const user = {
  image: avatar,
  firstname: "Samantha",
  name: "Doe",
  pourcent: 100,
};

function ProfilPlat() {
  return (
    <div className="profil-plat">
      <div className="container-image">
        <img src={user.image} alt="img" />
      </div>
      <div className="user-info">
        <h3>{`${user.firstname} ${user.name}`}</h3>
        <p>{user.pourcent}% complété</p>
      </div>
    </div>
  );
}

export default ProfilPlat;

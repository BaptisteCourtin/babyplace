import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import FamilleContext from "@components/context/FamilleContext";
import { AiOutlineUser } from "react-icons/ai";

function ProfilPlat() {
  const { familleId } = useContext(FamilleContext);

  const [photoFamille, setPhotoFamille] = useState();
  const [prenom1, setPrenom1] = useState();
  const [nom1, setNom1] = useState();
  const [prenom2, setPrenom2] = useState();
  const [nom2, setNom2] = useState();

  const [donneesOK, setDonneesOK] = useState(false);

  const getFamilleInfo = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/info/${familleId}`)
      .then((res) => {
        setPrenom1(res.data[0][0].prenom);
        setNom1(res.data[0][0].nom);
        setPrenom2(res.data[0][1].prenom);
        setNom2(res.data[0][1].nom);
        setPhotoFamille(res.data[1][0].photoProfilFamille);
      })
      .then(() => {
        setDonneesOK(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getFamilleInfo();
  }, [familleId]);

  return (
    donneesOK && (
      <div className="profil-plat">
        <div className="container-image">
          {photoFamille ? (
            <img src={photoFamille} alt="avatar" />
          ) : (
            <AiOutlineUser />
          )}
        </div>
        <div className="user-info">
          <h3>
            {prenom1 || nom1
              ? `
            ${prenom1 || ""} 
            ${nom1 || ""}`
              : ""}
            {prenom2 || nom2
              ? prenom1 || nom1
                ? ` & 
                ${prenom2 || ""} 
                ${nom2 || ""}`
                : `
            ${prenom2 || ""} 
            ${nom2 || ""}`
              : ""}
          </h3>
        </div>
      </div>
    )
  );
}

export default ProfilPlat;

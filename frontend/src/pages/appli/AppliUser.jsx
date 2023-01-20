import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import NavbarApp from "@components/appli/navbar/NavbarApp";
import Completion from "@components/appli/user/Completion";
import FamilleContext from "@components/context/FamilleContext";
import { AiOutlineUser } from "react-icons/ai";

function AppliUser() {
  const [pourcentFormParent, setPourcentFormParent] = useState(0);
  const [pourcentFormEnfant, setPourcentFormEnfant] = useState(0);
  const [truePourcentEnfant, setTruePourcentEnfant] = useState(0);
  const [pourcentFormInscription, setPourcentFormInscription] = useState(0);
  const [truePourcentInscription, setTruePourcentInscription] = useState(0);

  const [imageProfil, setImageProfil] = useState(null);
  const [nomPrenom, setNomPrenom] = useState(false);
  const [donneesOK, setDonneesOK] = useState(false);

  const { familleId } = useContext(FamilleContext);
  const getPourcentForm = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/pourcent/${familleId}`)
      .then((res) => {
        console.log(res.data);
        setPourcentFormParent(res.data[0][0].pourcentFormParent);
        setPourcentFormEnfant(res.data[1]);
        // setPourcentFormInscription(res.data[2]);
        setImageProfil(res.data[2][0].photoProfilFamille);
        setNomPrenom(res.data[0]);
      })
      .then(() => {
        setDonneesOK(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getPourcentForm();
  }, [familleId]);

  // --- pour avoir le vrai pourcent des enfants ---

  const getTruePourcentEnfant = () => {
    let pourcent = 0;
    let nbTime = 0;
    for (const i in pourcentFormEnfant) {
      pourcent += pourcentFormEnfant[i].pourcentFormEnfant;
      nbTime += 1;
    }
    setTruePourcentEnfant(parseInt(pourcent / nbTime, 10));
  };

  useEffect(() => {
    getTruePourcentEnfant();
  }, [pourcentFormEnfant]);

  // const getTruePourcentInscription = () => {
  //   let pourcent = 0;
  //   let nbTime = 0;
  //   for (const i in pourcentFormInscription) {
  //     pourcent += pourcentFormInscription[i].pourcentFormInscription;
  //     nbTime += 1;
  //   }
  //   setTruePourcentInscription(parseInt(pourcent / nbTime));
  // };

  // useEffect(() => {
  //   getTruePourcentInscription();
  // }, [pourcentFormInscription]);

  // --- upload image profil---

  const docImgProfil = useRef(null);

  const SubmitPhotoFamille = () => {
    const formData = new FormData();
    formData.append("file", docImgProfil.current.files[0]);

    axios
      .post(`${import.meta.env.VITE_PATH}/famille/photoProfil`, formData)
      .then((result) => {
        axios
          .put(
            `${import.meta.env.VITE_PATH}/famille/photoProfil/${familleId}`,
            {
              photoFamille: result.data,
            }
          )
          .then(() => {
            setImageProfil(result.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ---

  const tabCompletion = [
    {
      nom: "Dossier Enfant",
      completion: truePourcentEnfant,
      quelCompo: 0,
    },
    {
      nom: "Dossier Parent",
      completion: pourcentFormParent,
      quelCompo: 1,
    },
    {
      nom: "Dossier d'inscription",
      completion: pourcentFormInscription,
      quelCompo: 2,
    },
  ];

  return (
    donneesOK === true && (
      <div className="appli-user">
        <main>
          <label htmlFor="img-profil">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              name="img-profil"
              id="img-profil"
              ref={docImgProfil}
              onChange={() => SubmitPhotoFamille()}
            />
            {imageProfil ? (
              <img className="photoProfil" src={imageProfil} alt="avatar" />
            ) : (
              <AiOutlineUser className="photoProfil" />
            )}
          </label>
          <h3>
            {nomPrenom[0].prenom || nomPrenom[0].nom
              ? `
            ${nomPrenom[0].prenom ? nomPrenom[0].prenom : ""} 
            ${nomPrenom[0].nom ? nomPrenom[0].nom : ""}`
              : ""}

            {nomPrenom[1].prenom || nomPrenom[1].nom
              ? nomPrenom[0].prenom || nomPrenom[0].nom
                ? ` & 
                ${nomPrenom[1].prenom ? nomPrenom[1].prenom : ""} 
                ${nomPrenom[1].nom ? nomPrenom[1].nom : ""}`
                : `
            ${nomPrenom[1].prenom ? nomPrenom[1].prenom : ""} 
            ${nomPrenom[1].nom ? nomPrenom[1].nom : ""}`
              : ""}
          </h3>
          <p>
            Mettez toutes les chances de votre côté Un profil complet est
            nécessaire pour un accueil en crèche !
          </p>

          <div className="container-completion">
            {tabCompletion.map((each, index) => (
              <Completion
                key={index}
                nom={each.nom}
                completion={each.completion}
                quelCompo={each.quelCompo}
              />
            ))}
          </div>
        </main>
        <NavbarApp />
      </div>
    )
  );
}

export default AppliUser;

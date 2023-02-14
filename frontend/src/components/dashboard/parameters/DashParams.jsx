import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import usePutParams from "./Hooks/usePutParams";
import useDeleteParams from "./Hooks/useDeleteParams";
import useModal from "./Hooks/useModal";
import useUploadParams from "./Hooks/useUploadParams";
import ModalDashParams from "./Components/Modal.DashParams";
import DangerDashParams from "./Components/Danger.DashParams";
import DocsDashParams from "./Components/Docs.DashParams";
import ImagesDashParams from "./Components/Images.DashParams";
import InfoDashParams from "./Components/Info.DashParams";
import ProfilDashParams from "./Components/Profil.DashParams";

function DashParams({
  type,
  structureId,
  photoProfil,
  photoStructure1,
  photoStructure2,
  photoStructure3,
  nom,
  prenom,
  nomUsage,
  nomNaissance,
  adresse,
  email,
  telephone,
  description,
  userType,
  getData,
  docPmi,
  docIdentite,
  docVitale,
  docJustifDom,
  docDiplome,
  docRespCivile,
  docAssAuto,
}) {
  const photoProfilRef = useRef(null);
  const photoStructure1Ref = useRef(null);
  const photoStructure2Ref = useRef(null);
  const photoStructure3Ref = useRef(null);
  const docPmiRef = useRef(null);
  const docIdentiteRef = useRef(null);
  const docVitaleRef = useRef(null);
  const docJustifDomRef = useRef(null);
  const docDiplomeRef = useRef(null);
  const docRespCivileRef = useRef(null);
  const docAssAutoRef = useRef(null);

  const fileName = "";

  const [newGetData, setNewGetData] = useState(true);

  const [infos, setInfos] = useState({
    nom,
    prenom,
    nomUsage,
    nomNaissance,
    adresse,
    email,
    telephone,
    description,
  });
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteMail, setDeleteMail] = useState(null);
  const [newPwd, setNewPwd] = useState(null);
  const [cNewPwd, setCNewPwd] = useState(null);

  const { handleSubmitInfo, updatePassword } = usePutParams(
    structureId,
    userType,
    newGetData,
    setNewGetData,
    infos,
    newPwd,
    cNewPwd
  );
  const { uploadDoc } = useUploadParams(
    structureId,
    newGetData,
    setNewGetData,
    fileName
  );
  const { deleteAccount } = useDeleteParams(
    email,
    deleteMail,
    structureId,
    userType
  );
  const { openDeleteModal, closeDeleteModal } = useModal(setDeleteModal);

  const updateFields = (fields) => {
    setInfos((prev) => {
      return { ...prev, ...fields };
    });
  };

  // useEffect get data ???
  useEffect(() => {
    const source = axios.CancelToken.source();
    getData(source);
    return () => {
      source.cancel();
    };
  }, [newGetData]);

  return (
    <div className="dashParams">
      <h2>Paramètres</h2>
      <ProfilDashParams
        photoProfil={photoProfil}
        photoProfilRef={photoProfilRef}
        uploadDoc={uploadDoc}
        nom={nom}
        nomUsage={nomUsage}
        prenom={prenom}
        type={type}
      />
      <InfoDashParams
        handleSubmitInfo={handleSubmitInfo}
        userType={userType}
        updateFields={updateFields}
        nom={nom}
        nomUsage={nomUsage}
        nomNaissance={nomNaissance}
        prenom={prenom}
        adresse={adresse}
        telephone={telephone}
        email={email}
        description={description}
      />
      <ImagesDashParams
        uploadDoc={uploadDoc}
        photoStructure1={photoStructure1}
        photoStructure1Ref={photoStructure1Ref}
        photoStructure2={photoStructure2}
        photoStructure2Ref={photoStructure2Ref}
        photoStructure3={photoStructure3}
        photoStructure3Ref={photoStructure3Ref}
      />
      <DocsDashParams
        userType={userType}
        uploadDoc={uploadDoc}
        docAssAuto={docAssAuto}
        docAssAutoRef={docAssAutoRef}
        docDiplome={docDiplome}
        docDiplomeRef={docDiplomeRef}
        docIdentite={docIdentite}
        docIdentiteRef={docIdentiteRef}
        docJustifDom={docJustifDom}
        docJustifDomRef={docJustifDomRef}
        docPmi={docPmi}
        docPmiRef={docPmiRef}
        docRespCivile={docRespCivile}
        docRespCivileRef={docRespCivileRef}
        docVitale={docVitale}
        docVitaleRef={docVitaleRef}
      />
      <DangerDashParams
        updatePassword={updatePassword}
        setNewPwd={setNewPwd}
        setCNewPwd={setCNewPwd}
        openDeleteModal={openDeleteModal}
      />
      <ModalDashParams
        deleteModal={deleteModal}
        openDeleteModal={openDeleteModal}
        closeDeleteModal={closeDeleteModal}
        deleteAccount={deleteAccount}
        setDeleteMail={setDeleteMail}
      />
    </div>
  );
}

DashParams.propTypes = {
  type: PropTypes.string,
  structureId: PropTypes.number.isRequired,
  photoProfil: PropTypes.string.isRequired,
  photoStructure1: PropTypes.string.isRequired,
  photoStructure2: PropTypes.string.isRequired,
  photoStructure3: PropTypes.string.isRequired,

  nom: PropTypes.string,
  prenom: PropTypes.string.isRequired,
  nomUsage: PropTypes.string.isRequired,
  nomNaissance: PropTypes.string.isRequired,
  adresse: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,

  getData: PropTypes.func.isRequired,
  docPmi: PropTypes.string,
  docIdentite: PropTypes.string,
  docVitale: PropTypes.string,
  docJustifDom: PropTypes.string,
  docDiplome: PropTypes.string,
  docRespCivile: PropTypes.string,
  docAssAuto: PropTypes.string,
};

export default DashParams;

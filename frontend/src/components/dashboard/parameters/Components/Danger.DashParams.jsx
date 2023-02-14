import React from "react";
import PropTypes from "prop-types";
import FormDashDanger from "./Danger/Form.DashDanger";

function DangerDashParams({
  updatePassword,
  setNewPwd,
  setCNewPwd,
  openDeleteModal,
}) {
  return (
    <details className="dashParamsDanger">
      <summary>Votre gestion de compte</summary>
      <FormDashDanger
        updatePassword={updatePassword}
        setNewPwd={setNewPwd}
        setCNewPwd={setCNewPwd}
      />
      <hr />
      <div className="dashParamsDangerDelete">
        <button onClick={openDeleteModal}>Supprimer le compte</button>
      </div>
    </details>
  );
}

DangerDashParams.propTypes = {
  updatePassword: PropTypes.func.isRequired,
  setNewPwd: PropTypes.func.isRequired,
  setCNewPwd: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
};

export default DangerDashParams;

import React from 'react'
import FormDashDanger from './Danger/Form.DashDanger'

function DangerDashParams({ updatePassword, setNewPwd, setCNewPwd, openDeleteModal }) {
    return (
        <details className='dashParamsDanger'>
            <summary>Votre gestion de compte</summary>
            <FormDashDanger
                updatePassword={updatePassword}
                setNewPwd={setNewPwd}
                setCNewPwd={setCNewPwd}
            />
            <hr />
            <div className='dashParamsDangerDelete'>
                <button onClick={openDeleteModal}>Supprimer le compte</button>
            </div>
        </details>
    )
}

export default DangerDashParams
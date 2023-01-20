import React from 'react'
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";
import { GoFile } from "react-icons/go";

function StatusDashReservations({ r, updateStatus }) {
    return (
        <>
            {r.status === "waiting" ? (
                <div className="reserChoice">
                    <button type="button" onClick={() => updateStatus('approved', r.id)}>
                        <MdCheckCircleOutline />
                        Accepter
                    </button>
                    <button type="button" onClick={() => updateStatus('refused', r.id)}>
                        <MdOutlineCancel /> Refuser
                    </button>
                </div>
            ) : (
                <div className="reserModif">
                    <button type="button" onClick={() => updateStatus('waiting', r.id)}>
                        <GoFile />
                        Modifier
                    </button>
                </div>
            )}
        </>
    )
}

export default StatusDashReservations
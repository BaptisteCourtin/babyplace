import React from 'react'

function ClosedDashStatus({ fc, updateStatusOpen }) {
    return (
        <>
            <p>Vous ne travaillez pas 😀</p>
            <button
                className="agendaPlacesWork"
                onClick={() => {
                    updateStatusOpen(fc.calendrierId);
                }}
            >
                Ouvrir
            </button>
        </>
    )
}

export default ClosedDashStatus
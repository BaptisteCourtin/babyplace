import React from 'react'

function FullDashStatus({ fc, updateStatusClose, fullDate }) {
    return (
        <>
            <button
                className="agendaPlacesWork"
                onClick={() => {
                    updateStatusClose(fc.calendrierId);
                }}
            >
                Repos
            </button>
            <button
                className="agendaPlacesWork"
                onClick={() => {
                    fullDate(fc.calendrierId)
                }}
            >
                Complet
            </button>
        </>
    )
}

export default FullDashStatus
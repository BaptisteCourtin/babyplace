import React from 'react'

function ChoiceDashAgenda({ toggleType, setToggleType }) {
    return (
        <div className="dashPlacesType">
            <button
                type="button"
                onClick={() => setToggleType(0)}
                className={toggleType === 0 ? "selected" : ""}
            >
                Récurrent
            </button>
            <button
                type="button"
                onClick={() => setToggleType(1)}
                className={toggleType === 1 ? "selected" : ""}
            >
                Occasionnel
            </button>
        </div>
    )
}

export default ChoiceDashAgenda
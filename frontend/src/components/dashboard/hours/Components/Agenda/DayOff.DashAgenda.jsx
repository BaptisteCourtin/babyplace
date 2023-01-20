import React from 'react'

function DayOffDashAgenda({ updateDay }) {
    return (
        <button
            type="button"
            className="dashNotWorking"
            onClick={
                () => {
                    updateDay(1);
                }
            }
        >
            Envie de travailler ?
        </button>
    )
}

export default DayOffDashAgenda
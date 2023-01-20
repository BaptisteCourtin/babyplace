import React from 'react'
import ReactModal from "react-modal";

function DashNotif({ notif, toggleNotif, setToggleNotif, deleteNotification }) {

    const notifContent = (type) => {
        if (type === "waiting") {
            return "Vous avez une demande en attente"
        }
    }

    const openModal = () => {
        setToggleNotif(true)
    }

    const closeModal = () => {
        setToggleNotif(false)
    }

    return (
        <>
            {toggleNotif && (
                <ReactModal
                    isOpen={openModal}
                    onRequestClose={closeModal}
                    className="notifContainer"
                >
                    <>
                        <div className="notifInner">
                            <h2>Notifications</h2>
                            <button onClick={() => setToggleNotif(false)}>X</button>
                        </div>
                        <hr />
                        <ul>
                            {notif.length ? (
                                notif.map(n => (
                                    <li
                                        onClick={() => {
                                            if (n.type === "waiting") {
                                                setToggle(1)
                                            }
                                        }}
                                    >
                                        <p>{notifContent(n.type)}</p>
                                        <button onClick={() => deleteNotification(n.notifId)}>X</button>
                                    </li>
                                ))
                            ) : (
                                <li
                                    style={{
                                        opacity: '0.7'
                                    }}
                                >
                                    Pas de notifications
                                </li>
                            )}
                        </ul>
                    </>
                </ReactModal>
            )}
        </>
    )
}

export default DashNotif
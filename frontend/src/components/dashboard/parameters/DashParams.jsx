import React, { useRef, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import ReactModal from "react-modal";
import { useNavigate } from 'react-router-dom';
import logo from '@assets/logo5.svg';

function DashParams({ type, structureId, photoProfil, photoStructure1, photoStructure2, photoStructure3, nom, prenom, nomUsage, nomNaissance, adresse, email, telephone, description, userType, getData, docPmi, docIdentite, docVitale, docJustifDom, docDiplome, docRespCivile, docAssAuto }) {

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

    let fileName = ""

    const [infos, setInfos] = useState({
        nom: nom,
        prenom: prenom,
        nomUsage: nomUsage,
        nomNaissance: nomNaissance,
        adresse: adresse,
        email: email,
        telephone: telephone,
        description: description
    })
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteMail, setDeleteMail] = useState(null)
    const [newPwd, setNewPwd] = useState(null)
    const [cNewPwd, setCNewPwd] = useState(null)
    const navigate = useNavigate()

    const uploadDoc = async (value, docData, ref, table) => {
        try {
            docData = new FormData()
            docData.append('file', ref.current.files[0])
            const res = await axios.post(`${import.meta.env.VITE_PATH}/uploads`, docData)
            fileName = res.data
            await axios.put(`${import.meta.env.VITE_PATH}/dashboard/docs/`, {
                id: structureId,
                value: value,
                file: fileName,
                table: table
            })
            toast.success("Votre profil a bien été mis à jour")
            getData()
        } catch (err) {
            console.error(err.message)
        }
    }

    const handleSubmitInfo = async (e) => {
        e.preventDefault()
        const {
            nom,
            prenom,
            nomUsage,
            nomNaissance,
            adresse,
            email,
            telephone,
            description
        } = infos
        try {
            await axios
                .put(`${import.meta.env.VITE_PATH}/structure/infos/${structureId}`, {
                    table: 'structure',
                    id: structureId,
                    adresse,
                    email,
                    telephone,
                    description
                })
            await axios
                .put(`${import.meta.env.VITE_PATH}/structure/infos/${structureId}`, {
                    table: userType,
                    id: structureId,
                    nom,
                    prenom,
                    nomUsage,
                    nomNaissance,
                })
            toast.success("Vos informations ont bien été modifiées")
            getData()
        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteAccount = async (e) => {
        e.preventDefault()
        try {
            if (deleteMail === email) {
                await axios.delete(`${import.meta.env.VITE_PATH}/admin/refused/${structureId}?type=${userType}`, {
                    id: structureId,
                    type: userType
                })
                toast.success("Votre compte a bien été supprimé")
                navigate('/')
            } else if (deleteMail !== email) {
                console.log('hello')
                toast.error("Mauvaise adresse mail")
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    const updateFields = (fields) => {
        setInfos((prev) => {
            return { ...prev, ...fields };
        });
    }

    const updatePassword = async (e) => {
        e.preventDefault()
        try {
            if (newPwd && cNewPwd && newPwd === cNewPwd) {
                await axios.put(`${import.meta.env.VITE_PATH}/structure/password/${structureId}`, {
                    id: structureId,
                    pwd: newPwd
                })
                toast.success('Votre mot de passe a bien été modifié')
            } else {
                toast.error("Les mots de passe ne sont pas identiques")
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    const openDeleteModal = () => {
        setDeleteModal(true)
    }

    const closeDeleteModal = () => {
        setDeleteModal(false)
    }

    console.log(photoProfil)

    return (
        <div className='dashParams'>
            <h2>Paramètres</h2>
            <div className='dashParamsProfilContainer'>
                <div className='dashParamsProfil'>
                    <img src={photoProfil} alt="" />
                    <input
                        type="file"
                        ref={photoProfilRef}
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={() => { uploadDoc("photoProfil", 'photoProfilData', photoProfilRef, 'structure') }}
                    />
                </div>
                <h3 className='dashParamsName'>{nom || prenom} {nomUsage}</h3>
                <p className='dashParamsType'>{type || "Assistante maternelle"}</p>
            </div>
            <details className='dashParamsInfo'>
                <summary>Vos infos</summary>
                <form onSubmit={(e) => handleSubmitInfo(e)}>
                    <div className='dashParamsInfoList'>
                        {userType === 'assMat' ? (
                            <ul>
                                <li>
                                    <label htmlFor="nomUsage">Nom d'usage</label>
                                    <input
                                        type="text"
                                        name="nomUsage"
                                        id="nomUsage"
                                        pattern=".{2,}"
                                        placeholder={nomUsage}
                                        onChange={(e) => updateFields({ nomUsage: e.target.value })}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="nomNaissance">Nom de naissance</label>
                                    <input
                                        type="text"
                                        name="nomNaissance"
                                        id="nomNaissance"
                                        pattern=".{2,}"
                                        placeholder={nomNaissance}
                                        onChange={(e) => updateFields({ nomNaissance: e.target.value })}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="prenom">Prénom</label>
                                    <input
                                        type="text"
                                        name="prenom"
                                        id="prenom"
                                        pattern=".{3,}"
                                        placeholder={prenom}
                                        onChange={(e) => updateFields({ prenom: e.target.value })}
                                    />
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <label htmlFor="nomStructure">Nom</label>
                                    <input
                                        type="text"
                                        name="nomStructure"
                                        id="nomStructure"
                                        pattern=".{4,}"
                                        placeholder={nom}
                                        onChange={(e) => updateFields({ nom: e.target.value })}
                                    />
                                </li>
                            </ul>
                        )}
                        <ul>
                            <li>
                                <label htmlFor="adresse">Adresse</label>
                                <input
                                    type="text"
                                    name="adresse"
                                    id="adresse"
                                    pattern=".{10,} [0-9]{5} .{3,}"
                                    placeholder={adresse}
                                    onChange={(e) => updateFields({ adresse: e.target.value })}
                                />
                            </li>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder={email}
                                    onChange={(e) => updateFields({ email: e.target.value })}
                                />
                            </li>
                            <li>
                                <label htmlFor="tel">Téléphone</label>
                                <input
                                    type="text"
                                    name="tel"
                                    id="tel"
                                    pattern="[0-9]{10}"
                                    placeholder={telephone}
                                    onChange={(e) => updateFields({ telephone: e.target.value })}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className='dashParamsInfoText'>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id='description'
                            name='description'
                            placeholder={description}
                            onChange={(e) => updateFields({ description: e.target.value })}
                        />
                    </div>
                    <div className='dashParamsInfoBtn'>
                        <button type="submit">Enregistrer</button>
                    </div>
                </form>
            </details>
            <details className='dashParamsImages'>
                <p className='dashParamsFormats'>
                    Cliquez sur une image pour la modifier
                    <br />
                    Formats acceptés: <span>jpg / jpeg / png</span>
                </p>
                <summary>Vos photos</summary>
                <ul>
                    <li>
                        <img src={photoStructure1} alt="" />
                        <input
                            type="file"
                            ref={photoStructure1Ref}
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={() => { uploadDoc("photoStructure1", 'photoStructure1Data', photoStructure1Ref, 'structure') }}
                        />
                    </li>
                    <li>
                        <img src={photoStructure2} alt="" />
                        <input
                            type="file"
                            ref={photoStructure2Ref}
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={() => { uploadDoc("photoStructure2", 'photoStructure2Data', photoStructure2Ref, 'structure') }}
                        />
                    </li>
                    <li>
                        <img src={photoStructure3} alt="" />
                        <input
                            type="file"
                            ref={photoStructure3Ref}
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={() => { uploadDoc("photoStructure3", 'photoStructure3Data', photoStructure3Ref, 'structure') }}
                        />
                    </li>
                </ul>
            </details>
            <details className="dashParamsDocs">
                <summary>Vos documents</summary>
                <p className='dashParamsFormats'>Formats acceptés: <span>pdf / jpg / jpeg / png</span></p>
                {userType === 'assMat' ? (
                    <ul>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docPmi">Document PMI</label>
                                <input
                                    type="file"
                                    name="docPmi"
                                    ref={docPmiRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docPmi", 'docPmiData', docPmiRef, 'structure') }}
                                />
                            </div>
                            <a
                                href={docPmi} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docIdentite">Carte d'identité</label>
                                <input
                                    type="file"
                                    name="docIdentite"
                                    ref={docIdentiteRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docIdentite", 'docIdentiteData', docIdentiteRef, 'assMat') }}
                                />
                            </div>
                            <a
                                href={docIdentite} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docVitale">Carte vitale</label>
                                <input
                                    type="file"
                                    name="docVitale"
                                    ref={docVitaleRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docVitale", 'docVitaleData', docVitaleRef, 'assMat') }}
                                />
                            </div>
                            <a
                                href={docVitale} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docJustifDom">Justificatif de domicile</label>
                                <input
                                    type="file"
                                    name="docJustifDom"
                                    ref={docJustifDomRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docJustifDom", 'docJustifDomData', docJustifDomRef, 'assMat') }}
                                />
                            </div>
                            <a
                                href={docJustifDom} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docDiplome">Diplome</label>
                                <input
                                    type="file"
                                    name="docDiplome"
                                    ref={docDiplomeRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docDiplome", 'docDiplomeData', docDiplomeRef, 'assMat') }}
                                />
                            </div>
                            <a
                                href={docDiplome} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docRespCivile">Assurance civile</label>
                                <input
                                    type="file"
                                    name="docRespCivile"
                                    ref={docRespCivileRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docRespCivile", 'docRespCivileData', docRespCivileRef, 'assMat') }}
                                />
                            </div>
                            <a
                                href={docRespCivile} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docAssAuto">Assurance automobile</label>
                                <input
                                    type="file"
                                    name="docAssAuto"
                                    ref={docAssAutoRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docAssAuto", 'docAssAutoData', docAssAutoRef, 'assMat') }}
                                />
                            </div>
                            <a
                                href={docAssAuto} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <div className='dashParamsDocsContainer'>
                                <label htmlFor="docPmi">Document PMI</label>
                                <input
                                    type="file"
                                    name="docPmi"
                                    ref={docPmiRef}
                                    accept="image/png, image/jpg, image/jpeg, .pdf"
                                    onChange={() => { uploadDoc("docPmi", 'docPmiData', docPmiRef, 'structure') }}
                                />
                            </div>
                            <a
                                href={docPmi} target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fichier actuel
                            </a>
                        </li>
                    </ul >
                )
                }
            </details >
            <details className='dashParamsDanger'>
                <summary>Votre gestion de compte</summary>
                <form onSubmit={(e) => { updatePassword(e) }}>
                    <ul>
                        <li>
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                required
                                type="password"
                                name="password"
                                id="password"
                                pattern=".{8,}"
                                placeholder='Nouveau mot de passe'
                                onChange={(e) => { setNewPwd(e.target.value) }}
                            />
                        </li>
                        <li>
                            <label htmlFor="cpassword">Confirmer mot de passe</label>
                            <input
                                required
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                pattern=".{8,}"
                                placeholder='Confirmer le mot de passe'
                                onChange={(e) => { setCNewPwd(e.target.value) }}
                            />
                        </li>
                    </ul>
                    <button type="submit">Enregistrer</button>
                </form>
                <hr />
                <div className='dashParamsDangerDelete'>
                    <button onClick={openDeleteModal}>Supprimer le compte</button>
                </div>
            </details>
            {deleteModal &&
                <ReactModal
                    isOpen={openDeleteModal}
                    onRequestClose={closeDeleteModal}
                    className="deleteContainer"
                >
                    <button className='deleteContainerClose' onClick={closeDeleteModal}>X</button>
                    <div className='deleteContainerHeader'>
                        <img src={logo} />
                        <h2>Babyplace</h2>
                    </div>
                    <p className='deleteContainerText'>
                        Etes vous sûr de vouloir supprimer votre compte ?
                        <br />
                        Cette action est <span>définitive et irréversible</span>
                        <br />
                        Entrez votre <span>adresse email</span> afin de confirmer la suppression de votre compte
                    </p>
                    <form className='deleteContainerInput' onSubmit={(e) => deleteAccount(e)}>
                        <input
                            required
                            type='email'
                            name="deleteConfirm"
                            id="deleteConfirm"
                            placeholder='Adresse mail'
                            onChange={(e) => { setDeleteMail(e.target.value) }}
                        />
                        <button
                            className='deleteContainerBtn'
                            type='submit'
                        >
                            Supprimer
                        </button>
                    </form>
                </ReactModal>
            }
        </div >
    )
}

export default DashParams
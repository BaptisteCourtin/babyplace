import React from 'react'

function DocsDashParams({ userType, uploadDoc, docPmi, docPmiRef, docAssAuto, docAssAutoRef, docDiplome, docDiplomeRef, docIdentite, docIdentiteRef, docJustifDom, docJustifDomRef, docRespCivile, docRespCivileRef, docVitale, docVitaleRef }) {
    return (
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
    )
}

export default DocsDashParams
import React, { useContext } from 'react';
import { StructureContext } from "@components/context/StructureContext";

const Structure15 = ({ numSecu, numAgrement, dateAgrement, docPmi, siret, assHabitNom, assHabitNumero, assHabitAdresse, assAutoNom, assAutoNumero, assAutoAdresse, docIdentite, docVitale, docJustifDom, docDiplome, docRespCivile, docAssAuto, updateFields }) => {
    const { structure } = useContext(StructureContext);

    return (
        <div className="structure15 page-left">
            <div className="pageContent">
                <h4>Vérifications</h4>
                <p>Nous avons besoin d'effectuer une dernière vérification avant validation définitive de votre compte</p>
                <div>
                    {structure === "assmat" ? <div className="inputContainer">
                        <input
                            required
                            type="text"
                            name="numSecu"
                            pattern="[0-9]{15}"
                            value={numSecu}
                            onChange={(e) =>
                                updateFields({ numSecu: e.target.value })
                            }
                        />
                        <label
                            htmlFor="numSecu"
                            className={numSecu !== "" ? "labelChecked" : ""}
                        >
                            N° sécurité sociale
                        </label>
                        <p className="checkSymbol">&#x2713;</p>
                    </div> :
                        <div className="inputContainer">
                            <input
                                required
                                type="text"
                                name="siret"
                                pattern="[0-9]{15}"
                                value={siret}
                                onChange={(e) =>
                                    updateFields({ siret: e.target.value })
                                }
                            />
                            <label
                                htmlFor="siret"
                                className={siret !== "" ? "labelChecked" : ""}
                            >
                                SIRET
                            </label>
                            <p className="checkSymbol">&#x2713;</p>
                        </div>}
                </div>
                <div>
                    <div className="inputContainer">
                        <input
                            required
                            type="text"
                            name="numAgrement"
                            pattern="[0-9]{15}"
                            value={numAgrement}
                            onChange={(e) =>
                                updateFields({ numAgrement: e.target.value })
                            }
                        />
                        <label
                            htmlFor="numAgrement"
                            className={numAgrement !== "" ? "labelChecked" : ""}
                        >
                            N° agrément
                        </label>
                        <p className="checkSymbol">&#x2713;</p>
                    </div>
                    <div className="inputContainer">
                        <input
                            required
                            type="date"
                            name="dateAgrement"
                            value={dateAgrement}
                            onChange={(e) =>
                                updateFields({ dateAgrement: e.target.value })
                            }
                        />
                        <label
                            htmlFor="dateAgrement"
                            className={dateAgrement !== "" ? "labelChecked" : ""}
                        >
                            Date agrément
                        </label>
                        <p className="checkSymbol">&#x2713;</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Structure15;
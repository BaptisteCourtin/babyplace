import React, { useContext } from 'react';
import { StructureContext } from "@components/context/StructureContext";


const Structure12 = ({ nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, updateFields }) => {
    const { structure } = useContext(StructureContext);

    return (
        <div className="structure12 page-left">
            <div className="pageContent">

                {structure === "creche" &&
                    <div>
                        <h5>Nombre de professionnels de la petite enfance employés par votre structure</h5>
                        <p>Vous compris, combien de personnes travaillent-elles dans votre structure ?</p>
                        <div className="inputContainer">
                            <label htmlFor="nbEmployes">
                                <input type="number" min="1" name="nbEmployes" value={nbEmployes} onChange={(e) => updateFields({ nbEmployes: e.target.value })}></input>
                                professionnel(s)</label>
                        </div>
                    </div>}
                <div>
                    <h5>Nombre de places ou agréments</h5>
                    <p>Au total, de combien de places disposez-vous ?</p>
                    <div className="inputContainer">
                        <label htmlFor="maxPlaces">
                            <input type="number" min="1" name="maxPlaces" value={maxPlaces} onChange={(e) => updateFields({ maxPlaces: e.target.value })}></input>
                            place(s)</label>
                    </div>
                </div>
                <div>

                    <h5>Agréments spécifiques</h5>
                    <p>Disposez vous de restriction d'agrément ? Indiquez le nombre <strong>maximum </strong> d'enfants que vous pouvez accueillir en fonction des conditions d'accueil. </p>
                    <div className="inputContainer">
                        <p>Enfant(s) handicapé(s)</p>
                        <label htmlFor="maxHandi">
                            <input type="number" min="0" max={maxPlaces} name="maxHandi" value={maxHandi} onChange={(e) => updateFields({ maxHandi: e.target.value })}></input>
                            maximum</label>
                    </div>
                    <div className="inputContainer">
                        <p>Enfant(s) de moins de 18 mois</p>
                        <label htmlFor="max18Mois">
                            <input type="number" min="0" max={maxPlaces} name="max18Mois" value={max18Mois} onChange={(e) => updateFields({ max18Mois: e.target.value })}></input>
                            maximum</label>
                    </div>
                    <div className="inputContainer">
                        <p>Accueil de nuit</p>
                        <label htmlFor="maxNuit">
                            <input type="number" min="0" max={maxPlaces} name="maxNuit" value={maxNuit} onChange={(e) => updateFields({ maxNuit: e.target.value })}></input>
                            maximum
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Structure12;
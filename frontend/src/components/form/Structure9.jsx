import React from 'react';
import Proptypes from "prop-types";

const Structure9 = ({ lundiOuvert, mardiOuvert, mercrediOuvert, jeudiOuvert, vendrediOuvert, samediOuvert, dimancheOuvert, updateFields }) => {
    return (
        <div className="structure9 page-left">
            <h4>Quels sont vos horaires d'ouverture ?</h4>
            <div className="pageContent">
                <div className="toggleWrapper">
                    <div className="with-toggle">
                        <div className="innerToggle">
                            <p>Lundi</p>
                            <div>
                                <input
                                    type="checkbox"
                                    className="input-toggle"
                                    id="lundi"
                                    name="lundi"
                                    onChange={() => updateFields({ lundiOuvert: !lundiOuvert })}
                                />
                                <label htmlFor="lundi" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>

                        </div>
                        {lundiOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="lundiMin" onChange={(e) => updateFields({ lundiMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="lundiMax" onChange={(e) => updateFields({ lundiMax: e })}></input>
                        </div>}
                    </div>
                    <div className="inputContainer with-toggle">
                        <div className="innerToggle">
                            <p>Mardi</p>
                            <div>
                                <input
                                    type="checkbox"
                                    id="mardi"
                                    name="mardi"
                                    className="input-toggle"
                                    onChange={() => updateFields({ mardiOuvert: !mardiOuvert })}
                                />
                                <label htmlFor="mardi" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>
                        </div>
                        {mardiOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="mardiMin" onChange={(e) => updateFields({ mardiMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="mardiMax" onChange={(e) => updateFields({ mardiMax: e })}></input>
                        </div>}
                    </div>
                    <div className="inputContainer with-toggle">
                        <div className="innerToggle">
                            <p>Mercredi</p>
                            <div>
                                <input
                                    type="checkbox"
                                    id="mercredi"
                                    className="input-toggle"
                                    name="mercredi"
                                    onChange={() => updateFields({ mercrediOuvert: !mercrediOuvert })}
                                />
                                <label htmlFor="mercredi" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>
                        </div>
                        {mercrediOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="mercrediMin" onChange={(e) => updateFields({ mercrediMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="mercrediMax" onChange={(e) => updateFields({ mercrediMax: e })}></input>
                        </div>}
                    </div>
                    <div className="inputContainer with-toggle">
                        <div className="innerToggle">
                            <p>Jeudi</p>
                            <div>
                                <input
                                    type="checkbox"
                                    id="jeudi"
                                    className="input-toggle"
                                    name="jeudi"
                                    onChange={() => updateFields({ jeudiOuvert: !jeudiOuvert })}
                                />
                                <label htmlFor="jeudi" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>
                        </div>
                        {jeudiOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="jeudiMin" onChange={(e) => updateFields({ jeudiMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="jeudiMax" onChange={(e) => updateFields({ jeudiMax: e })}></input>
                        </div>}
                    </div>
                    <div className="inputContainer with-toggle">
                        <div className="innerToggle">
                            <p>Vendredi</p>
                            <div>
                                <input
                                    type="checkbox"
                                    id="vendredi"
                                    name="vendredi"
                                    className="input-toggle"
                                    onChange={() => updateFields({ vendrediOuvert: !vendrediOuvert })}
                                />
                                <label htmlFor="vendredi" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>
                        </div>
                        {vendrediOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="vendrediMin" onChange={(e) => updateFields({ vendrediMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="vendrediMax" onChange={(e) => updateFields({ vendrediMax: e })}></input>
                        </div>}
                    </div>
                    <div className="inputContainer with-toggle">
                        <div className="innerToggle">
                            <p>Samedi</p>
                            <div>
                                <input
                                    type="checkbox"
                                    id="samedi"
                                    className="input-toggle"
                                    name="samedi"
                                    onChange={() => updateFields({ samediOuvert: !samediOuvert })}
                                />
                                <label htmlFor="samedi" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>
                        </div>
                        {samediOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="samediMin" onChange={(e) => updateFields({ samediMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="samediMax" onChange={(e) => updateFields({ samediMax: e })}></input>
                        </div>}
                    </div>
                    <div className="inputContainer with-toggle">
                        <div className="innerToggle">
                            <p>Dimanche</p>
                            <div>
                                <input
                                    type="checkbox"
                                    className="input-toggle"
                                    id="dimanche"
                                    name="dimanche"
                                    onChange={() => updateFields({ dimancheOuvert: !dimancheOuvert })}
                                />
                                <label htmlFor="dimanche" className="toggle">
                                    <span className="ball" />
                                </label>
                            </div>
                        </div>
                        {dimancheOuvert && <div className="horaireOuvert">
                            <p>Ouvert de </p>
                            <input type="time" name="dimancheMin" onChange={(e) => updateFields({ dimancheMin: e })}></input>
                            <p>à</p>
                            <input type="time" name="dimancheMax" onChange={(e) => updateFields({ dimancheMax: e })}></input>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
Structure9.propTypes = {
    lundiOuvert: Proptypes.bool,
    mardiOuvert: Proptypes.bool,
    mercrediOuvert: Proptypes.bool,
    jeudiOuvert: Proptypes.bool,
    vendrediOuvert: Proptypes.bool,
    samediOuvert: Proptypes.bool,
    dimancheOuvert: Proptypes.bool,
    updateFields: Proptypes.func,
};
export default Structure9;
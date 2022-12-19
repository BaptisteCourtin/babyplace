import React, { useState } from "react";
import Proptypes from "prop-types";

function Structure9({
  lundiOuvert,
  mardiOuvert,
  mercrediOuvert,
  jeudiOuvert,
  vendrediOuvert,
  samediOuvert,
  dimancheOuvert,
  updateFields,
}) {
  const [memeHoraire, setMemeHoraire] = useState(true);
  return (
    <div className="structure9 page-left">
      <h4>Quels sont vos horaires d'ouverture ?</h4>
      <div className="pageContent">
        <div className="inputContainer memeHoraire">
          <input
            type="checkbox"
            checked={memeHoraire}
            name="memeHoraire"
            onChange={() => setMemeHoraire(!memeHoraire)}
          />
          <label htmlFor="memeHoraire">
            Mêmes horaires pour tous les jours
          </label>
          {memeHoraire && (
            <div className="horaireOuvert">
              <p>Ouvert de </p>
              <input
                type="time"
                name="horaireMin"
                step="300"
                onChange={(e) => {
                  lundiOuvert && updateFields({ lundiMin: e });
                  mardiOuvert && updateFields({ mardiMin: e });
                  mercrediOuvert && updateFields({ mercrediMin: e });
                  jeudiOuvert && updateFields({ jeudiMin: e });
                  vendrediOuvert && updateFields({ vendrediMin: e });
                  samediOuvert && updateFields({ samediMin: e });
                  dimancheOuvert && updateFields({ dimancheMin: e });
                }}
              />
              <p>à</p>
              <input
                type="time"
                name="horaireMax"
                step="300"
                onChange={(e) => {
                  lundiOuvert && updateFields({ lundiMax: e });
                  mardiOuvert && updateFields({ mardiMax: e });
                  mercrediOuvert && updateFields({ mercrediMax: e });
                  jeudiOuvert && updateFields({ jeudiMax: e });
                  vendrediOuvert && updateFields({ vendrediMax: e });
                  samediOuvert && updateFields({ samediMax: e });
                  dimancheOuvert && updateFields({ dimancheMax: e });
                }}
              />
            </div>
          )}
        </div>
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
                  checked={lundiOuvert}
                  onChange={() => updateFields({ lundiOuvert: !lundiOuvert })}
                />
                <label htmlFor="lundi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!lundiOuvert && <p>Fermé</p>}
            {!memeHoraire && lundiOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="lundiMin"
                  step="300"
                  onChange={(e) => updateFields({ lundiMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="lundiMax"
                  step="300"
                  onChange={(e) => updateFields({ lundiMax: e })}
                />
              </div>
            ) : (
              lundiOuvert && <p>Ouvert</p>
            )}
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
                  checked={mardiOuvert}
                  onChange={() => updateFields({ mardiOuvert: !mardiOuvert })}
                />
                <label htmlFor="mardi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!mardiOuvert && <p>Fermé</p>}
            {!memeHoraire && mardiOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="mardiMin"
                  step="300"
                  onChange={(e) => updateFields({ mardiMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="mardiMax"
                  step="300"
                  onChange={(e) => updateFields({ mardiMax: e })}
                />
              </div>
            ) : (
              mardiOuvert && <p>Ouvert</p>
            )}
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
                  checked={mercrediOuvert}
                  onChange={() =>
                    updateFields({ mercrediOuvert: !mercrediOuvert })
                  }
                />
                <label htmlFor="mercredi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!mercrediOuvert && <p>Fermé</p>}
            {!memeHoraire && mercrediOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="mercrediMin"
                  step="300"
                  onChange={(e) => updateFields({ mercrediMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="mercrediMax"
                  step="300"
                  onChange={(e) => updateFields({ mercrediMax: e })}
                />
              </div>
            ) : (
              mercrediOuvert && <p>Ouvert</p>
            )}
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
                  checked={jeudiOuvert}
                  onChange={() => updateFields({ jeudiOuvert: !jeudiOuvert })}
                />
                <label htmlFor="jeudi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!jeudiOuvert && <p>Fermé</p>}
            {!memeHoraire && jeudiOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="jeudiMin"
                  step="300"
                  onChange={(e) => updateFields({ jeudiMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="jeudiMax"
                  step="300"
                  onChange={(e) => updateFields({ jeudiMax: e })}
                />
              </div>
            ) : (
              jeudiOuvert && <p>Ouvert</p>
            )}
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
                  checked={vendrediOuvert}
                  onChange={() =>
                    updateFields({ vendrediOuvert: !vendrediOuvert })
                  }
                />
                <label htmlFor="vendredi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!vendrediOuvert && <p>Fermé</p>}
            {!memeHoraire && vendrediOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="vendrediMin"
                  step="300"
                  onChange={(e) => updateFields({ vendrediMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="vendrediMax"
                  step="300"
                  onChange={(e) => updateFields({ vendrediMax: e })}
                />
              </div>
            ) : (
              vendrediOuvert && <p>Ouvert</p>
            )}
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
                  checked={samediOuvert}
                  onChange={() => updateFields({ samediOuvert: !samediOuvert })}
                />
                <label htmlFor="samedi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!samediOuvert && <p>Fermé</p>}
            {!memeHoraire && samediOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="samediMin"
                  step="300"
                  onChange={(e) => updateFields({ samediMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="samediMax"
                  step="300"
                  onChange={(e) => updateFields({ samediMax: e })}
                />
              </div>
            ) : (
              samediOuvert && <p>Ouvert</p>
            )}
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
                  checked={dimancheOuvert}
                  onChange={() =>
                    updateFields({ dimancheOuvert: !dimancheOuvert })
                  }
                />
                <label htmlFor="dimanche" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {!dimancheOuvert && <p>Fermé</p>}
            {!memeHoraire && dimancheOuvert ? (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="dimancheMin"
                  step="300"
                  onChange={(e) => updateFields({ dimancheMin: e })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="dimancheMax"
                  step="300"
                  onChange={(e) => updateFields({ dimancheMax: e })}
                />
              </div>
            ) : (
              dimancheOuvert && <p>Ouvert</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
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

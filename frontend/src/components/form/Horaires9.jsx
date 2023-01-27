import React, { useState, useEffect } from "react";
import Proptypes, { bool, string, number, oneOfType } from "prop-types";
import Axios from "axios";

function Structure9({
  lundiOuvert,
  mardiOuvert,
  mercrediOuvert,
  jeudiOuvert,
  vendrediOuvert,
  samediOuvert,
  dimancheOuvert,
  lundiMin,
  lundiMax,
  mardiMin,
  mardiMax,
  mercrediMin,
  mercrediMax,
  jeudiMin,
  jeudiMax,
  vendrediMin,
  vendrediMax,
  samediMin,
  samediMax,
  dimancheMin,
  dimancheMax,
  structureId,
  setData,
  setHorairesExist,
  updateFields,
}) {
  const [memeHoraire, setMemeHoraire] = useState(true);
  const getHoraires = () => {
    Axios.get(`${import.meta.env.VITE_PATH}/horairesExist?id=${structureId}`, [
      structureId,
    ])
      .then((result) => {
        if (result.data.length > 0) {
          setHorairesExist(true);
        } else {
          setHorairesExist(false);
        }
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].jourId === 1) {
            setData((prev) => {
              return {
                ...prev,
                lundiOuvert: result.data[i].ouvert,
                lundiMin: result.data[i].heureMin,
                lundiMax: result.data[i].heureMax,
              };
            });
          } else if (result.data[i].jourId === 2) {
            setData((prev) => {
              return {
                ...prev,
                mardiOuvert: result.data[i].ouvert,
                mardiMin: result.data[i].heureMin,
                mardiMax: result.data[i].heureMax,
              };
            });
          } else if (result.data[i].jourId === 3) {
            setData((prev) => {
              return {
                ...prev,
                mercrediOuvert: result.data[i].ouvert,
                mercrediMin: result.data[i].heureMin,
                mercrediMax: result.data[i].heureMax,
              };
            });
          } else if (result.data[i].jourId === 4) {
            setData((prev) => {
              return {
                ...prev,
                jeudiOuvert: result.data[i].ouvert,
                jeudiMin: result.data[i].heureMin,
                jeudiMax: result.data[i].heureMax,
              };
            });
          } else if (result.data[i].jourId === 5) {
            setData((prev) => {
              return {
                ...prev,
                vendrediOuvert: result.data[i].ouvert,
                vendrediMin: result.data[i].heureMin,
                vendrediMax: result.data[i].heureMax,
              };
            });
          } else if (result.data[i].jourId === 6) {
            setData((prev) => {
              return {
                ...prev,
                samediOuvert: result.data[i].ouvert,
                samediMin: result.data[i].heureMin,
                samediMax: result.data[i].heureMax,
              };
            });
          } else if (result.data[i].jourId === 7) {
            setData((prev) => {
              return {
                ...prev,
                dimancheOuvert: result.data[i].ouvert,
                dimancheMin: result.data[i].heureMin,
                dimancheMax: result.data[i].heureMax,
              };
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getHoraires();
  }, [structureId]);

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
                value={
                  lundiMin ||
                  mardiMin ||
                  mercrediMin ||
                  jeudiMin ||
                  vendrediMin ||
                  samediMin ||
                  dimancheMin ||
                  undefined
                }
                onChange={(e) => {
                  lundiOuvert && updateFields({ lundiMin: e.target.value });
                  mardiOuvert && updateFields({ mardiMin: e.target.value });
                  mercrediOuvert &&
                    updateFields({ mercrediMin: e.target.value });
                  jeudiOuvert && updateFields({ jeudiMin: e.target.value });
                  vendrediOuvert &&
                    updateFields({ vendrediMin: e.target.value });
                  samediOuvert && updateFields({ samediMin: e.target.value });
                  dimancheOuvert &&
                    updateFields({ dimancheMin: e.target.value });
                }}
              />
              <p>à</p>
              <input
                type="time"
                name="horaireMax"
                step="300"
                value={
                  lundiMax ||
                  mardiMax ||
                  mercrediMax ||
                  jeudiMax ||
                  vendrediMax ||
                  samediMax ||
                  dimancheMax ||
                  undefined
                }
                onChange={(e) => {
                  lundiOuvert && updateFields({ lundiMax: e.target.value });
                  mardiOuvert && updateFields({ mardiMax: e.target.value });
                  mercrediOuvert &&
                    updateFields({ mercrediMax: e.target.value });
                  jeudiOuvert && updateFields({ jeudiMax: e.target.value });
                  vendrediOuvert &&
                    updateFields({ vendrediMax: e.target.value });
                  samediOuvert && updateFields({ samediMax: e.target.value });
                  dimancheOuvert &&
                    updateFields({ dimancheMax: e.target.value });
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
            {lundiOuvert && memeHoraire && <p>Ouvert</p>}
            {!memeHoraire && lundiOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="lundiMin"
                  step="300"
                  value={lundiMin}
                  onChange={(e) => updateFields({ lundiMin: e.target.value })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="lundiMax"
                  step="300"
                  value={lundiMax}
                  onChange={(e) => updateFields({ lundiMax: e.target.value })}
                />
              </div>
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
            {mardiOuvert && memeHoraire && <p>Ouvert</p>}
            {!memeHoraire && mardiOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="mardiMin"
                  step="300"
                  value={mardiMin}
                  onChange={(e) => updateFields({ mardiMin: e.target.value })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="mardiMax"
                  step="300"
                  value={mardiMax}
                  onChange={(e) => updateFields({ mardiMax: e.target.value })}
                />
              </div>
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
            {mercrediOuvert && memeHoraire && <p>Ouvert</p>}
            {!memeHoraire && mercrediOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="mercrediMin"
                  step="300"
                  value={mercrediMin}
                  onChange={(e) =>
                    updateFields({ mercrediMin: e.target.value })
                  }
                />
                <p>à</p>
                <input
                  type="time"
                  name="mercrediMax"
                  step="300"
                  value={mercrediMax}
                  onChange={(e) =>
                    updateFields({ mercrediMax: e.target.value })
                  }
                />
              </div>
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
            {jeudiOuvert && memeHoraire && <p>Ouvert</p>}
            {!memeHoraire && jeudiOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="jeudiMin"
                  step="300"
                  value={jeudiMin}
                  onChange={(e) => updateFields({ jeudiMin: e.target.value })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="jeudiMax"
                  step="300"
                  value={jeudiMax}
                  onChange={(e) => updateFields({ jeudiMax: e.target.value })}
                />
              </div>
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
            {vendrediOuvert && memeHoraire && <p>Ouvert</p>}
            {!memeHoraire && vendrediOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="vendrediMin"
                  step="300"
                  value={vendrediMin}
                  onChange={(e) =>
                    updateFields({ vendrediMin: e.target.value })
                  }
                />
                <p>à</p>
                <input
                  type="time"
                  name="vendrediMax"
                  step="300"
                  value={vendrediMax}
                  onChange={(e) =>
                    updateFields({ vendrediMax: e.target.value })
                  }
                />
              </div>
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
            {samediOuvert && memeHoraire ? <p>Ouvert</p> : ""}
            {!memeHoraire && samediOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="samediMin"
                  step="300"
                  value={samediMin}
                  onChange={(e) => updateFields({ samediMin: e.target.value })}
                />
                <p>à</p>
                <input
                  type="time"
                  name="samediMax"
                  step="300"
                  value={samediMax}
                  onChange={(e) => updateFields({ samediMax: e.target.value })}
                />
              </div>
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
            {Boolean(dimancheOuvert) && memeHoraire && <p>Ouvert</p>}
            {!memeHoraire && dimancheOuvert && (
              <div className="horaireOuvert">
                <p>Ouvert de </p>
                <input
                  type="time"
                  name="dimancheMin"
                  step="300"
                  value={dimancheMin}
                  onChange={(e) =>
                    updateFields({ dimancheMin: e.target.value })
                  }
                />
                <p>à</p>
                <input
                  type="time"
                  name="dimancheMax"
                  step="300"
                  value={dimancheMax}
                  onChange={(e) =>
                    updateFields({ dimancheMax: e.target.value })
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Structure9.propTypes = {
  lundiOuvert: oneOfType([bool, number]),
  mardiOuvert: oneOfType([bool, number]),
  mercrediOuvert: oneOfType([bool, number]),
  jeudiOuvert: oneOfType([bool, number]),
  vendrediOuvert: oneOfType([bool, number]),
  samediOuvert: oneOfType([bool, number]),
  dimancheOuvert: oneOfType([bool, number]),
  lundiMin: oneOfType([string, number]),
  lundiMax: oneOfType([string, number]),
  mardiMin: oneOfType([string, number]),
  mardiMax: oneOfType([string, number]),
  mercrediMin: oneOfType([string, number]),
  mercrediMax: oneOfType([string, number]),
  jeudiMin: oneOfType([string, number]),
  jeudiMax: oneOfType([string, number]),
  vendrediMin: oneOfType([string, number]),
  vendrediMax: oneOfType([string, number]),
  samediMin: oneOfType([string, number]),
  samediMax: oneOfType([string, number]),
  dimancheMin: oneOfType([string, number]),
  dimancheMax: oneOfType([string, number]),
  structureId: oneOfType([string, number]),
  setData: Proptypes.func,
  setHorairesExist: Proptypes.func,
  updateFields: Proptypes.func,
};
export default Structure9;

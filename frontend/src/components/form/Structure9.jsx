import React from "react";
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
            {lundiOuvert && (
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
                  onChange={() => updateFields({ mardiOuvert: !mardiOuvert })}
                />
                <label htmlFor="mardi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {mardiOuvert && (
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
                  onChange={() =>
                    updateFields({ mercrediOuvert: !mercrediOuvert })
                  }
                />
                <label htmlFor="mercredi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {mercrediOuvert && (
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
                  onChange={() => updateFields({ jeudiOuvert: !jeudiOuvert })}
                />
                <label htmlFor="jeudi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {jeudiOuvert && (
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
                  onChange={() =>
                    updateFields({ vendrediOuvert: !vendrediOuvert })
                  }
                />
                <label htmlFor="vendredi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {vendrediOuvert && (
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
                  onChange={() => updateFields({ samediOuvert: !samediOuvert })}
                />
                <label htmlFor="samedi" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {samediOuvert && (
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
                  onChange={() =>
                    updateFields({ dimancheOuvert: !dimancheOuvert })
                  }
                />
                <label htmlFor="dimanche" className="toggle">
                  <span className="ball" />
                </label>
              </div>
            </div>
            {dimancheOuvert && (
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

import React from "react";
import PropTypes from "prop-types";

function OptionsDashHours({
  userType,
  updateIndemn,
  indemn1,
  setIndemn1,
  indemn2,
  setIndemn2,
  indemn3,
  setIndemn3,
  switch1,
  setSwitch1,
  switch2,
  setSwitch2,
  switch3,
  setSwitch3,
}) {
  return (
    <details>
      <summary>Vos options</summary>
      <div className="dashPlacesOptions">
        {userType === "assMat" && (
          <>
            <div className="dashSwitchContainer">
              Indemnité d'entretien
              <label htmlFor="dashSwitch1" className="dashSwitch">
                <input
                  type="checkbox"
                  id="dashSwitch1"
                  onChange={() => setSwitch1(!switch1)}
                  defaultChecked={indemn1 !== 0 && true}
                />
                <span className="dashSwitchSlider" />
              </label>
              <p
                className="dashOptionsPrices"
                style={{ display: switch1 ? "none" : "flex" }}
              >
                <input
                  type="number"
                  min={1}
                  value={indemn1}
                  step={0.5}
                  onChange={(e) => {
                    setIndemn1(e.target.value);
                    updateIndemn("indemnEntretien", e.target.value);
                  }}
                />
                €
              </p>
            </div>
            <div className="dashSwitchContainer">
              Indemnité kilométrique
              <label htmlFor="dashSwitch2" className="dashSwitch">
                <input
                  type="checkbox"
                  id="dashSwitch2"
                  onChange={() => setSwitch2(!switch2)}
                  defaultChecked={indemn2 !== 0 && true}
                />
                <span className="dashSwitchSlider" />
              </label>
              <p
                className="dashOptionsPrices"
                style={{ display: switch2 ? "none" : "flex" }}
              >
                <input
                  type="number"
                  min={1}
                  value={indemn2}
                  step={0.5}
                  onChange={(e) => {
                    setIndemn2(e.target.value);
                    updateIndemn("indemnKm", e.target.value);
                  }}
                />
                €
              </p>
            </div>
          </>
        )}
        <div className="dashSwitchContainer">
          Indemnité de repas
          <label htmlFor="dashSwitch3" className="dashSwitch">
            <input
              type="checkbox"
              id="dashSwitch3"
              onChange={() => setSwitch3(!switch3)}
              defaultChecked={indemn3 !== 0 && true}
            />
            <span className="dashSwitchSlider" />
          </label>
          <p
            className="dashOptionsPrices"
            style={{ display: switch3 ? "none" : "flex" }}
          >
            <input
              type="number"
              min={1}
              value={indemn3}
              step={0.5}
              onChange={(e) => {
                setIndemn3(e.target.value);
                updateIndemn("indemnRepas", e.target.value);
              }}
            />
            €
          </p>
        </div>
      </div>
    </details>
  );
}

OptionsDashHours.propTypes = {
  userType: PropTypes.string.isRequired,
  updateIndemn: PropTypes.func.isRequired,
  indemn1: PropTypes.number,
  setIndemn1: PropTypes.func.isRequired,
  indemn2: PropTypes.number,
  setIndemn2: PropTypes.func.isRequired,
  indemn3: PropTypes.number,
  setIndemn3: PropTypes.func.isRequired,
  switch1: PropTypes.bool,
  setSwitch1: PropTypes.func.isRequired,
  switch2: PropTypes.bool,
  setSwitch2: PropTypes.func.isRequired,
  switch3: PropTypes.bool,
  setSwitch3: PropTypes.func.isRequired,
};

export default OptionsDashHours;

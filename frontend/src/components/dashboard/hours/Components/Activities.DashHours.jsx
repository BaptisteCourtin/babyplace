import React from "react";
import PropTypes from "prop-types";
import activitiesArray from "@utils/activitiesArray";

function ActivitiesDashHours({ data, updateOptions }) {
  return (
    <details>
      <summary>Vos activités</summary>
      <ul className="dashPlacesCheckboxes">
        {activitiesArray.map((a, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={a.id}
              name={a.id}
              defaultChecked={data[a.name]}
              onChange={() => {
                updateOptions(a.name, data[a.name]);
              }}
            />
            <label htmlFor={a.id}>{a.content}</label>
          </li>
        ))}
      </ul>
    </details>
  );
}

ActivitiesDashHours.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  updateOptions: PropTypes.func.isRequired,
};

export default ActivitiesDashHours;

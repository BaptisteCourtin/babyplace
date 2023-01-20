import React from 'react'
import { activitiesArray } from "@utils/activitiesArray";

function ActivitiesDashHours({ data, updateOptions }) {
    return (
        <details>
            <summary>Vos activités</summary>
            <ul className="dashPlacesCheckboxes">
                {activitiesArray.map(a => (
                    <li>
                        <input
                            type="checkbox"
                            id={a.id}
                            name={a.id}
                            defaultChecked={data[a.name]}
                            onChange={() => {
                                updateOptions(a.name, data[a.name])
                            }}
                        />
                        <label htmlFor={a.id}>
                            {a.content}
                        </label>
                    </li>
                ))}
            </ul>
        </details>
    )
}

export default ActivitiesDashHours
import React from "react";

function Structure1({ name, mail, updateFields }) {
  return (
    <div>
      <input
        required
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <input
        required
        type="email"
        placeholder="mail"
        value={mail}
        onChange={(e) => updateFields({ mail: e.target.value })}
      />
    </div>
  );
}

export default Structure1;

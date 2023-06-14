import React from 'react';

const ToggleSwitch = () => {
  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="toggleSwitch" />
      <label className="form-check-label" htmlFor="toggleSwitch">
        Multiple Lines
      </label>
    </div>
  );
};

export default ToggleSwitch;

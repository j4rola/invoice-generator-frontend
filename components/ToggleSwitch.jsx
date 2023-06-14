'use client'
import React, { useState, useEffect } from 'react';
import { useLineContext } from '../app/context/lineContext.js';

const ToggleSwitch = () => {
  const { data, setData } = useLineContext(false);

  const toggleSwitch = () => {
    setData(!data); 
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <p>{`${data}`}</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="toggleSwitch"
          checked={data}
          onChange={toggleSwitch} 
        />
        <label className="form-check-label" htmlFor="toggleSwitch">
          Multiple Lines
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;

 

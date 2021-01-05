import React from 'react';

const Field = ({ labelText, name }) => {
  return (
    <div className="field">
      <label>{labelText}</label>
      <input type="text" name={name} />
    </div>
  );
};

export default Field;

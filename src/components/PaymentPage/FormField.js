import React from 'react';
import './FormField.scss';

const Field = ({ labelText, name, width }) => {
  return (
    <div className="form-field" style={{ width }}>
      <label>{labelText}</label>
      <input type="text" name={name} />
    </div>
  );
};

export default Field;

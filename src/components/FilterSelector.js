import React from 'react';
import './FilterSelector.scss';

const FilterSelector = () => {
  return (
    <nav className="filter-selector">
      <div className="filter-type">
        <label>Filters:</label>
        <div className="field">
          <input type="checkbox" />
          <label>Basics</label>
        </div>
      </div>
      <div className="filter-type">
        <label>Prices:</label>
        <div>
          <div className="field">
            <input type="radio" name="price" />
            <label>$1 - $50</label>
          </div>
          <div className="field">
            <input type="radio" name="price" />
            <label>$51 - $100</label>
          </div>
          <div className="field">
            <input type="radio" name="price" />
            <label>$101 - $200</label>
          </div>
        </div>
      </div>
      <div className="filter-type">
        <div className="field">
          <label>Sort by:</label>
        </div>
        <select name="sort">
          <option value="relevant">Relevant</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    </nav>
  );
};

export default FilterSelector;

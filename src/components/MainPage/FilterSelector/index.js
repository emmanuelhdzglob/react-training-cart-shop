import React from 'react';
import { connect } from 'react-redux';
import {
  toggleBasicFilter,
  changePriceFilter,
  changeSort,
  filterProducts,
} from '../../../actions';
import './FilterSelector.scss';

const priceRanges = [
  { label: '$1 - $50', limits: [1, 50] },
  { label: '$51 - $100', limits: [51, 100] },
  { label: '$101 - $200', limits: [101, 200] },
];

const sortCriteria = [
  { label: 'None', value: 'none' },
  { label: 'Relevant', value: 'Rating' },
  { label: 'Price', value: 'Prices' },
];

const FilterSelector = (props) => {
  return (
    <nav className="filter-selector">
      <div className="filter-type">
        <label>Filters:</label>
        <div className="field">
          <input
            type="checkbox"
            onChange={() => {
              props.toggleBasicFilter();
              props.filterProducts();
            }}
            checked={props.activeFilters.basic === 'yes'}
          />
          <label>Basics</label>
        </div>
      </div>

      <div className="filter-type">
        <label>Prices:</label>
        <div>
          {priceRanges.map((range) => (
            <div className="field" key={range.label}>
              <input
                type="radio"
                name="price"
                onChange={() => {
                  props.changePriceFilter({
                    label: range.label,
                    limits: range.limits,
                  });
                  props.filterProducts();
                }}
                checked={props.activeFilters.priceRange.label === range.label}
              />
              <label>{range.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-type">
        <div className="field">
          <label>Sort by:</label>
        </div>
        <select
          name="sort"
          onChange={(evt) => {
            props.changeSort(evt.target.value);
            props.filterProducts();
          }}
        >
          {sortCriteria.map((criteria) => (
            <option value={criteria.value} key={criteria.value}>
              {criteria.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    activeFilters: state.activeFilters,
    products: state.products.items,
  };
};

export default connect(mapStateToProps, {
  toggleBasicFilter,
  changePriceFilter,
  changeSort,
  filterProducts,
})(FilterSelector);

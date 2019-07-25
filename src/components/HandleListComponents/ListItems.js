/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ListItems = ({ items, removeItem }) => (
  <ul className="list-group">
    {items.map((item, key) => (
      <li key={key} className="list-group-item">
        {item}
        <button
          type="button"
          onClick={() => removeItem(key)}
          className="btn btn-link btn-sm float-right"
        >
          <span>Remover</span>
        </button>
      </li>
    ))
  }
  </ul>
);

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ListItems;

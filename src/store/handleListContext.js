/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import apiEllipsis from '../services/apiEllipsis';
import path from '../util/splitpath';
console.log(path)

const { id, config } = apiEllipsis.dataToEdit();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, listItems: action.payload.items };
    case 'REMOVE_ITEM':
      return { ...state, listItems: action.payload.items };
    default:
      return state;
  }
}

const initialState = {
  id,
  typeList: path[0] || '',
  mode: path[1] || 'view',
  titleList: path[0] || '',
  items: config ? config.items : [],
};

export const Store = React.createContext();

const ListContectComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
};

ListContectComponent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ListContectComponent;

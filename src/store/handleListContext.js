import React from 'react';
import apiEllipsis from '../services/apiEllipsis';

const path = window.location.pathname.split('/').slice(1);
const {id, config} = apiEllipsis.dataToEdit()

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
  typeList : path[0] || '',
  mode: path[1] || 'view',
  titleList: path[0] || '',
  items: config ? config.items : []
};

export const Store = React.createContext();

export const ListContectComponent = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}

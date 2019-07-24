import React from 'react'

export const ListItems = ({items, removeItem}) => (
  <ul className="list-group">
    {items.map((item, key) => (
      <li key={key} className="list-group-item">
        {item}
        <button 
          onClick={() => removeItem(key)}
          className="btn btn-link btn-sm float-right">
          <span>
              Remover
          </span>
        </button> 
      </li>)
      ) 
    }
  </ul>
);
import React, { Fragment } from 'react'

export const ViewList = ({titleList, items}) => (
  <Fragment>
    <p>{titleList}</p>
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
  </Fragment>
);
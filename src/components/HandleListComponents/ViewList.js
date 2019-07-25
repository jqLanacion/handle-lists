/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ViewList = ({ titleList, items }) => (
  <Fragment>
    <p>{titleList}</p>
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
  </Fragment>
);

ViewList.propTypes = {
  titleList: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ViewList;

/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../../util/capitalize';

const ViewList = ({ typeList, titleList, items }) => (
  <Fragment>
    <h3>{capitalize(typeList)}</h3>
    <p>{titleList}</p>
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
  </Fragment>
);

ViewList.propTypes = {
  typeList: PropTypes.string.isRequired,
  titleList: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ViewList;

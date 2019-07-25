/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const EntryFormItem = ({ _onSubmit, bind }) => (
  <form className="form-inline" onSubmit={_onSubmit}>
    <div className="input-group" style={{ width: '100%' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Edite un item"
        {...bind}
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-info mb-2">Agregar</button>
      </div>
    </div>
  </form>
);

EntryFormItem.propTypes = {
  _onSubmit: PropTypes.func.isRequired,
  bind: PropTypes.any.isRequired,
};

export default EntryFormItem;

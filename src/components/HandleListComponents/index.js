/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import EntryFormItem from './EntryFormItem';
import ListItems from './ListItems';
import { capitalize } from '../../util/capitalize';

// eslint-disable-next-line max-len
const HandleListComponent = ({
  state, bind, handleSubmit, removeItem, setConfigData, cancelMessage,
}) => (
  <div className="container" style={{ marginTop: '60px' }}>
    <div className="row justify-content-md-center">
      <div className="col-md-6">
        <div className="" style={{ padding: '15px' }}>
          <p>{capitalize(state.titleList)}</p>
          <EntryFormItem
            bind={bind}
            _onSubmit={handleSubmit}
          />
          <div>
            Elementos
            <ListItems items={state.items} removeItem={removeItem} />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary float-right px-4"
            onClick={setConfigData}
          >
              Guardar
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary float-right px-4 mx-3"
            onClick={cancelMessage}
          >
              Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
);

HandleListComponent.propTypes = {
  state: PropTypes.object,
  bind: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setConfigData: PropTypes.func.isRequired,
  cancelMessage: PropTypes.func.isRequired,
};

HandleListComponent.defaultProps = {
  state: {
    titleList: '',
    items: [],
  },
};

export default HandleListComponent;

import React, { useContext } from 'react';
import ViewList from '../../components/HandleListComponents/ViewList';
import HandleListComponent from '../../components/HandleListComponents/index';
import { Store } from '../../store/handleListContext';
import useInput from '../../hooks/useInput';
import apiEllipsis from '../../services/apiEllipsis';

function HandleListContainer() {
  const { value, bind, reset } = useInput('');
  const { state, dispatch } = useContext(Store);

  /**
   * Si la solicitud es de una vista,
   * hacemos return solo de la vista
   * sin logica adicional
   */
  if (state.mode === 'view') return <ViewList {...state} />;

  /**
   * metodo para submit de items a la lista
   * @param {object} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) return;

    const { items } = state;
    items.push(value);

    dispatch({
      type: 'ADD_ITEM',
      payload: { items },
    });
    reset();
  };

  /**
   * metodo para elimiar items de la lista
   * @param {number} key
   */
  const removeItem = (key) => {
    const { items } = state;
    items.splice(key, 1);

    dispatch({
      type: 'REMOVE_ITEM',
      payload: { items },
    });
  };

  /**
   * Metodo para indicar a ellipsis si crea o aplica cambios
   */
  const setConfigData = () => {
    if (state.mode === 'edit') {
      apiEllipsis.applyChanges({
        id: state.id,
        url: 'https://handle-lists.itjquintana.now.sh/',
        config: {
          items: state.items,
        },
      });
    } else {
      apiEllipsis.createNewEmbed({
        config: {
          title: state.titleList,
          items: state.items,
        },
      });
    }
  };

  /**
   * Metodo para salir de la vista modal y cancelar sin cambios
   */
  const cancelMessage = () => {
    apiEllipsis.dismissEditor();
  };

  return (
    <HandleListComponent
      state={state}
      bind={bind}
      handleSubmit={handleSubmit}
      removeItem={removeItem}
      setConfigData={setConfigData}
      cancelMessage={cancelMessage}
    />
  );
}

export default HandleListContainer;

import React, { useContext } from 'react';
import { EntryFormItem } from '../../components/HandleListComponents/EntryFormItem';
import { ViewList } from '../../components/HandleListComponents/ViewList';
import { ListItems } from '../../components/HandleListComponents/ListItems';
import { Store } from '../../store/handleListContext';
import { useInput } from '../../hooks/useInput';
import apiEllipsis from '../../services/apiEllipsis';
import { capitalize } from '../../util/capitalize';

function HandleListContainer(props) {
  const { value, bind, reset } = useInput('');
  const { state, dispatch } = useContext(Store)

  if(state.mode === 'view') return <ViewList {...state}/>

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value.length === 0) return

    let items = state.items
    items.push(value)
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {items}
    })
    reset();
  }

  const removeItem = (key) => {
    let items = state.items
    items.splice(key, 1)

    dispatch({
      type: 'REMOVE_ITEM',
      payload: {items}
    })
  }

  const setConfigData = () => {
    state.mode === 'edit'
      ? apiEllipsis.applyChanges({id: state.id, url: 'https://handle-lists.itjquintana.now.sh/', config: {items: state.items}})
      : apiEllipsis.createNewEmbed({title: state.titleList, items: state.items});
  }
  
  const cancelMessage = () => {
    apiEllipsis.dismissEditor();
  }

  return (
    <div className="container" style={{'marginTop': '60px'}}>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="" style={{'padding': '15px'}}>
            <p>{capitalize(state.titleList)}</p>
            <EntryFormItem
              bind={bind}
              _onSubmit={handleSubmit}/>
            <div>
              Elementos
              <ListItems items={state.items} removeItem={removeItem} />
            </div>
            <br />
            <button 
              className="btn btn-primary float-right px-4"
              onClick={setConfigData}
              >Guardar</button>
            <button 
              className="btn btn-outline-secondary float-right px-4 mx-3"
              onClick={cancelMessage}
              >Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandleListContainer

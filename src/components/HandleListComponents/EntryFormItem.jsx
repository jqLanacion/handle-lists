import React from 'react'

export const EntryFormItem = (props) => (
  <form className="form-inline" onSubmit={props._onSubmit}>
    <div className="input-group" style={{'width': '100%'}}>
      <input 
        type="text"
        className="form-control"
        placeholder={ props.placeholder } 
        {...props.bind}/>
      <div className="input-group-append">
          <button type="submit" className="btn btn-info mb-2">Agregar</button>
      </div>
    </div>
  </form>
)
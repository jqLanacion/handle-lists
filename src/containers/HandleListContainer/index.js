import React from 'react';
import ListContextComponent from '../../store/handleListContext';
import HandleListContainer from './HandleListContainer';

/** Componente para pasar el Context.Provider */
const ListContainer = () => (<ListContextComponent><HandleListContainer /></ListContextComponent>);

export default ListContainer;

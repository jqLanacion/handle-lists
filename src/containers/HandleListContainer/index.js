import React from 'react';
import ListContectComponent from '../../store/handleListContext';
import HandleListContainer from './HandleListContainer';

/** Componente para pasar el Context.Provider */
const ListContainer = () => (<ListContectComponent><HandleListContainer /></ListContectComponent>);

export default ListContainer;

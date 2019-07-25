import React from 'react';
import HandleListContainer from './containers/HandleListContainer';
import path from './util/splitpath';

const CustomEmbed = () => {
  switch (path[0]) {
    case 'ingredientes':
      return <HandleListContainer />;
    case 'sarasa':
      return <p>Sarasa style</p>;
    default:
      return <h3>Custom Embed not Found</h3>;
  }
};

function App() {
  return (
    <CustomEmbed />
  );
}

export default App;

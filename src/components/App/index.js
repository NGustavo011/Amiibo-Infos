import React from 'react';
import ListCardProvider from '../../providers/ListCardProvider'
import Routes from '../../routes';

function App() {
  return (
    <main>
      <ListCardProvider>
        <Routes />
      </ListCardProvider>
    </main>
  );
}

export default App;

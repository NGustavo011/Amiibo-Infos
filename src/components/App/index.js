import React from 'react';
import ListCardProvider from '../../providers/ListCardProvider'
import AmiiboInfoProvider from '../../providers/AmiiboInfoProvider'
import Routes from '../../routes';

function App() {
  return (
    <main>
      <ListCardProvider>
        <AmiiboInfoProvider>
          <Routes />
        </AmiiboInfoProvider>
      </ListCardProvider>
    </main>
  );
}

export default App;

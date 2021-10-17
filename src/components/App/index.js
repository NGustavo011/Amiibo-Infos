import React from 'react';
import Layout from '../Layout';
import AmiiboList from '../AmiiboList';
import AmiiboInfo from '../AmiiboInfo';
import ListCardProvider from '../../providers/ListCardProvider'

function App() {
  return (
    <main>
      <ListCardProvider>
        <Layout>
          <div>
            <AmiiboList />
          </div>
        </Layout>
      </ListCardProvider>
    </main>
  );
}

export default App;

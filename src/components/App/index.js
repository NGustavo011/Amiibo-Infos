import React from 'react';
import Layout from '../Layout';
import AmiiboList from '../AmiiboList';
import AmiiboInfo from '../AmiiboInfo';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <AmiiboInfo />
        </div>
      </Layout>
    </main>
  );
}

export default App;

import React from 'react';
import './App.scss';

import Header from './components/Header';

function App() {
  const getTestEl = () => {
    const style = {
      display: 'inline-block',
      width: '200px',
      height: '200px',
      marginTop: '1.5rem',
      backgroundColor: 'dodgerblue',
    };

    return <span style={style} />;
  };

  return (
    <div className="App">
      <Header />
      {/* For test */}
      {getTestEl()}
    </div>
  );
}

export default App;

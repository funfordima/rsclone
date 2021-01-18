import React from 'react';
import './App.css';
import CreateHeader from './Header/CreateHeader';

const App: React.FC = () => {
  return (
    <>
      <CreateHeader />
      <div className="App">
        <button type="button">Hello</button>
      </div>
    </>
  );
}
export default App;

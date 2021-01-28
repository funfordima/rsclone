import React from 'react';
import './App.css';
import CreaterClinic from './components/createrClinic';
import CreateHeader from './Header/CreateHeader';

const App: React.FC = () => {
  return (
    <>
      <CreateHeader />
      <div className="App">
        <button type="button">Hello</button>
      </div>
      <CreaterClinic />
    </>
  );
}
export default App;

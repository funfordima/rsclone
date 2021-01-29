import React from 'react';
import './App.css';
import CreateHeader from './Header/CreateHeader';
import CreaterClinic from './components/createrClinic'

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

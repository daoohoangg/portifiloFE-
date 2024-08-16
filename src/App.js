import logo from './logo.svg';
import './App.css';
import {Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Introduction from './components/Introductions.jsx';
import PersonalAbilities from './components/PersonalAbilities.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <PersonalAbilities/>
    </div>
  );
}

export default App;

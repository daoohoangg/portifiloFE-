import logo from './logo.svg';
import './App.css';
import {Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Introduction from './components/Introductions.jsx';
import PersonalAbilities from './components/PersonalAbilities.jsx';
import PersonalSkills from './components/PersonalSkills.jsx';
import Education from './components/Education.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <PersonalAbilities/>
      <PersonalSkills />
      <Education/>
    </div>
  );
}

export default App;

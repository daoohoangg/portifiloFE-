import logo from './logo.svg';
import './App.css';
import {Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Introduction from './components/Introductions.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
    </div>
  );
}

export default App;

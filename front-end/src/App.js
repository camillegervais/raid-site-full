import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import Inscription from './pages/Inscription';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/inscription' element={<Inscription/>}></Route>
        <Route path='' element={<Home/>}></Route>
        <Route path='/raid' element={<Inscription/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
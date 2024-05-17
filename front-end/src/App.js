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
import HelloWorld from './pages/HelloWorld';

function App() {

  return (
    /*
    <Router>
      <Routes>
        <Route path='/inscription' element={<Inscription/>}></Route>
        <Route path='' element={<Home/>}></Route>
        <Route path='/raid' element={<Inscription/>}></Route>
      </Routes>
    </Router>
    */
   <div className="App">
      <HelloWorld />
   </div>
    
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import Raideur from '../component/Raideur';
import './HelloWorld.css';

function HelloWorld() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [textRotation, setTextRotation] = useState(false);

  useEffect(() => {
    //with this we can access data from the api, we must get these datas in a hook
    //and not in the jsx directly
    axios.get('http://localhost:8000/api/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleButtonClick = () => { //update the selected userswhen research button clicked
    axios.get('http://localhost:8000/api/get-users/', {
        params: { //pass information through the get method
            name: document.getElementById('research').value
          }
          }).then(response => {
        setUsers(response.data.users); //get the information back from django
      }).catch(error => {
        console.log(error);
      });
  };

  const handleValidation = () => {
    setTextRotation(!textRotation);
    axios.post('http://localhost:8000/api/validate-user/', {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value
      }).then(response => {
        console.log(response.data);
        handleButtonClick();
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='main-container'>
      <h1>Bienvenue chez les Raideurs</h1>
      <div className='form-container' id="container">
        <h3>Rechercher votre raideur préféré:</h3>
        <input id="research" type="text" placeholder="Enter text" />
        <button onClick={handleButtonClick}>Research</button>
      </div>
      <div className='form-container' id='validate'>
        <motion.h3 animate={{x: textRotation ? 0 : 200, rotate: textRotation ? 0 : 180}}>Valider un utilisateur:</motion.h3>
        <input id='name' type="text" placeholder="Enter name" />
        <input id='password' type="password" placeholder="Enter password" />
        <button onClick={handleValidation}>Validate</button>
      </div>
      <h2>Voici les résultats de la recherche:</h2>
      {users.map(user => (
        <Raideur name={user['name']} password={user['password']} reload={handleButtonClick}/>
      ))}
    </div>
  );
}

export default HelloWorld;
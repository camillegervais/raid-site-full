import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Raideur from './component/Raideur';

function HelloWorld() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

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
    axios.post('http://localhost:8000/api/validate-user/', {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='main-container'>
      <h1>Bienvenue chez les Raideurs</h1>
      <input id="research" type="text" placeholder="Enter text" />
      <button onClick={handleButtonClick}>Research</button>
      <br/>
      <input id='name' type="text" placeholder="Enter name" />
      <input id='password' type="password" placeholder="Enter password" />
      <button onClick={handleValidation}>Validate</button>
      {users.map(user => (
        <Raideur name={user['name']} password={user['password']}/>
      ))}
    </div>
  );
}

export default HelloWorld;
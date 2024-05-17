import React, { useState, useEffect} from 'react';
import './Raideur.css';
import axios from 'axios';

function Raideur (props){

    const deleteRaideur = () => {
        props.reload()
        axios.post('http://localhost:8000/api/delete-user/', {
        name: props.name,
        password: props.password
      }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    };

    return (
        <div className='container'>
            <h1>Nom du Raideur: {props.name}</h1>
            <p>Son mot de passe: {props.password}</p>
            <button onClick={deleteRaideur}>Delete</button>
        </div>
    );
}

export default Raideur;
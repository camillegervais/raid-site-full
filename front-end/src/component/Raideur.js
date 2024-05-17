import React, { useState, useEffect} from 'react';
import './Raideur.css';

function Raideur (props){
    return (
        <div className='container'>
            <h1>Nom du Raideur: {props.name}</h1>
            <p>Son mot de passe: {props.password}</p>
        </div>
    );
}

export default Raideur;
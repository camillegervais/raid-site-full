import React from 'react';

function Element(props) {
    return (
        <div className='element'>
            <img src={props.src} alt="first" style={{ transform: `scale(${props.scale})` }}></img>
            <h3>{props.texte}</h3>
        </div>
    );
}

export default Element;
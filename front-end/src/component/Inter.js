import react from "react";
import { useState, useEffect } from "react";
import "./Inter.css";
import { motion } from "framer-motion";

function Inter(props){

    const background = document.getElementsByClassName("main");

    const handleClick = () => {
        props.setActivated(!props.activated);
        console.log('Button clicked');
    };

    useEffect(() => {
        // Code to run when the 'activated' value changes
        console.log("activated changed to: ", props.activated);
        if(props.activated){
            background[0].style.backgroundColor = "blueviolet";
        } else {
            background[0].style.backgroundColor = "black";
        }
    }, [props.activated]);

    return(
        <div className="main">
            <motion.div className="circle" onClick={handleClick} animate={{x: props.activated ? 0 : 50}}></motion.div>
        </div>
    );
}

export default Inter;
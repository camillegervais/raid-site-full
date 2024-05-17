import React from 'react';
import { motion } from 'framer-motion'
import { useState } from 'react';
import './Inscription.css';
import { useEffect } from 'react';
import logo_raid from '../resources/logo_raid_header.png';
import back from '../resources/back1.jpg';
import { Link } from 'react-router-dom';

import Element from '../component/Element';
import Inter from '../component/Inter';


function Inscription() {

    const [activatedInscription, setActivatedInscription] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const number_of_sections = 4;

    const first_stop = 1 * 100 / (number_of_sections * 3);
    const second_stop = 2 * 100 / (number_of_sections * 3);
    const third_stop = 3 * 100 / (number_of_sections * 3);

    const editions = ["Cévennes", "Hautes Pyrénées", "Gorges du Verdon", "Catalogne Nord", "Lac Léman", "Dauphiné Savoie", "Massif du Vercor", "Pays Basque"];

    const handleScroll = (activatedInscription) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentScrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(currentScrollPercentage);

        const editionElements = document.getElementsByClassName('edition-display');
        for (let i = 0; i < editionElements.length; i++) {
            const element = editionElements[i];
            const verticalCenterPosition = (element.getBoundingClientRect().top + element.getBoundingClientRect().bottom) / 2;
            if(verticalCenterPosition < window.innerHeight * 0.7 && verticalCenterPosition > window.innerHeight * 0.3){
                if(activatedInscription){
                    element.style.color = 'white';
                }else{
                    element.style.color = 'black';
                }
                element.style.transform = `scale(1.2)`;
                element.style.transition = `transform 0.5s`;
            }else{
                element.style.color = 'grey';
                element.style.transform = `scale(1)`;
                element.style.transition = `transform 0.5s`;
            }
        }};

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(activatedInscription){
            document.getElementById("NND").style.backgroundColor = "black";
        }else{
            document.getElementById("NND").style.backgroundColor = "white";
        }
    }, [activatedInscription]);

    // Use scrollPercentage in your component as needed

    return (
        <div>
            <div className='container-inscription'>
                <motion.img src={logo_raid} alt='' animate={{rotate: scrollPercentage < first_stop ? 0 : (scrollPercentage < second_stop ? (scrollPercentage - first_stop)/(second_stop - first_stop) * 360 : 360)}}></motion.img>
                <motion.h1 initial={{x: -1000}} animate={{x: scrollPercentage < first_stop ? - 1000 + scrollPercentage * (10 * 100 / first_stop) : (scrollPercentage < second_stop ? 0 : (scrollPercentage < third_stop ? (scrollPercentage - second_stop) / (third_stop - second_stop) * 1000 : 1000))}}
                            transition={{type: 'tween'}}>BIENVENUE</motion.h1>
                <motion.h1 animate={{x: scrollPercentage < (first_stop + 2) ? - 1000 + scrollPercentage * (10 * 100 / (first_stop + 2)) : (scrollPercentage < (second_stop + 2) ? 0 : (scrollPercentage < (third_stop + 2) ? (scrollPercentage - (second_stop + 2)) / (third_stop - second_stop) * 1000 : 1000))}}>CENTRALESUPELEC</motion.h1>
                <motion.h1 animate={{rotate: 90, x: -100, y: scrollPercentage < (first_stop + 1) ? - 1000 + scrollPercentage * (10 * 100 / (first_stop + 1)) : (scrollPercentage < (second_stop + 1) ? 0 : (scrollPercentage < (third_stop + 1) ? (scrollPercentage - (second_stop + 1)) / (third_stop - second_stop) * 1000 : 1000))}}
                style={{transformOrigin: 'top-left'}}>AU RAID</motion.h1>
            </div>
            <motion.div id="NND" className='container-inscription button-cont' initial={{opacity: 0}} animate={{ opacity: scrollPercentage < 100 / number_of_sections ? 0 : 1}} style={{ backgroundColor: activatedInscription ? 'black' : 'white', color: activatedInscription ? 'white' : 'black'}}>
                <h2>Le RAID CentraleSupélec est un événement sportif sur 5 jours organisé par une association étudiante</h2>
                <p>L'édition 2024 a eu lieu en Ardèche et fut un réel succès, après 250km de VTT et de Trail le tout avec 6000m de D+, les concurrents ont pu rallier l'arrivée à Vallon Pont d'Arc.</p>
                <Inter activated={activatedInscription} setActivated={setActivatedInscription}></Inter>
            </motion.div>
            <motion.div className="container-inscription" initial={{opacity: 0}} animate={{opacity: scrollPercentage < (2 * 100) / number_of_sections ? 0 : 1}} >
                <img src={back} alt='' className='back-image'></img>
                <div className='centered'>
                    <h2>Revenez sur ce bel événement avec les récaps Hyris et Pics</h2>
                    <div className='asso-logo'>
                        <Element texte="Hyris" src={logo_raid} scale={0.7}></Element>
                        <Element texte="Pics" src={logo_raid} scale={0.7}></Element>
                    </div>
                </div>
            </motion.div>
            <motion.div className="container-inscription prec-edition" initial={{opacity: 0}} animate={{opacity: scrollPercentage < (3 * 100) / number_of_sections ? 0 : 1}} style={{backgroundColor: activatedInscription ? 'white' : 'black', color: activatedInscription ? 'black' : 'white'}}>
                <h2>Les éditions précédentes:</h2>
                <Inter activated={activatedInscription} setActivated={setActivatedInscription}></Inter>
                <motion.div className='edition-container' animate={{y : scrollPercentage < (3 * 100) / number_of_sections ? 0 : -(scrollPercentage - (3 * 100) / number_of_sections) / first_stop * 1000}}>
                    {editions.map((edition, index) => {
                        return <motion.h1 key={index} id={index} className="edition-display">{edition}</motion.h1>
                    })}
                </motion.div>
            </motion.div>
            <div className='spacer-inscription'>
                <h1>SPACER</h1>
            </div>
            <Link className="main-logo-inscription" to='/'><img src={logo_raid} alt=''></img></Link>
        </div>
        
    );

}

export default Inscription;
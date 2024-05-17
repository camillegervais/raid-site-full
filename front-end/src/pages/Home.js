import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './Home.css';
import logo_raid from '../resources/logo_raid_header.png';
import back1 from '../resources/back1.jpg';
import back2 from '../resources/back2.jpg';

import Header from '../component/Header';
import Element from '../component/Element';
import Footer from '../component/Footer';
import Inter from '../component/Inter';

function Home() {

    //state make us able to keep track of the scroll percentage
    const [percentage, setScrollPercent] = useState(0);
    const [activatedHome, setActivatedHome] = useState(false);
    //useEffect is a hook that allows us to run some code when scroll is changed
    useEffect(() => {
        //handleScroll is a function that changes the background color of the body depending on the scroll percentage
        const handleScroll = () => {
          const body = document.body;
          const scroll = window.scrollY;
          const height = body.offsetHeight - window.innerHeight;
          const percentage = (scroll / height) * 100;

          body.style.backgroundColor = 'white';
          if (percentage < 50) {
            body.style.backgroundImage = `url(${back1})`;
          } else {
            body.style.backgroundImage = `url(${back2})`;
          }

          setScrollPercent(percentage);
        };
        
        // Add the event listener when the component mounts, run handleScroll whan scroll change
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='container'>
            <Header />
            <div className='header-spacer'></div>
            <div className='first-part'>
                <img src={logo_raid} className='main-logo' alt=''></img>
                <h1>RAID CentraleSupélec</h1>
                <div className='button-container'>
                    <Link className="first-button" to='RAID' smooth={true}>RAID</Link>
                    <Link className="first-button" to='NND' smooth={true}>Night N'Day</Link>
                </div>
            </div>
            <div className='spacer'></div>
            <div id="RAID" className='second-part'>
                <img scr={logo_raid} alt=''></img>
                <h1>Cette année, la 26ème édition vous emmène dans les Monts d'Ardèche et le Nord des Cevennes !!</h1>
                <div className='elem-container'>
                    <Element texte="Texte 1" src={logo_raid}></Element>
                    <Element texte="Texte 2" src={logo_raid}></Element>
                    <Element texte="Texte 3" src={logo_raid}></Element>
                    <Element texte="Texte 4" src={logo_raid}></Element>
                </div>
            </div>
            <div className='spacer'></div>
            <div id="NND" className='third-part'>
                <div className='black'>
                    <Element texte="Vendredi 9 et samedi 10 février 2024" src={logo_raid}></Element>
                    <Element texte="19km de trail et de 34km à 52km de VTT" src={logo_raid}></Element>
                </div>
                <div className='white'>
                    <Element texte="Villages festifs et boucles à la carte" src={logo_raid}></Element>
                    <Element texte="Equipes de 2 personnes" src={logo_raid}></Element>
                </div>
            </div>
            <Inter activated={activatedHome} setActivated={setActivatedHome}></Inter>
            <Footer/>
        </div>
    );
}

export default Home;
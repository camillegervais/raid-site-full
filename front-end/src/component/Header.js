import { Link } from 'react-router-dom';
import logo_header from '../resources/logo_raid_header.png';
import "./Header.css";
import { createRef } from 'react';
import { useEffect } from 'react';

function Header(props) {
    let button1 = createRef();
    let menu1 = createRef();
    let menu2 = createRef();
    let menu3 = createRef();
    let drop1 = createRef();

    const nameMenu = [{'name': 'RAID', 'subelem': ['Menu 1', 'Menu 2', 'Menu 3'], 'ref': [createRef(), createRef(), createRef()]}];

    const drop = [createRef()];

    let button = [createRef()];

    const handleButton1Hover = () => {
        // Code to handle button1 hover

        nameMenu.forEach((button, index) => {
            button['ref'].forEach((menu, index2) => {
                setTimeout(() => {
                    menu.current.style.display = 'block';
                
                }, 200*(index2 + 1));
            })
            drop[index].current.style.display = 'block';
        });
        
    };

    const hideMenu = () => {
        const menus = [menu1, menu2, menu3];

        menus.forEach((menu, index) => {
            menu.current.style.display = 'none';
        });
        drop1.current.style.display = 'none';
    }

    // Add event listener for button1 hover
    useEffect(() => {
        button[1].current.addEventListener('mouseenter', handleButton1Hover);
        
    });

    return (
        <div className='top'>
            <Link className='logo-link' to='/'><img src={logo_header} className='logo' alt="logo" /></Link>
            <div className='right-list'>
                {nameMenu.map((info, index) => (
                    <Link ref={button[index]} className="header-button" to="/raid">{info['name']}
                        <div ref={drop[index]} className="dropdown-menu">
                            {info['subelem'].map((elem, index) => (
                                <a ref={info['ref'][index]} className="menu-elem" href="https://www.google.com">{elem}</a>
                            ))}
                        </div>
                    </Link>
                ))};
                <Link ref={button1} className="header-button" to="/raid">RAID
                    <div ref={drop1} className="dropdown-menu">
                        <a ref={menu1} className="menu-elem" href="https://www.google.com">Menu Item 1</a>
                        <a ref={menu2} className="menu-elem" href="https://www.google.com">Menu Item 2</a>
                        <a ref={menu3} className="menu-elem" href="https://www.google.com">Menu Item 3</a>
                    </div>
                </Link>
                <Link className="header-button" to="/nnd">Night N'Day
                    <div className="dropdown-menu">
                        <a className="menu-elem" href="https://www.google.com">Menu Item 1 NND</a>
                        <a className="menu-elem" href="https://www.google.com">Menu Item 2 NND</a>
                        <a className="menu-elem" href="https://www.google.com">Menu Item 3 NND</a>
                    </div>
                </Link>
                <Link className='header-button' to="/inscription">Inscription
                    <div className="dropdown-menu">
                        <a className="menu-elem" href="https://www.google.com">Menu Item 1</a>
                        <a className="menu-elem" href="https://www.google.com">Menu Item 2</a>
                        <a className="menu-elem" href="https://www.google.com">Menu Item 3</a>
                    </div>
                </Link>
                <Link className='header-button' to="/galerie">Galerie</Link>
                <Link className='header-button' to="/partenaires">Partenaires</Link>
                <Link className='header-button' to="/engagements">Nos Engagements</Link>
            </div>
        </div>
    );
}

export default Header;
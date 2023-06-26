import '../App.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
        <div id='menu-section' >
        <FontAwesomeIcon id='menu-button' onClick={toggleMenu} icon={ faBars }  />
        {menuVisible && (
          <ul className='menu'>
             <li><a href='#intro'>Introduction</a></li>
             <li><a href='#projects'>My Work</a></li>
             <li><a href='#contact-section'>Contact Me</a></li>
          </ul>
        )}
      </div>
    );
  };

export default Menu;

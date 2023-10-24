import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/general/Portfolio Logo.png';

const Navbar = () => {
    
    const userPreferredTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(userPreferredTheme || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); 
    };

    useEffect(() => {
        if(theme==='light')
            document.documentElement.className = "light_theme";
        else
          document.documentElement.className = "dark_theme";
    }, [theme]);


    const [menuDropdown, setMenuDropdown] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleDropdown = () => {
        setMenuDropdown(!menuDropdown);
    };

    const handleOutsideClick = (event) => {
        if (menuDropdown && !event.target.closest('.navbar_dropdown_container')) {
            setMenuDropdown(false);
        }
    };

    useEffect(() => {
        if (menuDropdown) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [menuDropdown]);

    const handleNavigation = (path) => {
        navigate(path);
        setMenuDropdown(false);
    };

    const page_Links = ['Home', 'Projects', 'Resume', 'Contact'];

    return (
        <div className='navbar'>
            <img src={Logo} alt="A" className="navbar_logo" onClick={() => handleNavigation('/Home')} />
            <div className="navbar_links_container">
                {page_Links.map((link) => (
                    <span className="link_box">
                        <span
                            key={link}
                            className={`link ${location.pathname === '/' + link ? 'active' : ''}`}
                            onClick={() => handleNavigation(`/${link}`)}
                        >
                            {link}
                        </span>
                    </span>
                ))}
            </div>
            <div className="navbar_dropdown_container">
                <i className='fa fa-bars menuIcon' onClick={toggleDropdown} />
                {
                    menuDropdown ?
                        <div className="navbar_links_dropdown_container">
                            {page_Links.map((link) => (
                                <span
                                    key={link}
                                    className={`link ${location.pathname === '/' + link ? 'active' : ''}`}
                                    onClick={() => handleNavigation(`/${link}`)}
                                >
                                    {link}
                                </span>
                            ))}
                        </div>
                        : null
                }
            </div>
            <div className="theme" onClick={toggleTheme}>
                {theme === 'dark'? <i className='fa fa-moon-o'></i> : <i className='fa fa-sun-o'></i>}
            </div>
        </div>
    );
};

export default Navbar;

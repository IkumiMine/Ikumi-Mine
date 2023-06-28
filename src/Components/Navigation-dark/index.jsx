import { useState } from 'react';
import './Navigation-dark.css';

const NavigationDark = ({ handleAnimationClose, scrollToAbout }) => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNabvar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <nav className={`navigation-dark-container ${showNavbar && 'active-dark'}`}>
            <div className='page-wrapper'>
                <div 
                        className={`menu-dark-icon ${showNavbar && 'active-dark'}`}
                        onClick={handleShowNabvar}
                    >
                    {showNavbar
                    ? <ion-icon name="close-outline"></ion-icon>
                    : <ion-icon name="reorder-three-outline"></ion-icon> 
                    }
                </div>
                <ul className={`flex nav-dark-list ${showNavbar && 'active-dark'}`}>
                    <li>
                        <ul className={`flex nav-dark-left ${showNavbar && 'active-dark'}`}>
                            <li><a href="#about" onClick={() => {
                                setShowNavbar(!showNavbar); 
                                handleAnimationClose(); 
                                scrollToAbout(); }
                                }>About</a></li>
                            <li><a href="#projects" onClick={() => {
                                setShowNavbar(!showNavbar); 
                                handleAnimationClose();}}
                                >Projects</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className={`flex nav-dark-right ${showNavbar && 'active-dark'}`}>
                            <li className="nav-dark-icon"><a href="https://www.linkedin.com/in/ikumi-mine/"><ion-icon name="logo-linkedin" id="logo-linkedin"></ion-icon></a></li>
                            <li className="nav-dark-icon"><a href="https://github.com/IkumiMine"><ion-icon name="logo-github"></ion-icon></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationDark;
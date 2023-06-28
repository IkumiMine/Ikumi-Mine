import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ scrollToAbout, scrollToProjects }) => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNabvar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <nav className={`navigation-container ${showNavbar && 'active'}`} id="nav">
            <div className='page-wrapper'>
                <div 
                    className="menu-icon"
                    onClick={handleShowNabvar}
                >
                    {showNavbar
                    ? <ion-icon name="close-outline"></ion-icon>
                    : <ion-icon name="reorder-three-outline"></ion-icon> 
                    }
                </div>
                <ul className={`flex nav-list ${showNavbar && 'active'}`}>
                    <li>
                        <ul className={`flex nav-left ${showNavbar && 'active'}`}>
                            <li><a onClick={() => {setShowNavbar(!showNavbar); scrollToAbout();}}>About</a></li>
                            <li><a onClick={() => {setShowNavbar(!showNavbar); scrollToProjects();}}>Projects</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className={`flex nav-right ${showNavbar && 'active'}`}>
                            <li className="nav-icon"><a href="https://www.linkedin.com/in/ikumi-mine/"><ion-icon name="logo-linkedin" id="logo-linkedin"></ion-icon></a></li>
                            <li className="nav-icon"><a href="https://github.com/IkumiMine"><ion-icon name="logo-github"></ion-icon></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
import { useState } from 'react';
import ProjectsFull from '../../Pages/Projects-full';

import './Project.css';

const Project = ({ detail, scrollToProjects, scrollToAbout, currentIndex, carouselCountDisplay, screenWidth }) => {
    const { number, name, image, id } = detail;

    //set useState
    const [modal, setModal] = useState(false);
    const [animation, setAnimation] = useState('open');
    const navEl = document.getElementById("nav");
    const proEl = document.getElementById("switch-overflow");

    /* Reference: https://erikmartinjordan.com/react-on-disappear-animation */
    //function to open modal
    const handleAnimationOpen = () => {
        setAnimation('open');
        setModal(true);

        //adjust navigation and body styles
        setTimeout(() => {
            navEl.classList.add("go-back");
            proEl.classList.add("switch-overflow");
            document.body.classList.add("hide-elements");
        }, 520)
    }

    //function to close modal
    const handleAnimationClose = () => {
        setAnimation('close');

        //adjust navigation and body styles
        setTimeout(()=>{
            navEl.classList.remove("go-back");
            proEl.classList.remove("switch-overflow");
            document.body.classList.remove("hide-elements");
        },520)

        setTimeout(() => {
            setModal(false);
        },1000)
    }

    return (
        <>
            <div 
                className={`project-container ${carouselCountDisplay}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                <h2>{number}</h2>
                <div 
                    className="project-image-small"
                    onClick={() => { scrollToProjects(); handleAnimationOpen(); }}
                >
                    <img  
                    id={id} 
                    src={image} 
                    alt={`screenshot of ${name}`} 
                    />
                </div>
                <h2>{name}</h2>
            </div>
            {modal && <ProjectsFull animation={animation} 
                                    detail={detail} 
                                    handleAnimationClose={handleAnimationClose} 
                                    scrollToAbout={scrollToAbout}
                                    screenWidth={screenWidth}
                        />}
        </>
    )
}

export default Project;
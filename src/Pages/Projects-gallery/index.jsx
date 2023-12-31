import { useState, useEffect } from 'react';
import Project from '../../Components/Project';
import './Project-gallery.css';

const ProjectsGellery = ({ details, scrollToProjects, scrollToAbout, screenWidth }) => {

    /*Reference: https://dev.to/rakumairu/simple-react-carousel-24m0 */
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(details.length);
    const [touchPosition, setTouchPosition] = useState(null);
    let show, carouselCountDisplay;

    //Adjust carousel count by screenwidth
    //change show number depends on screen width
    if(screenWidth <= 2000 && screenWidth > 768) {
        show = 4;
        carouselCountDisplay = `show-${show}`;
    } else if(screenWidth <= 768 && screenWidth > 500) {
        show = 2;
        carouselCountDisplay = `show-${show}`;
    } else if(screenWidth <= 500 && screenWidth > 0) {
        show = 1;
        carouselCountDisplay = `show-${show}`;
    } else {
        show = 4;
        carouselCountDisplay = `show-${show}`;
    }

    //set the length to match current details
    useEffect(() => {
        setLength(details.length);
    },[details]);

    const next = () => {
        console.log("next");
        if(currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
       if(currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
       }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if(touchDown === null) {
            return 
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if(diff > 5) {
            next();
        }

        if(diff < -5) {
            prev();
        }

        setTouchPosition(null);
    }

    return (
        <div className='container gallery-container' id="projects">
            <div className="next-prev-arrows flex">
                <div
                    onClick={prev}
                    className={`prev-arrow ${currentIndex > 0 ? "" : "switch-opacity"}`} 
                >
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div
                    onClick={next}
                    className={`next-arrow ${currentIndex < (length - show) ? "" : "switch-opacity"}`}
                >
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
            <div 
                className='flex projects-container' 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {details.map((detail, index) => (
                    <Project 
                        key={index} 
                        detail={detail} 
                        scrollToProjects={scrollToProjects} 
                        scrollToAbout={scrollToAbout} 
                        currentIndex={currentIndex}
                        show={show}
                        carouselCountDisplay={carouselCountDisplay}
                        screenWidth={screenWidth}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsGellery;
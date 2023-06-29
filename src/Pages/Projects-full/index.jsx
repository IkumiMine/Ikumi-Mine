import NavigationDark from '../../Components/Navigation-dark';
import './Projects-full.css';

const ProjectsFull = ({ handleAnimationClose, detail, animation, scrollToAbout, screenWidth }) => {
    const { number, name, description, tech, image, webUrl, gitUrl, year } = detail;
    const styles = {
        bgImage: {
            backgroundImage: screenWidth <= 460 ? "unset" : `url("${image}")`,
            backgroundRepeat: screenWidth <= 460 ? "unset" : "no-repeat",
            backgroundSize: screenWidth <= 460 ? "unset" : "cover",
            backgroundPositionX: screenWidth <= 460 ? "unset" : "center"
        }
    }
    
    return (
        <div 
            className={`container projects-full-container ${animation}`}
            style={styles.bgImage}
        >
            <NavigationDark handleAnimationClose={handleAnimationClose} scrollToAbout={scrollToAbout} />
            <div className='description-container'>
                <div className="page-wrapper flex description-inside-container" >
                    <div className="description-left">
                        <h2><span className="project-number">{number}</span>{`${name} (${year})`}</h2>
                        <p>{description}</p>
                        <p className="project-tech">{tech}</p>
                        <div className="project-links">
                            <a className="website-link" href={webUrl}>Website</a>
                            <a className="github-link" href={gitUrl}>GitHub</a>
                        </div>
                    </div>
                    <div className="description-right">
                        <a onClick={handleAnimationClose} className="button-black">
                            <span className="back-text">Back</span>
                            <ion-icon id="arrow-up" name="arrow-up-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
        )
}

export default ProjectsFull;
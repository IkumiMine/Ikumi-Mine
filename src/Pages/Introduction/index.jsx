import './Introduction.css';

const Introduction = ({ scrollToProjects }) => {

    return (
        <div className='container intro-container' id="about">
            <div className='page-wrapper'>
                <div className="intro-outside-box">
                    <div className='intro-inside-box'>
                        <h1 id="title-name">Ikumi Mine</h1>
                        <h2 id="sub-title">A web developer</h2>
                        <p id="summary">I build fully responsive websites with HTML, CSS, JavaScript, React, PHP, MySQL.</p>
                    </div>
                </div>
                <a className='go-down' onClick={scrollToProjects}>
                    <p>Projects</p>
                    <ion-icon name="arrow-down-outline" id="arrow-down"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default Introduction;
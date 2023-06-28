import './Background.css';

const Background = () => {
    return (
        <div className='background-container' id="bg">
            <div className='background-circle circle-blue blue-one'></div>
            <div className='background-circle circle-orange orange-one'></div>
            <div className='background-circle circle-pink'></div>
            <div className='background-circle circle-blue blue-two'></div>
            <div className='background-circle circle-orange orange-two'></div>
        </div>
    )
}

export default Background;
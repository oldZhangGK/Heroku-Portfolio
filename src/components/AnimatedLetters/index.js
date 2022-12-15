// every letter needs individually pop up once the page is loaded
import './index.scss';

// letterClass: the class that we want to apply to our characters
// strArray: array of the characters itself
// idx: starting point which will set teh delay of our letters and the animation
// returns a <span></span>
const AnimatedLetters = ({letterClass, strArray, idx}) =>{
    return (
        <span>
            {
                strArray.map((char,i) => (
                    <span key={char+i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetters;
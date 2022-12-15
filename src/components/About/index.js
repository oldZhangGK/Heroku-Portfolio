import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeout;
      
        timeout = setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 3000);
        
        //You should always clear the timeout or any interval on component unmount.
        return () => {
          clearTimeout(timeout);
        };
      }, []);
    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a hardworking and reliable front-end developer focused on going above and beyond to support the team and serve customers</p>
                <p>I'm looking for a role in a fast-growing company with the opportunity to work with top-notch technologies on challenging projects </p>
                <p>As always, I'm eager to improve my programming skills and never get tired of being curious about new technologies</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;
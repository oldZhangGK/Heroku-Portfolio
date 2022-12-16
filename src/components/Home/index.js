import { useEffect,useState } from "react";
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss';
import Loader from "react-loaders";


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['h','u','m','i','n','g']
    const jobArray = ['w','e','b',' ','d','e','v','l','o','p','e','r','.']

    useEffect(() => {
        let timeout;
      
        timeout = setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
        
        //You should always clear the timeout or any interval on component unmount.
        return () => {
          clearTimeout(timeout);
        };
      }, []);

    // only first letter has text animated class
    // every next class has a delay class as well
    // because we dont want them to appear at the same time
    // so we adding the second letter a slight delay to animation
    // as so the letters will appear in a sequence
    // NOTICE: _12 means 1.2s delays
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={21}
                        />
                    </h1>
                    <h2>Frontend Developer / Backend Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <div>
                <img src={LogoTitle} className="home-logo" alt="my-logo"></img>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home;

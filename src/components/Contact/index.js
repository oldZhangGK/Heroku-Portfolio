import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

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

    
    // preventDefault() will stop default submitting method.
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_77fz90u',
            'template_7oqkx8k',
            refForm.current,
            'kZfwRwEnn58J5MDhq'
        ).then(
            () => {
                alert("Message successfully sent!")
                window.location.reload(false)
            },
            () => {
                alert("Oops, failed to send the messages, please try again.")
            }
        )
    }
    // note that idx=15 means that for the index start property lets put 15 which means
    // 1.5s delay of animation
    return (
        <>
            <div className="container contact-page">
                <div className = "text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15} 
                        />
                    </h1>
                    <p> 
                        I'm more than excited to answer any question or request you may give, please contact me using the below form.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li >
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                
                <div className='info-map'>
                    Shuming Zhang,
                    <br/>
                    Canada,
                    <br/>
                    Carnegie Dr 
                    <br/>
                    Mississauga, ON
                    <br/>
                    <span>chriszhangshu@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[43.583767626853714, -79.55930964153647]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.583767626853714, -79.55930964153647]}>
                            <Popup> Hope you prefer tea, as my coffee machine is not working :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            
            <Loader type="pacman"/>
        </>
    )
}

export default Contact;
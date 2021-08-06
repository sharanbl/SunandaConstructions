import { Component } from 'react';
import {Container, Col} from 'react-bootstrap';

import mail from './gmail.png';
import insta from './instagram.png';
import phone from './smartphone.png';
import './contact.css';

class Contact extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(

            <div>
                <div>
                    <h1>Contact Us</h1>
                </div>
                <br />
                <div id="imgdiv">
                <a href="mailto:sharanlokeshwar@gmail.com"><img id="i1" src={mail} alt="Mail"></img></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="https://www.instagram.com/sunandaconstructions/" target="_blank"><img id="i1" src={insta} alt="Instagram"></img></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <a href="tel:+919740146869"><img id="i1"  src={phone} alt="Phone No"></img></a>
                </div>
                <br />
            </div>
            
        );
    }

}

export default Contact;
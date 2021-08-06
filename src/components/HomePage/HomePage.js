import react, { Component } from 'react';
import {Container} from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';

import Header from '../Header/Header';
import Images from '../Images/Images';
import Licensed from '../Licensed/Licensed';
import Reviews from '../Reviews/Review';
import './HomePage.css';

class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <>

                {/* <div className="welcome">
                    <h1>Welcome to Sunanda Constructions</h1>
                    <h3>A Solid Ground for your Project</h3>
                </div>
                <br /> */}
                <Images />
       
                
                <AboutUs />
                

                <Licensed />
                
                <Reviews />
                <br /> <br />
                <Contact />
            </>
        );
    }

}

export default HomePage;
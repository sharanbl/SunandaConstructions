import { Component } from 'react';

import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';


import Images from '../Images/Images';
import Licensed from '../Licensed/Licensed';
import Reviews from '../Reviews/Review';
import PopUpModal from '../PopUpModal/PopUpModal';
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

                <PopUpModal />

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
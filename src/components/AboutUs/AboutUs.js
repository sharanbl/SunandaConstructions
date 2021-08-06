import { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import aboutus from "./aboutus.jpeg"

class AboutUs extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
                <>
                    <Row>
                        <Col sm={6}>
                            <img style={{width: '100%'}} src={aboutus} alt="#"/>
                        </Col>
                        
                        <Col style={{marginLeft: '8%', textAlign:'justify'}} sm={4}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h1>About Us</h1>
                            <h3>Precision. Punctuality. Professionalism.</h3>
                            <p>SUNANDA CONSTRUCTIONS serves as a leading Construction Company in Mysuru and Bengaluru.
                                We are a team of fully-certified professionals who tackle everything from complex large
                                projects to smaller scale jobs. Fueled by our commitment to excellence, we go an extra mile
                                to make sure clients are completely satisfied with our work.
                                Call us today to schedule a consultation.
                            </p>
                        </Col>
                    </Row>
                </>
            
        );
    }

}

export default AboutUs;
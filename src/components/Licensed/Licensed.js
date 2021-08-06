import { Component } from 'react';
import {Col} from 'react-bootstrap';
import l1 from "./l1.jpeg"

class Licensed extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
             
                <div className="row">

                    <Col style={{marginLeft: '8%',textAlign:'justify'}} sm={4}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Licensed professionals</h1>
                    
                        <p>Ever since opening our doors back in 2000, we have been committed to our clients' 
                            unique project needs and achieving their atmost satisfaction with our work.
                            As a leader in the industry we use a comprehensive approach in order ot provide a wide range of services
                            for the projects we are involved with.
                        </p>
                       

                        <p>
                            From dealing with bureaucratic requirements to coordinating with subcontractors, SUNANDA CONSTRUCTIONS
                            guarantees precise, timely and efficient work. Get in touch to bring your vision to life today.
                        </p>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={6}>
                        <img style={{width: '100%'}} src={l1} alt="#"/>
                    </Col>
                </div>
            
        );
    }

}

export default Licensed;
import { Component } from 'react';

import './Images.css';
import management from './Management.jpg';
import planning from './Planning.jpg';
import maintainance from './Maintainence.jpg'

class Images extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
                <div className="images"> 
                    <div className="welcome">
                        <h1>Welcome to Sunanda Constructions</h1>
                        <h3>A Solid Ground for your Project</h3>
                    </div>
                    <br /> <br />
                    <img style={{height:'70vh'}} src={management} alt="#"></img>
                    
                    <img style={{height:'70vh'}} src={planning} alt="#"></img>
                
                    <img style={{height:'70vh'}} src={maintainance} alt="#"></img>
                  
                </div>   
               
        );
    }

}

export default Images;







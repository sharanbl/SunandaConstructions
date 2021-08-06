import { Component } from 'react';

import './Images.css';

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
                    <img style={{height:'70vh'}} src="../../Management.jpg" alt="#"></img>
                    
                    <img style={{height:'70vh'}} src="../../Planning.jpg" alt="#"></img>
                
                    <img style={{height:'70vh'}} src="../../Maintainence.jpg" alt="#"></img>
                  
                </div>   
               
        );
    }

}

export default Images;







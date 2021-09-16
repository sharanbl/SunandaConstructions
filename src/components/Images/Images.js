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

                    <img style={{height:'50vh'}} src={management} alt="#"></img>
                    
                    <img style={{height:'50vh'}} src={planning} alt="#"></img>
                
                    <img style={{height:'50vh'}} src={maintainance} alt="#"></img>
                  
                </div>   
               
        );
    }

}

export default Images;







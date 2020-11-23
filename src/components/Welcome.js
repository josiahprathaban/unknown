import React, {Component} from 'react';
import './Welcome.css';
import logo from "../logo.svg";

class Welcome extends Component{
    render() {
        return(
            <div>
                <img className={'logo'} src={logo}/>
            </div>
        );
    }
}
export default Welcome;

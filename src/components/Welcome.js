import React, {Component} from 'react';
import './Welcome.css';
import logo from "../logo.svg";

class Welcome extends Component{
    i=0;
    constructor(props) {
        super(props);
        this.state = {keyWord : "believable"}
    }

    componentDidMount() {
        this.word = setInterval(
            ()=> this.wordChange(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.word);
    }

    wordChange(){
        if(this.i==0) {
            this.setState({keyWord: "breakable"});
            this.i = 1;
        }else if(this.i==1) {
            this.setState({keyWord: "thinkable"});
            this.i = 2;
        }else if(this.i==2) {
            this.setState({keyWord: "believable"});
            this.i = 0;
        }
    }

    render() {
        return(
            <div className={'welcome'}>
                <div className={'logo'}>
                    <img src={logo}/>
                </div>
                <div className={'moto'}>
                    <div className={'left'}>We are UN</div>
                    <div className={'right'}>{this.state.keyWord}</div>
                </div>
            </div>
        );
    }
}
export default Welcome;

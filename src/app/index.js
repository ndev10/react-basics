import React from "react";
import {render} from 'react-dom';

import {Home} from "./components/Home";
import {Header} from "./components/Header"

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            homeLink:"Home1"
        }
    }
    changeHomeLink(newName) {
       this.setState ({
           homeLink:newName
       });

        
    }
    onGreet() {
        console.log("Hello")
    }
    render() {
        let user = {
            name:"John",
            hobbies: ["Reading","Playing"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                      <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"React"} 
                              age={26} 
                              user={user} 
                              greet={this.onGreet} 
                              changeHomeLink={this.changeHomeLink.bind(this)} 
                              intialLinkValue={this.state.homeLink}>
                            <p> This is inner part to be dislay </p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}


render(<App/>,window.document.getElementById("appId"))
import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor (props) {
        super();
        this.state = {
            age : props.age,
            status : 0,
            homeLink:props.intialLinkValue
        }
        console.log("Constructer  called");
    }

    componentWillMount() {
        console.log("Component will mount");
    }
    componentDidMount() {
        console.log("Componenet did Mount");
    }
    componentWillReceiveProps(nextProps) {
        console.log("Componenet Will Recieve Props " , nextProps);
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log("Componenet Should upldate",nextProps,nextState);
        return true
    }
    componentWillUpdate(nextProps,nextState) {
        console.log("Componenet Will upldate",nextProps,nextState);
    }
    componentDidUpdate(prevProps,prevState) {
        console.log("Componenet Did upldate",prevProps,prevState);
    }
    componentWillUnmount() {
        console.log("Component will unmount.")
    }
    onChangeHomeLink() {
        this.props.changeHomeLink(this.state.homeLink);
    }

    onChangeLinkTextBox(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    makeOlder () {
        // can not assing read only property error
       // this.props.age = this.props.age + 3;
       
      // this.age = this.age + 3; // can not update the this age value in view. 
       this.setState ({
           age: this.state.age + 3
       });
     
       console.log("Age is " + this.state.age);
    }
    render() {
        let content = <p>Var In a new Component!</p>;
        return(
             <div>
               <h3>{this.props.name}</h3>
               <div> Age is {this.state.age}</div>
               <div> User Object : name is {this.props.user.name}</div>
               <div>
                   <h4> Hobbies </h4>
                   <ul> 
                       {this.props.user.hobbies.map((h,i) => <li key={i}>{h}</li>)}
                       
                   </ul>
                   <div>
                       {this.props.children}
                    </div>
                    <button onClick= {this.props.greet} 
                            className="btn btn-success" > Greet Me !! </button>
                    <hr/>
                    {/* two ways of calling functions throug button */ }
                   {/* <button onClick= {this.makeOlder.bind(this)} 
                            className="btn btn-success" > Make me Older</button>*/}
                    <button onClick= {() => this.makeOlder()} 
                            className="btn btn-success" > Make me Older</button>
                    <hr/>
                    <input type="text" value={this.state.homeLink} 
                           onChange={this.onChangeLinkTextBox.bind(this)}/>
                    <button onClick= {this.onChangeHomeLink.bind(this)}
                            className="btn btn-success" >Change Link</button>
                </div>
               {content}
            </div>
        );
    }
}

// Depricated way
/*Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object
}*/

Home.propTypes = {
    name: PropTypes.string,
    age:  PropTypes.number,
    user: PropTypes.object,
    greet: PropTypes.func,
    changeHomeLink: PropTypes.func,
    intialLinkValue: PropTypes.string
}
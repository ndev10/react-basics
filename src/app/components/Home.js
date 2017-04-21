import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor (props) {
        super();
        this.state = {
            age : props.age,
            status : 0
        }
        
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
    greet: PropTypes.func
}
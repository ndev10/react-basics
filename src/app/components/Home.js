import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        let content = <p>Var In a new Component!</p>;
        return(
             <div>
               <h3>{this.props.name}</h3>
               <div> Age is {this.props.age}</div>
               <div> User Object : name is {this.props.user.name}</div>
               <div>
                   <h4> Hobbies </h4>
                   <ul> 
                       {this.props.user.hobbies.map((h,i) => <li key={i}>{h}</li>)}
                       
                   </ul>
                   <div>
                       {this.props.children}
                    </div>
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
    user: PropTypes.object
}
import React from "react";



class User extends React.Component {
    constructor(props) {//the constructor is also used for creating state variabales in class based components using this.state which is an object.
        super(props);
        this.state = {//this state variable here is a big whole object that contains all the variables inside it without creating another state.
            count: 0,
            count2: 1,

        };
    }
    render() {
        const { name, location } = this.props;

        return (
            <div className="user-card">
                <h2>Count : {this.state.count}</h2>
                <h2>Count2: {this.state.count2}</h2>
                <button onClick={() => {
                    this.setState({//class based component have setState function that updates state variables in form of an object.
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,//we dont have to recreate this.setState for each state variable we can use a single setState.
                    })
                }}>Cliked Count</button>
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact Info: +918674395735</h3>
            </div>
        )
    }
}

export default User;
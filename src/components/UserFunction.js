import { useState } from "react";

const UserFunction = (props) => {

    const [count] = useState(0);
    const [count2] = useState(2);//to create other state variabel in functional component we use this syntax .

    return (
        <div className="user-card">
            <h2>Counter: {count}</h2>
            <h2>Counter2: {count2}</h2>
            <h2>Name :{props.name} </h2>
            <h3> Location:{props.location}</h3>
        </div>
    )
}

export default UserFunction;
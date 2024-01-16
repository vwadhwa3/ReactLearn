import React from "react";

class UserLocationClass  extends React.Component{
    constructor(props){
        super(props)
        console.log("UserLocationClass constructor called")
    }
    componentDidMount(){
        console.log("UserLocationClass componentDidMount called")
    }
    render(){
        console.log("UserLocationClass render called")
        const {Location} = this.props
        return(
            <div>
                Location: {Location}
            </div>
        )
    }
}

export default UserLocationClass

// Parent constructor 
// Parent render
// Child constructor 
// Child render  
// UserLocationClass constructor called
// UserLocationClass render called
// UserChildClass constructor
// UserChildClass render
// Child constructor 
// Child render  
// UserLocationClass constructor called
// UserLocationClass render called
// UserChildClass constructor
// UserChildClass render
//--------------------------
// UserLocationClass componentDidMount called
// UserChildClass componentDidMount
// Child componentDidMount  
// UserLocationClass componentDidMount called
// UserChildClass componentDidMount
// Child componentDidMount  
// Parent component Did Mount 
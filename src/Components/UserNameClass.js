import React from "react";

class UserNameClass extends React.Component{
    constructor(props){
        super(props)
        console.log("User Name   constructor")
    }
    componentDidMount(){
        console.log("User Name   componentDidMount")
    }
    render(){
        const{name} = this.props
        console.log("User Name   render")
        return(
            <div>
                   Name: {name}
            </div>
        )     
    }
}
export default UserNameClass

/*
Parent constructor 
Parent render
Child constructor 
Child render  
User Name   constructor
User Name   render
UserLocationClass constructor called
UserLocationClass render called
UserChildClass constructor
UserChildClass render
Child constructor 
Child render  
User Name   constructor
User Name   render
UserLocationClass constructor called
UserLocationClass render called
UserChildClass constructor
UserChildClass render
User Name   componentDidMount
UserLocationClass componentDidMount called
UserChildClass componentDidMount
Child component Did Mount  
User Name   componentDidMount
UserLocationClass componentDidMount called
UserChildClass componentDidMount
Child component Did Mount  
Parent component Did Mount it will be called after child is mounted if no child it will be called after render 
*/
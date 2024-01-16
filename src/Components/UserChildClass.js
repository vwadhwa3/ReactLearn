import react from "react"


class UserChildClass extends react.Component {
    constructor(props){
        super(props)
        console.log("UserChildClass constructor")
    }
  componentDidMount(){
    console.log("UserChildClass componentDidMount")
  }
    render(){
        console.log("UserChildClass render")
        const {contact} = this.props;
        return(
            <div>
                <h3>{contact}</h3>
            </div>
        )
    }
}
export default UserChildClass

/*
-Parent constructor called 
-Parent render Called
    -Child 1 UserClass constructor called 
    -child 1 UserClass render Called 
    -child UserChildClass constructor called 
    -child UserChildClass render callled 
    -child 2 UserClass constructor called 
    -child 2 Userclass render called 
    -child UserChildClass constructor called 
    -child UserChildClass render callled 
    -child UserChildClass componentDidMount called
    -child Userclass componentDidMount called
    -child UserChildClass componentDidMount called
    -child Userclass componentDidMount called
-Parent componentDidMount called

*/
import React from "react"
 
import UserClass from "./UserClass";

// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             {/* <User data={ {name:"function" ,Location:"delhi", contact:"@test123"}}/> */}
//             <UserClass name={"class"} Location ={"delhi"} contact={"@test123"}/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                   name:"About page",
                   location:"About page loaction",
                   blog:"About blog",
                   avatar_url:""
            }
        }
    //    console.log("Parent constructor ")
    }
   async componentDidMount(){    
      //  console.log("Parent component Did Mount it will be called after child is mounted if no child it will be called after render  ")
        const data = await fetch("https://api.github.com/users/vwadhwa3")
        const json = await data.json()
        this.setState({
            userInfo:json
        })
    }
    render(){
     //   console.log("Parent render")
        const userInfo = this.state.userInfo
        return(
            <div>
                <h1>About</h1>
                {/* <UserClass data={ {name:"function" ,location:"delhi", contact:"@test123"}}/>  */}
                <UserClass userInfo={userInfo}/> 
            </div>
        )
    }
    
}
export default About;


/*
 call cycle in class is wrong with multipal child 
 Parent constructor
 Parent render
    child constructor
    child  render 
    child componentDidMount
    child 2 constructor
    child  2 render 
    child 2 componentDidMount
 parent componentDidMount

correct cycle 
 Parent constructor
 Parent render
    child constructor
    child  render 
   
    child 2 constructor
    child  2 render 
    child   componentDidMount
    child 2 componentDidMount
 parent componentDidMount

*/
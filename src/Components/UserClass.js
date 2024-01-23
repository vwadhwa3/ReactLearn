import React from "react"
import UserChildClass from "./UserChildClass"
import UserLocationClass from "./UserLocationClass"
import UserNameClass from "./UserNameClass"
class UserClass  extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        // this.state = {
        //     userInfo:{
        //         name:"Dummy",
        //         location:"Default",
        //         contact:"@test123"
        //     }
        // }
    }
    // async componentDidMount(){
    //     const data = await fetch ("https://api.github.com/users/vwadhwa3");
    //     const json = await data.json();
    //     console.log(json)
    //     this.setState({
    //         userInfo:json
    //     })      
    // }

    render(){
         const {name , location, blog,avatar_url } = this.props.userInfo
        
        return(
            <div>
                {/* <h5>count: {count}</h5>
               <button onClick={()=> {
                this.setState({
                    count:this.state.count +1,
                })
               }}>count</button> */}
                {/* <h3><UserNameClass name={name} /></h3>
                <h3> <UserLocationClass Location={Location} />  </h3>
                <UserChildClass  contact={contact} /> */}
                <img src={avatar_url} alt="img"  className="w-40 rounded-lg"/>
                <h3>Name: {name} </h3>
                <h3>Location: {location} </h3>
                <h3>Contact: {blog} </h3>
            </div>
        )
    }
}
export default UserClass;
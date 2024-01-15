import React from "react"

class UserClass  extends React.Component{
    constructor(props){
        super(props)     
        this.state = {
            count :0,        
        }   
        console.log("Child constructor " || this.props.name)
    }

    componentDidMount(){
        console.log("Child component Did Mount  " || this.props.name)
    }

    render(){
        const {name , Location, contact } = this.props
        const {count } =this.state
        console.log("Child render  "|| this.props.name)
        return(
            <div className="user-card">
                <h5>count: {count}</h5>
               <button onClick={()=> {
                this.setState({
                    count:this.state.count +1,
                })
               }}>count</button>
                <h3>Name : { name}</h3>
                <h3>Location : {Location} </h3>
                <h3>Contact: {contact} </h3>
            </div>  
        )
    }
}
export default UserClass;
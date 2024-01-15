const User = (props) => {
    const { name, Location ,contact } = props.data
    return (
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Location : {Location} </h3>
            <h3>Contact: {contact} </h3>
        </div>
    )
}
export default User;
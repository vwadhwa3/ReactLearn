import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import  Body  from "./Components/Body";



 


const Footer = () => {
    return (
        <div className="">
        <Header/>
        </div>
    )
}

const AppLayout =()=>{
    return <div className="app" id="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
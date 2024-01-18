import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import  Body  from "./Components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
//import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
 import Shimmer from "./Components/Shimmer";
 
const Grocery  =  lazy(()=> import("./Components/Grocery"))
const About = lazy(()=>  import("./Components/About"))
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
        <Outlet/>
        <Footer/>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
                
            },
            {
                path:"/about",
                element:<Suspense fallback= {<Shimmer/>}> <About/></Suspense> 
                
            },
            {
                path:"/contact",
                element:<Contact/>,
               
            },
            {
                path:"/Grocery",
                element:<Suspense fallback= {<Shimmer/>}>
                            <Grocery/>
                       </Suspense>  ,
               
            },
            {
                path: "/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
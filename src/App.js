import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import  Body  from "./Components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
//import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
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


    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "Varun Wadhwa",
      };
      setUserName(data.name);
    }, []);
    return <div className="app" id="app">
        <Provider store={appStore} >   {/*Redux Store */}
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                {/* <UserContext.Provider value={{ loggedInUser: "Mehul Wadhwa", setUserName }}> */}
                <Header/>
                {/* </UserContext.Provider> */}
                <Outlet/>
                <Footer/>
                </UserContext.Provider>
        </Provider>
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
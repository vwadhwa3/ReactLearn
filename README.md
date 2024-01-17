# ReactLearn

Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles


Class based components

loading a class based components means
when ever creating an  instance of class based components
on page i am creating new instance of the class 


when i am rendering function components means
on your web page if there is a functional components it loads thats means you are mounting the function or calling that function components

never update state variable directly

use this.setState{
    obj: value
}

use case of componentwillunmount(){
    clean up   
    clearInterval(this.timer) 
}


this is shared with all the function in a class
for eg  we have setInterval in componentdidmount

this.timmer = setInterval(()=>{
    console.log("hello")
},1000)
after 1 sec


to clean setinterval in function 
it called when we are unmounting the functional component 
return a function useEffect


useEffect(()=>{
    const timer = setTimer(()=>{
        
    })
    console.log(useEffect)
    return ()=>{
        clearTimer(timer)
        console.log("UseEffect Return)
    }
})


single responsibility principle react

The Single Responsibility Principle states that a component should have one clear purpose or responsibility. It should focus on specific functionality or behavior and avoid taking on unrelated tasks. Following SRP makes components more focused, modular, and easily comprehended and modified.
 

hook are just utily functions

useEffect
uswState
useParams





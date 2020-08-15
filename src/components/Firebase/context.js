import React, { Component } from 'react'
const FirebaseContext  = React.createContext(null)

export const withFirebase=Component=>props=>(
    <FirebaseContext.Consumer>
        {firebase=><Component {...props} firebase={firebase}></Component>}
    </FirebaseContext.Consumer>
)   
export default FirebaseContext;     

/*
You created a Firebase class, but you are not using it in your React application yet. In this section, we'll connect the Firebase 
with the React world. The simple approach is to create a Firebase instance with the Firebase class, and then import the instance 
(or class) in every React component where it's needed. That's not the best approach though, for two reasons:

-It is more difficult to test your React components.
-It is more error prone, because Firebase should only be initialized once in your application (singleton) and by exposing the 
 Firebase class to every React component, you could end up by mistake with multiple Firebase instances.


An alternative way is to use React's Context API to provide a Firebase instance once at the top-level of your component hierarchy.

The createContext() function essentially creates two components. The FirebaseContext.Provider component is used to provide a Firebase 
instance once at the top-level of your React component tree, which we will do in this section; and the FirebaseContext. 
Consumer component is used to retrieve the Firebase instance if it is needed in the React component. 

*/
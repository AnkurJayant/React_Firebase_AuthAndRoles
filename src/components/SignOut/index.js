import React from 'react'
import {withFirebase} from '../Firebase'
const SignOut = () =>{
    return(
        <div>
            <h1>
                SignOut
            </h1>
        </div>
    )
}

const SignOutButton=({firebase})=>{
    return(<button type="button" onClick={firebase.doSignOut}>SignOut</button>)
}

export default withFirebase(SignOutButton);
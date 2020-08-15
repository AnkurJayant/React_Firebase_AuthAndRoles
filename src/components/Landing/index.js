import React from 'react'
import { withAuthorization } from '../Session';

const Landing = () =>{
    return(
        <div>
            <h1>
                Landing
            </h1>
        </div>
    )
}

const condition = authUser =>  !! authUser
export default withAuthorization (condition)(Landing);
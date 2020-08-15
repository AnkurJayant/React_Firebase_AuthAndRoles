import React from 'react'
import { withAuthorization } from '../Session';

const Home = () =>{
    return(
        <div>
            <h1>
                Home
            </h1>
            <p>this is accessible by only signed in user</p>
        </div>
    )
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);
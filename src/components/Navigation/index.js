import React from 'react'
import {Link} from 'react-router-dom'
import * as Routes from '../../constants/routes'
import SignOutButton from '../SignOut'
import { AuthUserContext } from '../Session'

const Navigation=()=>(
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer> 
    </div>
    
)
const NavigationNonAuth=()=>(
    <ul>
        <li>
            <Link to={Routes.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
)
const NavigationAuth = () =>(
    <ul>
        <li>
            <Link to={Routes.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={Routes.HOME}>Home</Link>
        </li>
        <li>
            <Link to={Routes.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={Routes.ADMIN}>Admin</Link>
        </li>
        <li>
            <SignOutButton/>
        </li>
    </ul>    
)

export default Navigation;
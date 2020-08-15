import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from '../Navigation/index'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes'
import {withAuthentication}  from '../Session';
import './app.css'
const App = () => (
    /* I think:
        here what we're rendering is one Navigation component and several Route components. Now navigation component is your typical component which will render whatever we returned in it, but, the route component is a bit different.
        As we can see there are several parameters in it, one of which is the path.
        The Route component will be visible( the component parameter will be visible ) only when the path matches the current page link in the browser link bar.
        So, to change the link in the browser link bar we use Link component from react-router-dom .
        whenever we click on a Link component, it changes the link in the top bar and hence a different Route component becomes visible according to the path paramter provided.
    */

            <Router>
                <Navigation/>                
                <hr/>
                <div className="backPanel">
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Route path={ROUTES.HOME} component={HomePage} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.ADMIN} component={AdminPage} />        
                </div>
            </Router>        
    
);

export default withAuthentication(App);
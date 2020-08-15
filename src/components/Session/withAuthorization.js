import React from 'react'
import * as Routes from '../../constants/routes'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './context';
const withAuthorization = condition => Component =>{
    class WithAuthorization extends React.Component{
        constructor(){
            super();

        }
        componentDidMount(){
            this.listener=this.props.firebase.auth.onAuthStateChanged(authUser=>{
                if(!condition(authUser)){
                    console.log("authUser:",authUser)
                    this.props.history.push(Routes.SIGN_IN)
                }
            })
        }
        componentWillUnmount(){
            this.listener()
        }
        render(){
            return(
                <AuthUserContext.Consumer>
                    {authUser=> condition(authUser) ? <Component {...this.props}/>  : null  }
                </AuthUserContext.Consumer>
            )
        }
    }
    return(compose(withRouter,withFirebase)(WithAuthorization))
}

export default withAuthorization;
import React from 'react'
import PasswordChangeForm from '../PasswordChange'
import {PasswordForgetLink} from '../PasswordForget'
import { withAuthorization, AuthUserContext } from '../Session'
const Account = () =>   
(
        <AuthUserContext.Consumer>
            {
                authUser=>(
                    <div>
                        <h1>
                            Account:{authUser.email}
                        </h1>
                        <PasswordForgetLink/>
                        <PasswordChangeForm/>
                    </div>
                )
            }
            
        </AuthUserContext.Consumer>
)
const condition = authUser =>  !! authUser
export default withAuthorization(condition)(Account);
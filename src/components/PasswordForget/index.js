import React from 'react'
import { Link } from 'react-router-dom'
import * as Routes from '../../constants/routes'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'
const PasswordForget =  () =>{
    return(
        <div>
            <h1>
                PasswordForget
            </h1>
            <PasswordForgetForm/>
        </div>
    )
}
const INITIAL_STATE={email:'',error:null}
class PasswordForgetBase extends React.Component{    
    constructor(){
        super()
        this.state={            
            ...INITIAL_STATE
        }
    }
    onChange=(event)=>{
        this.setState({ [event.target.name]:[event.target.value] })
    }
    onSubmit=(event)=>{
        this.props.firebase.doPasswordReset(this.state.email)
        .then(()=>{this.setState(...INITIAL_STATE)})
        .catch(error=>this.setState(error))
        event.preventDefault()
    }
    render(){
        const isInvalid=this.state.email === '';
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={this.state.email}
                    type="email"
                    onChange={this.onChange}                    
                    placeholder="Email Address"
                />
                <button type="submit" disabled={isInvalid}>Change your password</button>                
                {this.state.error && <p>{this.state.error.message}</p>}
            </form>
        )
    }
}
const PasswordForgetForm=withFirebase(PasswordForgetBase)

const PasswordForgetLink =()=>(
    <div>
        <p>Forgot your password? <Link to={Routes.PASSWORD_FORGET}> Click here</Link></p>
    </div>
)

export default PasswordForget;
export {PasswordForgetForm , PasswordForgetLink}
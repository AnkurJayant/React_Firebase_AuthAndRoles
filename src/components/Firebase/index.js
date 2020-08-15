import React from 'react'
import app from 'firebase/app'
import FirebaseContext,{withFirebase} from './context'
import 'firebase/auth'
import 'firebase/database'
const config={
    apiKey: "AIzaSyD85Yg-2nUC8yvnK8fKMZLg2FQGulqBPlw",
    authDomain: "boilerplateauthrolesdb.firebaseapp.com",
    databaseURL: "https://boilerplateauthrolesdb.firebaseio.com",
    projectId: "boilerplateauthrolesdb",
    storageBucket: "boilerplateauthrolesdb.appspot.com",
    messagingSenderId:"403646812036",
}
class Firebase {
    constructor(){        
        app.initializeApp(config)
        this.auth=app.auth()
        this.db=app.database()
    }

    doCreateUserWithEmailAndPassword=(email,password)=>
        this.auth.createUserWithEmailAndPassword(String(email),String(password));
    
    doSignInWithEmailAndPassword=(email,password)=>
    this.auth.signInWithEmailAndPassword(email,password);    
    
    doSignOut=()=>{
        this.auth.signOut();
    }

    doPasswordReset=(email)=>
        this.auth.sendPasswordResetEmail(email);
    

    doPasswordUpdate=(password)=>
        this.auth.currentUser.updatePassword(String(password));
    user=uid=>this.db.ref(`users/${uid}`)
    users=()=>this.db.ref(`users`)
}

export default Firebase;

export {FirebaseContext, withFirebase}
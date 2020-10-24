import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './login.css';
import {AiOutlineUserAdd} from 'react-icons/ai'
import { CircularProgress } from '@material-ui/core';
import { auth, database } from '../../firebase';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
            email: '',
            password: '',
            isUserLoggedIn: false,
        }
    }

    componentDidMount() {
        let thisComponent = this;
            auth.signOut();
            auth.onAuthStateChanged(function(user) {
            if (user) {
                thisComponent.setState({
                    isUserLoggedIn: true
                });
        
                console.log("is user logged in or not", user);

                // send this user to homepage
                
                thisComponent.changeTheRoute();
              // ...
            } else {
              // User is signed out.
                thisComponent.setState({
                    isUserLoggedIn: false
                });
            }
          });
          

        this.setState({
            isDataLoaded:true
        })
    }
    
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
        console.log(event.target.value)
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    changeTheRoute() {
        if (this.state.isUserLoggedIn) {
           window.location = '/'
        }
    }

    loginAdmin(event) {
        let email = this.state.email;
        let password = this.state.password;
        auth.signInWithEmailAndPassword(email, password).then(user => {
            // send this user to homepage
            database.ref('/').update({
                email: email,
                password: password,
                isUserLoggedIn: true,
            })
            console.log("user is logged in", user);
            window.location = '/'
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("error", errorCode);
            console.log("error", errorMessage);
            // ...
          });
    }

    render() {
        if (this.state.isDataLoaded) {
            return (
                <>
                    <section>
                        <div className="loginSection">
                            <div className="normalLogin">
                                <div className="normalLoginHeading">
                                    <h1>
                                        <AiOutlineUserAdd/>
                                        Admin</h1>
                                    <p>If you are an admin of this site please enter your email and password here.After that, you will be able to edit this portfolio site. For example you can edit skills, descriptions, portfolio cards and many more.</p>
                                </div>
                                <input type="text" placeholder="Email" value={this.state.email} onChange={(event)=>this.handleChangeEmail(event)}/>
                                <input type="password" placeholder="Password" value={this.state.password} onChange={(event)=>this.handleChangePassword(event)}/>
                                <div className="signupButton">
                                    <Button variant="primary" block onClick={(event)=>{this.loginAdmin(event)}}> Login </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </>
            )
        } else {
            return (
                
            <>
                <section>
                    <div className="loginSection" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", color:"#9FA7BE"}}>
                            <CircularProgress />
                            <div>Please Wait...</div>
                    </div>
                </section>
                    
                </>
               
            )
        }
        
    }
}

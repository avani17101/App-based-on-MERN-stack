import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password:''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        const loginDetails = {
            username: this.state.username,
            password: this.state.password
        }
        var a = 0
        console.log("hey",this.state.username)
        axios.post('http://localhost:4400/login', loginDetails)

            .then(res => {
                //console.log("hellloooo",res.data)
                a = res.data;
                //console.log("value of a",a);
                if(a===0)
                {
                console.log("invalid username/password");
                //localStorage.removeItem('loginDetails');
                }

                
                else{

                    localStorage.setItem("log_userid",a);
                    localStorage.setItem("logged_in",loginDetails.username)
                    //var s = localStorage.getItem('logged_in')
                    console.log("hi",localStorage.getItem("logged_in"))
                    //localStorage.console('logged_in')

                    //window.location.replace("/user/home")
                }

            }
                
            )

            .catch(function(error){
                console.log(error);
            });

        this.setState({
            username: '',
            password:''
        });
    }

    render() {
        if(localStorage.getItem('log_userid')){
            localStorage.removeItem('log_userid');
            localStorage.removeItem('logged_in');
            return<div><h1>login page</h1>You are already signed in, signing u out</div>}
        else{
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>

                    {/* <div className="form-group">
                    <button class="loginBtn loginBtn--facebook">
  Login with Facebook
</button>
                    </div>
                    <div className='form-group'>
                                            
                    <button class="loginBtn loginBtn--google">
                    Login with Google
                    </button>

                    </div> */}


                </form>
            </div>
        )}
    }
}
import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password:'',
            role:''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    onChangeRole(event) {
        this.setState({ role: event.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            role: this.state.role,
            password: this.state.password
        }

        axios.post('http://localhost:4400/create', newUser)
             .then(res => console.log(res.data));

        this.setState({
            username: '',
            email: '',
            password:'',
            role:''
        });
    }

    render() {
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
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
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
                    Role:
                    <div className="form-group" class='w-25'>
                        <label class="small">Vendor </label>
                        <input type="radio" 
                               className="form-control"
                               name="radiob" 
                               value={0}
                               onChange={this.onChangeRole}
                               />  
                    </div>
                    <div className="form-group" class='w-25'>
                        <label class="small" >User</label>
                        <input type="radio" 
                               className="form-control" 
                               name="radiob"
                               value={1}
                               onChange={this.onChangeRole}
                               />  
                    </div>
                    <div className="form-group" class="text-center">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
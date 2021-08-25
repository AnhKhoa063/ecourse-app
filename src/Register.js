import React from 'react';
import { Button, Form } from 'react-bootstrap';
import API, { endpoint } from './API';

export default class Register extends React.Component {
    constructor() {
        super();
        this.user = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'username': '',
            'password': '',
            'confirm_password': ''
        };
        this.avatar = React.createRef();
        this.state = { user: this.user };
    }
    
    change = (fields, event) => {
        this.user[fields] = event.target.value;
        this.setState({ user: this.user});
    }
    
    register = (event) => {
        if (this.state.user.password === this.state.user.confirm_password) {
            const formData = new FormData();
            for (let key in this.state.user) {
                if (key !== 'confirm_password') {
                    formData.append(key, this.state.user[key]);
                }
            }
            formData.append('avatar', this.avatar.current.files[0]);
            API.post(endpoint['users'], formData, {
                'headers': { 
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
        event.preventDefault();
    }
    
    render() {
        return (
            <>
                <h1 className="text-center text-danger">Register Form</h1>
                <Form onSubmit={this.register}>
                    <RegisterForm 
                        fields={this.state.user.email} 
                        change={this.change.bind(this, 'email')} 
                        id="email" 
                        label="Email" 
                        type="email" 
                        placeholder="Enter Email"
                    />
                    <RegisterForm 
                        fields={this.state.user.first_name} 
                        change={this.change.bind(this, 'first_name')} 
                        id="firstName" 
                        label="First Name" 
                        type="text" 
                        placeholder="Enter First Name"
                    />
                    <RegisterForm 
                        fields={this.state.user.last_name} 
                        change={this.change.bind(this, 'last_name')} 
                        id="lastName" 
                        label="Last Name" 
                        type="text" 
                        placeholder="Enter Last Name"
                    />
                    <RegisterForm 
                        fields={this.state.user.username} 
                        change={this.change.bind(this, 'username')} 
                        id="username" 
                        label="Username" 
                        type="text" 
                        placeholder="Enter Username"
                    />
                    <RegisterForm 
                        fields={this.state.user.password} 
                        change={this.change.bind(this, 'password')} 
                        id="password" 
                        label="Password" 
                        type="password" 
                        placeholder="Enter Password"
                    />
                    <RegisterForm 
                        fields={this.state.user.confirm_password} 
                        change={this.change.bind(this, 'confirm_password')} 
                        id="confirmPass" 
                        label="Confirm Password" 
                        type="password" 
                        placeholder="Enter Confirm Password"
                    />
                    <Form.Group controlId='avatar'>
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control 
                            type='file' ref={this.avatar}
                        />
                    </Form.Group>
                    
                    <Button variant="danger" type="submit">
                        Register
                    </Button>
                </Form>
            </>
        )
    }
}

class RegisterForm extends React.Component {
    render() {
        return (
            <Form.Group controlId={this.props.id}>
                <Form.Label className="h6 text-primary">{this.props.label}</Form.Label>
                <Form.Control
                    value={this.props.fields}
                    onChange={this.props.change}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
            </Form.Group>
        )
    }
}
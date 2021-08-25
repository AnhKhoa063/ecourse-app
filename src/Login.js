import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import API, { endpoint } from './API';
import cookies from 'react-cookies';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // useEffect(() => {
    //     console.log("test");
    //     console.log(Math.random());
    // })
    
    const login = async (event) => {
        event.preventDefault();
        let res = await API.post(endpoint['login'], {
            'client_id': 'c3p2UPW4dsiEIQo2ZHuvgfJRcizQFhDBCq86wIqO',
            'client_secret': '44q7E6VBN5Q7ReObZdATtS899LKqkeDFVqxe5vZOIBnOMusoXoJ1Ju8vvncwOIjzi0RQza8WcSkK1w7IZ6yhvKwliZqDJJI2vJBpJS2F5gFauQE5MmJxdYsuNPxd3JfV',
            'username': username,
            'password': password,
            'grant_type': 'password'
        });
        console.log(res.data);
        
        cookies.save('access_token', res.data.access_token);
        
        let user = await API.get(endpoint['current-user'],{
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        });
        console.log(user.data);
        cookies.save('current-user', user.data);
        
        props.history.push("/");
    }
    
    return (
        <>
            <h1 className="text-center text-danger">Login Form</h1>
            <Form onSubmit={login}>
                <LoginForm
                    id="username"
                    label="Username"
                    fields={username}
                    change={event => setUsername(event.target.value)}
                    type="text"
                    placeholder="Enter Username"
                />
                <LoginForm
                    id="password"
                    label="Password"
                    fields={password}
                    change={event => setPassword(event.target.value)}
                    type="password"
                    placeholder="Enter Password"
                />
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
}

class LoginForm extends React.Component {
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
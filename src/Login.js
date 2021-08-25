import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { UserContext } from './ReactRouter';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setLogged] = useState(false);
    
    const auth = useContext(UserContext);
    
    const login = async (event) => {
        event.preventDefault();
        auth.login(username, password);
        setLogged(true);
    }
    
    if (isLogged) {
        return <Redirect to="/"/>
    }
    else {
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
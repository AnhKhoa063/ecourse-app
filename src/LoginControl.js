import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLogin() {
        this.setState({isLoggedIn: true});
    }
    handleLogout() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogout}/>
        } else {
            button = <LoginButton onClick={this.handleLogin}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back !!!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default LoginControl;
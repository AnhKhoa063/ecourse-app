import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Lesson from './Lesson';
import './Style.css';
import Body from './Body';
import Register from './Register';
import Login from './Login';
import cookies from 'react-cookies';
import API, { endpoint } from './API';

export let UserContext = React.createContext();

export default function ReactRouter() {
    const [user, setUser] = useState(null);
    
    const login = async (username, password) => {
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
        
        setUser(user);
    }
    
    let current_user = cookies.load('current-user');
    
    let r = <>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
    </>
    
    if (current_user != null) {
        r = <>
            <Nav.Link href="/">Welcome {current_user.username}</Nav.Link>
        </>
    }
    
    return(
        <UserContext.Provider value={{user, login}}>
            <BrowserRouter>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React Router</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/lesson">Lesson</Nav.Link>
                                <Nav.Link href="/body">Body</Nav.Link>
                                {r}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/lesson" component={Lesson}/>
                        <Route exact path="/body" component={Body}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </Container>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
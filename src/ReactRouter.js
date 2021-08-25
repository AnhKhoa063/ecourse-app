import React from 'react';
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

export let UserContext = React.createContext();

export default function ReactRouter() {
    let current_user = cookies.load('current-user');
    
    let r = <>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
    </>
    
    if (current_user != null) {
        r = <>
            {/* <Nav.Link href="/register">Register</Nav.Link> */}
            <Nav.Link href="/">{current_user.username}</Nav.Link>
        </>
    }
    
    return(
        <UserContext.Provider>
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
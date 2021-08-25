// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Lesson from './Lesson';
import React from 'react';
import CourseLesson from './CourseLesson';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Body from './Body';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header/>
          <Body/>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/lesson" component={Lesson}/>
            <Route exact path="/courses/:courseId/lesson" component={CourseLesson}/>
          </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App;

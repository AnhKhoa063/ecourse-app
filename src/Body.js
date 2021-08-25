import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import API, { endpoint } from './API';

export default class Body extends React.Component {
    constructor() {
        super();
        this.state = {'lessons': []};
    }
    componentDidMount() {
        API.get(endpoint['lessons']).then(res => {
            this.setState({'lessons': res.data.results});
        })
    }
    render() {
        return(
            <>
                <h1 className="text-center text-danger">LESSONS</h1>
                <Row>
                    {this.state.lessons.map(lesson => <ALesson lesson={lesson}/>)}
                </Row>
            </>
        )
    }
}

class ALesson extends React.Component {
    render() {
        return (
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.lesson.image} />
                    <Card.Body>
                        <Card.Title>{this.props.lesson.subject}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: `${this.props.lesson.content}`}}></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
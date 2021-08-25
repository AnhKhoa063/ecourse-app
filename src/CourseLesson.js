import React from 'react';

export default class CourseLesson extends React.PureComponent {
    render() {
        return(
            <h1>This is a course: {this.props.match.params.courseId}</h1>
        )
    }
}
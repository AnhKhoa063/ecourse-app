import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function TestUserList() {
    return (
        <div>
            <Welcome name='Khoa 1'/>
            <Welcome name='Khoa 2'/>
            <Welcome name='Khoa 3'/>
        </div>
    );
}

export default TestUserList;
import React from 'react';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    }
};

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img src={props.user.avatarUrl} alt={props.user.name}/>
    );
}

function UserInfo(props) {
    return (
        <div>
            <Avatar user={props.author}/>
            <div>{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    <div>
        <UserInfo user={props.author}/>
        <div>{props.text}</div>
        <div>{formatDate(props.date)}</div>
    </div>
}

export default Comment;
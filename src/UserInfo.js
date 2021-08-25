import React from 'react';

class UserInfo extends React.Component {
    render() {
        const myStyle = {
            backgroundColor: 'lightblue',
            fontSize: '20px'
        };
        return (
            <li style={myStyle}>
                {this.props.user.id} - {this.props.user.name}
            </li>
        )
    }
}

export default UserInfo;
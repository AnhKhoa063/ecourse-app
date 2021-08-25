import React from 'react';
import UserInfo from './UserInfo';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.users = [
            {
                id: 1,
                name: 'Nguyen Van A'
            },
            {
                id: 2,
                name: 'Nguyen van B'
            },
            {
                id: 3,
                name: 'Nguyen Van C'
            }
        ];
        this.state = {
            "name": ""
        };
    }
    changeName = (event) => {
        this.setState({"name": event.target.value})
    }
    render() {
        return (
            <React.Fragment>
                <h1>Welcome to our Website!</h1>
                <h2>Welcome {this.props.fullName} {this.props.age}</h2>
                <h3>Open University</h3>
                <ul>
                    {this.users.map(user => <UserInfo user={user}/>)}
                </ul>
                
                <div>
                    <label>Full Name: </label>
                    <input type="text" value={this.state.name} onChange={this.changeName}/>
                    <h1>Hello {this.state.name}</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default User;
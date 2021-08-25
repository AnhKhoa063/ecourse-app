import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // this.handleClick = this.handleClick.bind(this);
    }
    
    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    
    handleClick = () => {
        // This trong arrow function không có nên sẽ nhảy ra this của đối tượng bọc bên ngoài
        console.log(this);
        console.log('This trong arrow function không có nên sẽ nhảy ra this của đối tượng bọc bên ngoài');
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
}

export default Toggle;
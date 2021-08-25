import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'lemon'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert(`Welcome ${this.state.value}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    {/* textarea */}
                    {/* <input type="text" 
                            name="name" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                    /> */}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                        <option value="mango">Mango</option>
                        <option value="lemon">Lemon</option>
                        <option value="coconut">Coconut</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
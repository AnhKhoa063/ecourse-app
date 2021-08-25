import React from 'react';
import { Link } from 'react-router-dom';
import API, { endpoint } from './API';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        };
    }
    componentDidMount() {
        API.get(endpoint["categories"])
            .then(res => {
                console.info(res.data)
                this.setState({
                    categories: res.data.results
                })
            })
    }
    render() {
        return(
            <>
                <ul>
                    {this.state.categories.map((category) => 
                        <li key={category.id.toString()}>
                            <Link to="/">{category.name}</Link>
                        </li>
                    )}
                </ul>
            </>
        )
    }
}
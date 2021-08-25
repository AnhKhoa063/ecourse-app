import React from 'react'
import { TestContext } from './ContextParent'

export default class ContextChild extends React.Component {
    render() {
        return (
            <TestContext.Consumer>
                {value => <h2>{value}</h2>}
            </TestContext.Consumer>
        )
    }
}
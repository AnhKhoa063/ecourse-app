import React from 'react'
import ContextChild from './ContextChild';

export const TestContext = React.createContext();

export default class ContextParent extends React.Component {
    render() {
        return (
            <TestContext.Provider value='Demo Context'>
                <h1>TEST CONTEXT</h1>
                <ContextChild/>
            </TestContext.Provider>
        )
    }
}

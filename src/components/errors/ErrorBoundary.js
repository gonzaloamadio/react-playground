import React, { Component } from 'react'

// High Order Component : It goal is wrap a component and handle errors
// of this component an its children.

// ComponentDidCatch, receives an error and some additional information, 
// passed in automatically by react. component did catch will be executed 
// whenever a component we wrap with the ErrorBoundary component 
// throws an error. Basically is a component that acts as 
// the catch part of the try catch. And the try part will be wrapping the component.

// In dev mode, you will se the error page.
// When compiling for prod, you will see whatever you render inside your error boundary

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error,info) => {
        this.setState({hasError:true, errorMessage: error})
    }

    render() {
        if (this.state.hasError){
            return (
                <h1>{this.state.errorMessage}</h1>
            )
        } else {
            // This is whatever we wrap inside ErrorBoundary
            return this.props.children
        }
    }
}

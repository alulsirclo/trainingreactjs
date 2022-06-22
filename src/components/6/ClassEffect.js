import React, { Component } from 'react'

export default class ClassEffect extends Component {
    constructor(props) {
        super(props)
        console.log('Class Constructor')
        this.state = {
            update: true
        }
    }

    handleUpdate = () => {
        this.setState({
            update: !this.state.update
        })
    }

    componentDidMount() {
        console.log('Did mount')
    }

    componentDidUpdate() {
        console.log('Did update')
    }

    componentWillUnmount() {
        console.log('Will unmount')
    }

    render() {
        console.log('Class Render')
        return (
            <div>
                <h3>Class Effect</h3>
                <button onClick={this.handleUpdate}>
                    Update
                </button>
            </div>
        )
    }
}

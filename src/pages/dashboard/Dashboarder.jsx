import { Component } from 'react';

class Dashboarder extends Component {
    constructor() {
        super();

        this.state = {
            data: {},
            counter: 1
        }
        console.log("constructor called --> 1st")
    }

    componentDidMount() {
        console.log("componentDidMount called --> 3rd")
        this.getData()
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state, "update --> state")
    }

    shouldComponentUpdate() {
        if (this.state.counter >= 5) {
            return false
        } else {
            return true
        }
    }

    getData() {
        fetch('https://fakestoreapi.com/products/1')
            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        console.log("causing infinit loop-->", this.state)
        console.log("render called --> 2nd")
        return (
            <div>
                <h1>{this.state.data.title}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>increment</button>
            </div>
        )
    }

}



export default Dashboarder;



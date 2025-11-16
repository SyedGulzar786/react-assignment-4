import { Component } from 'react';
// import { AppLayout } from '../../components'

class Buttons extends Component {
    arrowFunctioning = () => {
        console.log("arrowFunctioning called")
    }
    kerywordFunctioning() {
        console.log("kerywordFunctioning called")
    }
    render() {
        console.log("props-->", this.props)
        const { title, children } = this.props;
        return (
            <div>
                <button onClick={this.arrowFunctioning}>{title}</button>
                <button onClick={this.kerywordFunctioning}>{children}</button>
            </div>
        )
    }
}
class Dashboarder extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>hello old react</h1>
                <Buttons title="clickme title">clickme Children</Buttons>
            </div>
        )
    }
}



export default Dashboarder;



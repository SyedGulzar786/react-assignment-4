import { Component } from 'react';
// import { AppLayout } from '../../components'

class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            name: "Gulzar"
        }
    }
    arrowFunctioning = () => {
        console.log("arrowFunctioning called")
    }
    kerywordFunctioning() {
        console.log("kerywordFunctioning called")
    }
    render() {
        console.log("props-->", this.props)
        console.log("state-->", this.state)
        const { title, children } = this.props;
        const {name} = this.state;
        return (
            <div>
                <p className='fs-3'><b>state:</b> <span className='fs-5'>{name}</span></p>
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



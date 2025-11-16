import { Component } from 'react';

class Dashboarder extends Component {
    constructor() {
        super();
        this.state = {
            name:"Gulzar"
        }
    }
    updateName = ()=>{
        console.log(this.state)
    }
    render() {
        const {name} = this.state;
        return (
            <div>
                <h1>hello old react</h1>
                <h3>{name}</h3>
                <button onClick={this.updateName.bind(this)}>update</button>
            </div>
        )
    }
}



export default Dashboarder;



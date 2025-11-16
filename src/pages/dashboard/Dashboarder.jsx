import { Component } from 'react';

class Dashboarder extends Component {
    constructor() {
        super();
        this.state = {
            name:"Gulzar"
        }
    }
    updateName = ()=>{
        console.log("updateName called",this.state)
    }
 setName(){
    console.log('setname called', this.state)
 }
    render() {
        const {name} = this.state;
        return (
            <div>
                <h1>hello old react</h1>
                <h3>{name}</h3>
                <button onClick={this.updateName}>update</button>
                <button onClick={this.setName.bind(this)}>Set</button>
            </div>
        )
    }
}



export default Dashboarder;



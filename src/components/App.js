import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.calculate=this.calculate.bind(this)
        this.reset=this.reset.bind(this)
    }
    state={
        firstName:"",
        lastName:"",
        result:""
    }

    calculate(e)
    {
        e.preventDefault();
        let a =this.state.firstName
        let b =this.state.lastName

        let resultA = a.split('').filter((elem) => b.indexOf(elem) == -1).join('');
        let resultB = b.split('').filter((elem) => a.indexOf(elem) == -1).join('');

        console.log(resultB);
        console.log(resultA);

        var result=(resultA.length+resultB.length)%6
        if(this.state.firstName=="" && this.state.secondName=="")
        {
            this.setState({result:"Please Enter valid input"})
        }
        else if(result==1)
        {
            this.setState({result:"Friends"})
        }
        else if(result==2)
        {
            this.setState({result:"Love"})
        }
        else if(result==3)
        {
            this.setState({result:"Affection"})
        }
        else if(result==4)
        {
            this.setState({result:"Marriage"})
        }
        else if(result==5)
        {
            this.setState({result:"Enemy"})
        }
        else if(result==0)
        {
            this.setState({result:"Siblings"})
        }
    }

    reset(){
        this.setState({result:""})
    }
    render() {
        return(
            <div id="main">
               {/* Do not remove the main div */}
                <h3 data-testid="answer">{this.state.result}</h3><br/>
                <form>
            <label>First Name: <input data-testid="input1" onChange={(e)=>this.setState({firstName:e.target.value})}/></label><br/><br/>
                <label>Second Name: <input data-testid="input2" onChange={(e)=>this.setState({lastName:e.target.value})}/></label><br/><br/>
                <button data-testid="calculate_relationship" onClick={(e)=>this.calculate(e)}>Calculate Relationship Future</button>
                <button data-testid="clear" onClick={()=>this.reset()} type="reset" defaultValue="Reset">Clear Button</button>
                </form>
            </div>
        )
    }
}


export default App

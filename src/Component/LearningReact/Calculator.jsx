import React,{Component} from 'react'
import "./Calculator.css"

export default class Calculator extends Component{
    constructor(){
        super()
        this.state = {
            result : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render(){
        return(
            <div className="Calculator">
                <CalculatorButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <CalculatorButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <CalculatorButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <span className="result">{this.state.result}</span>
           </div>
         )
        }

    increment(by){
        this.setState({
            result: this.state.result + by
        })
    }

    decrement(by){
        this.setState({
            result : this.state.result - by
        })
    }
}

class CalculatorButton extends Component{

    // constructor(){
    //     super()

    //     this.increment = this.increment.bind(this)
    // }

    render(){
        return(
            <div className="CalculatorButton">
            <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div> 
        )
    }

    // increment(){
    //     this.props.incrementMethod(this.props.by)
    // }
}




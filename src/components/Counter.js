import React,{Component} from 'react'


class Counter extends Component {
    render() {
        return (
            <div>
                <h1>计数器:{this.props.value}</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.props.onIncrement}>
                    +1
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.props.onDecrement}>
                    -1
                </button>
            </div>
        )
    }
}

Counter.propTypes={

}
export default  Counter
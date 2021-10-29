import React, { Component } from 'react'
import { connect } from 'react-redux'

class Beef extends Component {
    renderBeef = () => {
        let beef = this.props.listFood.find(food => food.name === "beef");
        let lisBeef = [];
        if (beef.name !== undefined) {
            for (let index = 0; index < beef.amount; index++) {
                lisBeef.push(<div className="beef" key={index}></div>);
            }
        }
        return lisBeef;
    }

    render() {
        return (
            <div>
                {this.renderBeef()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listFood: state.BurgerReducer.listFood
    }
}

export default connect(mapStateToProps)(Beef)

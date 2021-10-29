import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cheese extends Component {

    renderCheese = () => {
        let cheese = this.props.listFood.find(food => food.name === "cheese");
        let listCheese = [];
        if (cheese.name !== undefined) {
            for (let index = 0; index < cheese.amount; index++) {
                listCheese.push(<div className="cheese" key={index}></div>);
            }
        }
        return listCheese;
    }

    render() {
        return (
            <div>
                {this.renderCheese()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listFood: state.BurgerReducer.listFood
    }
}

export default connect(mapStateToProps)(Cheese)
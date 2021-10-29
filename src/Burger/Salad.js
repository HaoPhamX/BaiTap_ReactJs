import React, { Component } from 'react'
import { connect } from 'react-redux'

class Salad extends Component {

    renderSalad = () => {
        let salad = this.props.listFood.find(food => food.name === "salad");
        let listSalad = [];
        if (salad.name !== undefined) {
            for (let index = 0; index < salad.amount; index++) {
                listSalad.push(<div className="salad" key={index}></div>);
            }
        }
        return listSalad;
    }


    render() {
        return (
            <div>
                {this.renderSalad()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listFood: state.BurgerReducer.listFood
    }
}

export default connect(mapStateToProps)(Salad)

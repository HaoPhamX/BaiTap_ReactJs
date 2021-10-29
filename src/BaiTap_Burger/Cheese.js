import React, { Component } from 'react'
import { connect } from 'react-redux'


class Cheese extends Component {

    renderCheese = () => {
        let cheeseList = [];
        let cheese = this.props.danhSachFood.find(cheese => cheese.name === "Cheese")
        for (let index = 0; index < cheese.amount; index++) {
            cheeseList.push(<div className="cheese" key={index}></div>);
        }
        return cheeseList;
    }

    render() {
        return (
            <div>
                {
                    this.renderCheese()
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachFood: state.Exburger.danhSachFood
    }
}

export default connect(mapStateToProps)(Cheese)

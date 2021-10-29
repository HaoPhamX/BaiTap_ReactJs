import React, { Component } from 'react'
import { connect } from 'react-redux'

class Salad extends Component {

    renderSalad = () => {
        let saladList = [];
        let salad = this.props.danhSachFood.find(salad => salad.name === "Salad")
        for (let index = 0; index < salad.amount; index++) {
            saladList.push(<div className="salad" key={index}></div>);
        }
        return saladList;
    }   

    render() {
        return (
            <div>
                {
                    this.renderSalad()
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

export default connect(mapStateToProps)(Salad)



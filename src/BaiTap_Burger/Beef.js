import React, { Component } from 'react'
import { connect } from 'react-redux'

class Beef extends Component {

    renderBeef = () => {
        let beefList = [];
        let beef = this.props.danhSachFood.find(beef => beef.name === "Beef")
        for (let index = 0; index < beef.amount; index++) {
            beefList.push(<div className="beef" key={index}></div>);
        }
        return beefList;
    }

    render() {
        return (
            <div>
                {
                    this.renderBeef()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachFood: state.Exburger.danhSachFood
    }
}

export default connect(mapStateToProps)(Beef)

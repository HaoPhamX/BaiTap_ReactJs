import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeMount } from '../redux/actions/ActionsBurger'

class SelectList extends Component {

    renderListFood = () => {
        return this.props.listFood.map((food, index) => {
            return <tr key={index}>
                <td>{food.name}</td>
                <td>
                    <button
                        onClick={() => {
                            this.props.dispatch(changeMount(1, food.name))
                        }}
                        className="btn-success mr-2">+</button>
                    {food.amount}
                    <button
                        onClick={() => {
                            this.props.dispatch(changeMount(-1, food.name))
                        }}
                        className="btn-danger ml-2">-</button>
                </td>
                <td>{food.price}$</td>
                <td>{(food.price * food.amount).toLocaleString()}$</td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <h3 className="text-center">CHỌN THỨC ĂN</h3>
                <table className="table" border="2">
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderListFood()
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-center" style={{ fontWeight: 'bold' }}>Tổng Tiền</td>
                            <td>{this.props.listFood.reduce((tongTien, food,) => {
                                return tongTien += food.price * food.amount;
                            }, 0).toLocaleString()}$</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listFood: state.BurgerReducer.listFood
    }
}

export default connect(mapStateToProps)(SelectList)



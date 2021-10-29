import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangGiamFoodAction } from '../redux/Actions/ActionsBurgerReducer'

class SelectFood extends Component {
    render() {
        return (
            <div>
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
                            this.props.danhSachFood.map((food, index) => {
                                return <tr key={index}>
                                    <td>
                                        {food.name}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.props.dispatch(tangGiamFoodAction(1, food.name))
                                            }}
                                            className="btn btn-success mr-2">+</button>
                                        {food.amount}
                                        <button
                                            onClick={() => {
                                                this.props.dispatch(tangGiamFoodAction(-1, food.name))
                                            }}
                                            className="btn btn-danger ml-2">-</button>
                                    </td>
                                    <td>{food.price} $</td>
                                    <td>{(food.amount * food.price).toLocaleString()} $</td>
                                </tr>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td style={{ fontWeight: 'bold' }} colSpan="3" className="text-center">Tổng Tiền</td>
                            <td>{
                                this.props.danhSachFood.reduce((tongTien, food, index) => {
                                    return tongTien += food.price * food.amount
                                }, 0).toLocaleString()
                            } $
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachFood: state.Exburger.danhSachFood
    }
}

export default connect(mapStateToProps)(SelectFood)

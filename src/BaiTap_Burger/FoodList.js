import React, { Component } from 'react'
import Beef from './Beef'
import './burger.css'
import Cheese from './Cheese'
import Salad from './Salad'
import SelectFood from './SelectFood'

export default class FoodList extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-success mb-5">BÀI TẬP BURGER</h1>
                <div className="row">
                    <div className="col-6">
                        <h3 className="text-center">Bánh burger của bạn</h3>
                        <div className="breadTop"></div>
                        <Salad/>
                        <Cheese/>
                        <Beef/>
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-6">
                        <h3 className="text-center text-success">Chọn thức ăn</h3>
                        <SelectFood/>
                    </div>
                </div>
            </div>
        )
    }
}

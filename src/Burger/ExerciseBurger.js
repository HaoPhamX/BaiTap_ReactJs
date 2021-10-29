import React, { Component } from 'react'
import Beef from './Beef'
import './burger.css'
import Cheese from './Cheese'
import SelectList from './SelectList'
import Salad from './Salad'

export default class ExerciseBurger extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">BÀI TẬP BURGER</h1>
                <div className="row">
                    <div className="col-6">
                        <h3 className="text-center">BURGER</h3>
                        <div className="breadTop"></div>
                        <Salad />
                        <Cheese />
                        <Beef />
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-6">
                       <SelectList/>
                    </div>
                </div>
            </div>
        )
    }
}

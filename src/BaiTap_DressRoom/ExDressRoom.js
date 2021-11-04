import React from 'react'
import DressRoom from './DressRoom'
import Header from './Header'
import Model from './Model'
import './style.css'

export default function ExDressRoom() {
    return (
        <div className="container-fluid">
          <Header/>
            <div className="row">
                <div className="col-md-8">
                    <DressRoom />
                </div>
                <div className="col-md-4">
                  <Model/>
                </div>
            </div>
        </div>
    )
}

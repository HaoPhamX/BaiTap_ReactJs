import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'


export default function Model() {

    const danhSachDo = useSelector(state => state.ExDressRoomReducer.danhSachDo);

    return (
        <Fragment>
            <div style={{ zIndex: '4' }} className="contain">
                <div className="body" />
                <div className="model" />
                {
                    danhSachDo.map((item, index) => {
                        switch (item.type) {
                            case "hairstyle": {
                                return <div key={index} className="hairstyle" style={{ width: 1000, height: 1000, background: `url("${item.img}")`, position: 'absolute', top: '-74.5%', right: ' -56%', transform: 'scale(0.15)', zIndex: '4' }} />
                            }
                            case "necklaces": {
                                return <div key={index} className="necklace" style={{ width: 500, height: 1000, background: `url("${item.img}")`, position: 'absolute', bottom: '-38%', right: '-3%', transform: 'scale(0.5)', zIndex: 4 }} />
                            }
                            case "topclothes": {
                                return <div key={index} className="bikinitop" style={{ width: 500, height: 500, background: `url("${item.img}")`, position: 'absolute', top: '-9%', left: '-6%', zIndex: 3, transform: 'scale(0.5)' }} />
                            }
                            case "botclothes": {
                                return <div key={index} className="bikinibottom" style={{ width: 500, height: 1000, background: `url("${item.img}")`, position: 'absolute', top: '-30%', left: '-6%', zIndex: 2, transform: 'scale(0.5)' }} />
                            }
                            case "handbags": {
                                return <div key={index} className="handbag" style={{ width: 500, height: 1000, background: `url("${item.img}")`, position: 'absolute', bottom: '-40%', right: '-2%', transform: 'scale(0.5)', zIndex: 4 }} />
                            }
                            case "shoes": {
                                return <div key={index} className="feet" style={{ width: 500, height: 1000, background: `url("${item.img}")`, position: 'absolute', bottom: '-37%', right: '-2.3%', transform: 'scale(0.5)', zIndex: 1 }} />
                            }
                            case "background": {
                                return <div key={index} className="background" style={{ backgroundImage: `url("${item.img}")` }} />
                            }

                            default: return ''
                        }
                    })
                }







            </div>
        </Fragment>
    )
}

import React, { Fragment } from 'react'
import dataDressRoom from '../data/Data.json'
import { useDispatch } from 'react-redux';
import { thuDoAction } from '../redux/Actions/ActionDressRoom';

export default function DressRoom() {


    const dispatch = useDispatch();

    return (
        <Fragment>
            <ul className="nav nav-pills">
                {
                    dataDressRoom.navPills.map((item, index) => {
                        let classActive = "";
                        if (index === 0) {
                            classActive = "active"
                        }
                        return <li className="nav-item" key={index}>
                            <a className={`nav-link btn-default ${classActive}`} data-toggle="pill" href={`#${item.tabName}`}>{item.showName}</a>
                        </li>
                    })
                }
            </ul>
            <div className="well">
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane container active" id="tabTopClothes">
                        <div className="container">
                            <div className="row">
                                {

                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "topclothes") {
                                            return <div className="col-md-3" key={index}>
                                                <div style={{ position: 'relative' }} className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => {
                                                            dispatch(thuDoAction(item))
                                                        }
                                                        }>Thử đồ
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBotClothes">
                        <div className="container">
                            <div className="row">
                                {
                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "botclothes") {
                                            return <div className="col-md-3" key={index}>
                                                <div className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => { dispatch(thuDoAction(item)) }
                                                        }>Thử đồ</button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabShoes">
                        <div className="container">
                            <div className="row">
                                {
                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "shoes") {
                                            return <div className="col-md-3" key={index}>
                                                <div className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => { dispatch(thuDoAction(item)) }
                                                        }>Thử đồ</button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHandBags">
                        <div className="container">
                            <div className="row">
                                {
                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "handbags") {
                                            return <div className="col-md-3" key={index}>
                                                <div className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => { dispatch(thuDoAction(item)) }
                                                        }>Thử đồ</button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabNecklaces">
                        <div className="container">
                            <div className="row">
                                {
                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "necklaces") {
                                            return <div className="col-md-3" key={index}>
                                                <div className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => { dispatch(thuDoAction(item)) }
                                                        }>Thử đồ</button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHairStyle">
                        <div className="container">
                            <div className="row">
                                {
                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "hairstyle") {
                                            return <div className="col-md-3" key={index}>
                                                <div className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => { dispatch(thuDoAction(item)) }
                                                        }>Thử đồ</button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBackground">
                        <div className="container">
                            <div className="row">
                                {
                                    dataDressRoom.tabPanes.map((item, index) => {
                                        if (item.type === "background") {
                                            return <div className="col-md-3" key={index}>
                                                <div className="card text-center">
                                                    <img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
                                                    <h4><b>{item.name}</b></h4>
                                                    <button
                                                        onClick={() => { dispatch(thuDoAction(item)) }
                                                        }>Thử đồ</button>
                                                </div>
                                            </div>
                                        }
                                        return '';
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >

    )
}

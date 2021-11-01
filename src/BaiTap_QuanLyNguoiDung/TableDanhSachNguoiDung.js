import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUserAction, editUserAction } from '../redux/Actions/ActionsBurgerReducer'

class TableDanhSachNguoiDung extends Component {


    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Họ tên</th>
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Loại người dùng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachNguoiDung.map((person, item) => {
                                return <tr key={item}>
                                    <td>{person.stt}</td>
                                    <td>{person.taiKhoan}</td>
                                    <td>{person.hoTen}</td>
                                    <td>{person.matKhau}</td>
                                    <td>{person.email}</td>
                                    <td>{person.sdt}</td>
                                    <td>{person.loaiNguoiDung}</td>
                                    <td>
                                        <button onClick={() => {
                                            let errors = {...this.props.state.errors}
                                            for (let i in errors) {
                                                errors[i] = ''
                                            }
                                            this.props.setStateIsInValid(true);
                                            this.props.setStateErrors(errors);
                                            this.props.setStateDisableUpdate(false);
                                            this.props.setStateDisableRegister(true);
                                            this.props.setStateDisableUser(true);
                                            this.props.dispatch(editUserAction(person.taiKhoan));

                                        }}
                                            className="btn btn-primary mr-2">Chỉnh sửa</button>
                                        <button onClick={() => {
                                            let errors = {...this.props.state.errors}
                                            let values = {...this.props.state.values}
                                            for (let i in values) {
                                                values[i] = ''
                                                if (i === "loaiNguoiDung") {
                                                    values[i] = "Khách Hàng"
                                                }
                                            }
                                            for (let i in errors) {
                                                errors[i] = ''
                                            }
                                            this.props.setStateIsInValid(true);
                                            this.props.setStateErrors(errors);
                                            this.props.setStateValues(values);
                                            this.props.setStateDisableUser(false);
                                            this.props.setStateDisableUpdate(true)
                                            this.props.setStateDisableRegister(false)
                                            this.props.dispatch(deleteUserAction(person.taiKhoan))
                                        }} className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachNguoiDung: state.ExQuanLyNguoiDung.danhSachNguoiDung,
        editUser: state.ExQuanLyNguoiDung.editUser,
    }
}


export default connect(mapStateToProps)(TableDanhSachNguoiDung)
import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung'
import { connect } from 'react-redux'

class BaiTapQuanLyNguoiDung extends Component {

    state = {
        disableUser: false,
        disableUpdate: true,
        disableRegister: false,
        isInvalid: true,
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            sdt: '',
            loaiNguoiDung: 'Khách Hàng'
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            sdt: ''
        }
    }
    setStateDisableUser = (disableUser) => {
        this.setState({
            disableUser: disableUser
        })
    }
    setStateDisableUpdate = (disableUpdate) => {
        this.setState({
            disableUpdate: disableUpdate
        })
    }
    setStateDisableRegister = (disableRegister) => {
        this.setState({
            disableRegister: disableRegister
        })
    }
    setStateValues = (values) => {
        this.setState({

            values: values
        })
    }

    setStateErrors = (errors) => {
        this.setState({
            errors: errors
        })
    }

    setStateIsInValid = (isInvalid) => {
        this.setState({
            isInvalid: isInvalid
        })
    }
    componentDidUpdate = (preProps, preState) => {
        if (preProps.editUser.taiKhoan !== this.props.editUser.taiKhoan) {
            this.setState({
                values: this.props.editUser
            })
        }
    }

    render() {
        return (
            <div>
                <h3 className="bg-dark text-white p-2">Form đăng Ký</h3>
                <div className="container-fluid">
                    <FormDangKy
                        state={this.state}
                        setStateValues={this.setStateValues}
                        setStateErrors={this.setStateErrors}
                        setStateIsInValid={this.setStateIsInValid}
                        setStateDisableUpdate={this.setStateDisableUpdate}
                        setStateDisableRegister={this.setStateDisableRegister}
                        setStateDisableUser={this.setStateDisableUser}
                    />
                </div>
                <h3 className="bg-dark text-white p-2 my-3">Danh sách người dùng</h3>
                <div className="container-fluid">
                    <TableDanhSachNguoiDung
                        state={this.state}
                        setStateValues={this.setStateValues}
                        setStateErrors={this.setStateErrors}
                        setStateIsInValid={this.setStateIsInValid}
                        setStateDisableUpdate={this.setStateDisableUpdate}
                        setStateDisableRegister={this.setStateDisableRegister}
                        setStateDisableUser={this.setStateDisableUser} />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editUser: state.ExQuanLyNguoiDung.editUser,
    }
}

export default connect(mapStateToProps)(BaiTapQuanLyNguoiDung)
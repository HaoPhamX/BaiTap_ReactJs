import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { registerAction, updateUserAction } from '../redux/Actions/ActionsBurgerReducer'


class FormDangKy extends Component {

    // kiểm tra nugời dùng nhập dữ liệu
    handleChangeValue = (e) => {
        let { name, value } = e.target;
        let newValues = { ...this.props.state.values, [name]: value };
        let newErrors = { ...this.props.state.errors };
        if (newValues[name] === '') {
            newErrors[name] = 'Vui Lòng Không Bỏ Trống';
        } else {
            newErrors[name] = ""
        }
        switch (name) {
            case "taiKhoan":
                const unserRegex = /^[a-zA-Z0-9]+$/;
                if (!unserRegex.test(value.toLocaleLowerCase())) {
                    newErrors[name] = "Vui lòng sử dụng chữ cái không dấu hoặc số"
                }
                else {
                    newErrors[name] = ""
                }
                break;
            case "matKhau":
                const nameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
                if (!nameRegex.test(value)) {
                    newErrors[name] = "Vui lòng nhập mật khẩu dài 6-12 ký tự, có ít nhất 1 ký tự chữ số, 1 chữ hoa, 1 chữ thường và 1 ký tự đặc biệt"
                } else {
                    newErrors[name] = ""
                }
                break;
            case "sdt":
                const numberRegex = /^[0-9]{10,16}$/;
                if (!numberRegex.test(value)) {
                    newErrors[name] = "Vui lòng nhập số dài từ 10-16 ký tự"
                } else {
                    newErrors[name] = ""
                }
                break;
            case "email":
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!emailRegex.test(value.toLocaleLowerCase())) {
                    newErrors[name] = "Vui lòng nhập đúng định dạng Email VD: abc@gmail.com"
                } else {
                    newErrors[name] = ""
                }
                break;
            default:
                break;
        }
        this.props.setStateValues(newValues);
        this.props.setStateErrors(newErrors);
        this.props.setStateIsInValid(true);
    }
    //kiểm tra dữ liệu người dùng
    kiemTraDuLieuNguoiDung = () => {
        let values = { ...this.props.state.values };
        let errors = { ...this.props.state.errors };
        let valid = this.props.state.isInvalid;
        for (let key in values) {
            if (values[key] === '') {
                errors[key] = 'Không được Bỏ trống'
                valid = false;
            }
        }
        for (let key in errors) {
            if (errors[key] !== '') {
                valid = false;
            }
        }
        console.log(valid)
        this.props.setStateValues(values);
        this.props.setStateErrors(errors);
        return valid
    }
    //kiểm tra điều kiện nút đăng kí 
    handleSubmit = (event) => {
        let values = { ...this.props.state.values };
        let { taiKhoan, hoTen, matKhau, email, sdt, loaiNguoiDung } = { ...this.props.state.values }
        event.preventDefault();
        if (!this.kiemTraDuLieuNguoiDung()) {
            this.props.setStateIsInValid(true)
            Swal.fire({
                icon: 'error',
                title: 'Đăng kí không thành công',
                text: 'Vui lòng nhập đúng thông tin',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        else {
            let newUserList = {
                stt: this.props.stt,
                taiKhoan: taiKhoan,
                hoTen: hoTen,
                matKhau: matKhau,
                email: email,
                sdt: sdt,
                loaiNguoiDung: loaiNguoiDung
            }
            for (let key in values) {
                values[key] = '';
                if (key === "loaiNguoiDung") {
                    values[key] = "Khách Hàng"
                }
            }
            this.props.setStateValues(values)
            Swal.fire({
                icon: 'success',
                title: 'Đăng kí thành công',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.dispatch(registerAction(newUserList));
        }
    }
    //kiểm tra nút cập nhật
    handleUpdate = () => {
        let values = { ...this.props.state.values };
        let valuesUpdate = { ...this.props.state.values };
        if (!this.kiemTraDuLieuNguoiDung()) {
            Swal.fire({
                icon: 'error',
                title: 'Cập Nhật không thành công',
                text: 'Vui lòng nhập đúng thông tin',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        } else {
            for (let key in values) {
                values[key] = '';
                if (key === "loaiNguoiDung") {
                    values[key] = "Khách Hàng"
                }
            }
            this.props.setStateValues(values)
            Swal.fire({
                icon: 'success',
                title: 'Cập nhật thành công',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.dispatch(updateUserAction(valuesUpdate))
        }
    }
    //kiểm tra tài khoản có tồn tại trên redux không
    checkTaiKhoan = () => {
        let errorsUpdate = { ...this.props.state.errors }
        let danhSachNguoiDung = [...this.props.danhSachNguoiDung];
        let valid = this.props.state.isInvalid;
        let index = danhSachNguoiDung.findIndex(user => user.taiKhoan === this.props.state.values.taiKhoan);
        if (this.props.state.values.taiKhoan === '') {
            errorsUpdate.taiKhoan = "Tài khoản không được bỏ trống";
            valid = false;
        }
        if (index !== -1) {
            errorsUpdate.taiKhoan = "Tên tài khoản này đã có người sử dụng";
            valid = false;
        }
        this.props.setStateErrors(errorsUpdate)
        this.props.setStateIsInValid(valid)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Tài Khoản</label>
                                {
                                    !this.props.state.disableUser ?
                                        <input
                                            onBlur={(event) => {
                                                this.handleChangeValue(event);
                                                this.checkTaiKhoan();
                                            }}
                                            onChange={this.handleChangeValue}
                                            value={this.props.state.values.taiKhoan} type="text" className="form-control" name="taiKhoan" />
                                        :
                                        <input disabled
                                            onBlur={(event) => {
                                                this.handleChangeValue(event);
                                                this.checkTaiKhoan();
                                            }}
                                            onChange={this.handleChangeValue}
                                            value={this.props.state.values.taiKhoan} type="text" className="form-control" name="taiKhoan" />
                                }
                                <span className="text-danger">{this.props.state.errors.taiKhoan}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Họ tên</label>
                                <input
                                    onBlur={this.handleChangeValue}
                                    onChange={this.handleChangeValue}
                                    value={this.props.state.values.hoTen} type="text" className="form-control" name="hoTen" />
                                <span className="text-danger">{this.props.state.errors.hoTen}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <input
                                    onBlur={this.handleChangeValue}
                                    onChange={this.handleChangeValue}
                                    value={this.props.state.values.matKhau} type="text" className="form-control" name="matKhau" />
                                <span className="text-danger">{this.props.state.errors.matKhau}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input
                                    onBlur={this.handleChangeValue}
                                    onChange={this.handleChangeValue}
                                    value={this.props.state.values.sdt}
                                    type="text" className="form-control" name="sdt" />
                                <span className="text-danger">{this.props.state.errors.sdt}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    onBlur={this.handleChangeValue}
                                    onChange={this.handleChangeValue}
                                    value={this.props.state.values.email}
                                    type="text" className="form-control" name="email" />
                                <span className="text-danger">{this.props.state.errors.email}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Mã loại người dùng</label>
                                <select name="loaiNguoiDung"
                                    onBlur={this.handleChangeValue}
                                    onChange={this.handleChangeValue}
                                    className="form-control">
                                    <option disabled>Vui lòng chọn!</option>
                                    <option>Khách Hàng</option>
                                    <option>Doanh Nghiệp</option>
                                </select>
                                <span></span>
                            </div>
                        </div>
                    </div >
                    {
                        !this.props.state.disableRegister ?
                            <button type="submit" onClick={this.checkTaiKhoan} className="btn btn-success ml-3">Đăng kí</button>
                            :
                            <button disabled type="submit"
                                onClick={(event) => {
                                    this.checkTaiKhoan(event)
                                    this.props.setStateDisableRegister(false)
                                }}
                                className="btn btn-success ml-3">Đăng kí</button>
                    }
                    {this.props.state.disableUpdate ?
                        <button disabled type="button"
                            onClick={() => {
                                this.handleUpdate()
                            }}
                            className="btn btn-primary ml-2">Cập nhật</button>
                        : <button type="button"
                            onClick={() => {
                                this.handleUpdate()
                                this.props.setStateDisableUpdate(true)
                                this.props.setStateDisableRegister(false)
                                this.props.setStateDisableUser(false);
                            }}
                            className="btn btn-primary ml-2">Cập nhật</button>
                    }
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachNguoiDung: state.ExQuanLyNguoiDung.danhSachNguoiDung,
        stt: state.ExQuanLyNguoiDung.stt
    }
}

export default connect(mapStateToProps)(FormDangKy)
import { DELETE_USER_QLND, EDIT_USER, REGISTER_QLND, UPDATE_USER } from "../Types/TypersBurgerReducer"

const initialState = {
    stt: 6,
    danhSachNguoiDung: [
        { stt: 1, taiKhoan: 'phamxuanhao1', hoTen: 'Phạm Xuân Hào', matKhau: '123@Adsadsa', email: 'phamxuanhao1297@gmail.com', sdt: '0339316911', loaiNguoiDung: 'Khách Hàng' },
        { stt: 2, taiKhoan: 'phamxuanhao2', hoTen: 'Phạm Xuân Hào', matKhau: '123@Adsadsa', email: 'phamxuanhao1297@gmail.com', sdt: '0339316911', loaiNguoiDung: 'Khách Hàng' },
        { stt: 3, taiKhoan: 'phamxuanhao3', hoTen: 'Phạm Xuân Hào', matKhau: '123@Adsadsa', email: 'phamxuanhao1297@gmail.com', sdt: '0339316911', loaiNguoiDung: 'Doanh Nghiệp' },
        { stt: 4, taiKhoan: 'phamxuanhao4', hoTen: 'Phạm Xuân Hào', matKhau: '123@Adsadsa', email: 'phamxuanhao1297@gmail.com', sdt: '0339316911', loaiNguoiDung: 'Khách Hàng' },
        { stt: 5, taiKhoan: 'phamxuanhao5', hoTen: 'Phạm Xuân Hào', matKhau: '123@Adsadsa', email: 'phamxuanhao1297@gmail.com', sdt: '0339316911', loaiNguoiDung: 'Doanh Nghiệp' }
    ],
    editUser: {}
}

export const ExQuanLyNguoiDung = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_QLND: {
            let index = state.danhSachNguoiDung.findIndex(user => user.taiKhoan === action.newUserList.taiKhoan);
            if (index !== -1) {
                return { ...state }
            }
            state.danhSachNguoiDung = [...state.danhSachNguoiDung, action.newUserList];

            state.stt = state.danhSachNguoiDung[state.danhSachNguoiDung.length - 1].stt + 1
            return { ...state }
        }

        case DELETE_USER_QLND: {
            let danhSachNguoiDungUpdate = [...state.danhSachNguoiDung];
            //tìm ra vị trí trùng với tài khoản trong redux
            let index = danhSachNguoiDungUpdate.findIndex(user => user.taiKhoan === action.taiKhoan);
            //giảm số thứ tự của user tại index + 1 và xóa user tại index
            if (index !== -1) {
                for (let i = index + 1; i < danhSachNguoiDungUpdate.length; i++) {
                    danhSachNguoiDungUpdate[i].stt -= 1;
                }
                danhSachNguoiDungUpdate.splice(index, 1);
            }
            //giảm số thứ tự stt
            state.stt -= 1;
            state.danhSachNguoiDung = danhSachNguoiDungUpdate;
            return { ...state }
        }

        case EDIT_USER: {
            return { ...state, editUser: state.danhSachNguoiDung.find(user => user.taiKhoan === action.taiKhoan) }
        }

        case UPDATE_USER: {
            let index = state.danhSachNguoiDung.findIndex(user => user.taiKhoan === state.editUser.taiKhoan)
            if (index !== -1) {
                state.danhSachNguoiDung[index] = action.user;
            }
            state.editUser = {stt: '', taiKhoan: '', hoTen: '', matKhau: '', email: '', sdt: '', loaiNguoiDung: 'Khách Hàng'};
            return { ...state, danhSachNguoiDung: [...state.danhSachNguoiDung] }
        }
        default:
            return { ...state }
    }
}

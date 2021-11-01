import { DELETE_USER_QLND, EDIT_USER, REGISTER_QLND, TANG_GIAM_FOOD, UPDATE_USER } from "../Types/TypersBurgerReducer"

export const tangGiamFoodAction = (number, name) => {
    return {
        type: TANG_GIAM_FOOD,
        number, name
    }
}

export const registerAction = (newUserList) => ({
    type: REGISTER_QLND,
    newUserList
})

export const deleteUserAction = (taiKhoan) => ({
    type: DELETE_USER_QLND,
    taiKhoan
})

export const editUserAction = (taiKhoan) => ({
    type: EDIT_USER,
    taiKhoan
})

export const updateUserAction = (user) => ({
    type: UPDATE_USER,
    user
})
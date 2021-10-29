import { TANG_GIAM_FOOD } from "../Types/TypersBurgerReducer";

let stateDefault = {
    danhSachFood: [
        { name: "Salad", amount: 1, price: "10" },
        { name: "Cheese", amount: 1, price: "20" },
        { name: "Beef", amount: 1, price: "50" },
    ]
}

const Exburger = (state = stateDefault, action) => {
    switch (action.type) {
        case TANG_GIAM_FOOD: {
            let danhSachFoodUpdate = [...state.danhSachFood];
            let index = danhSachFoodUpdate.findIndex(food => food.name === action.name);
            if (index !== -1) {
                danhSachFoodUpdate[index].amount += action.number;
            }
            if (danhSachFoodUpdate[index].amount === 0) {
                danhSachFoodUpdate[index].amount = 1;
            }
            state.danhSachFood = danhSachFoodUpdate;
            return { ...state }
        }

        default: return { ...state };

    }
}
export default Exburger;
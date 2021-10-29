import { TANG_GIAM_FOOD } from "../types/TypesBurger";

const stateDefault = {
    listFood: [
        { name: 'salad', amount: 1, price: 10 },
        { name: 'cheese', amount: 1, price: 20 },
        { name: 'beef', amount: 1, price: 50 },
    ]

}

const BurgerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case TANG_GIAM_FOOD:
            let listFoodUpdate = [...state.listFood];
            let index = listFoodUpdate.findIndex(food => food.name === action.name);
            if (index !== -1) {
                listFoodUpdate[index].amount += action.number;
            }
            if (listFoodUpdate[index].amount <= 0) {
                listFoodUpdate[index].amount = 1;
            }
            state.listFood = listFoodUpdate;

            return { ...state };

        default: return { ...state };
    }
}
export default BurgerReducer;
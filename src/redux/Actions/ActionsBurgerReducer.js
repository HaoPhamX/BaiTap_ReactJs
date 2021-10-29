import { TANG_GIAM_FOOD } from "../Types/TypersBurgerReducer"

export const tangGiamFoodAction = (number,name)=>{
    return{
        type:TANG_GIAM_FOOD,
        number,name
    }
}
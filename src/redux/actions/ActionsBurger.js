import { TANG_GIAM_FOOD } from "../types/TypesBurger"

export const changeMount = (number,name) =>{
    return {
        type:TANG_GIAM_FOOD,
        number,name
    }
}
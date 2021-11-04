import {combineReducers} from 'redux'
import Exburger from './ExBurger';
import { ExDressRoomReducer } from './ExDressRoomReducer';
import { ExQuanLyNguoiDung } from './ExQuanLyNguoiDung';

const rootReducer = combineReducers({
    Exburger,
    ExQuanLyNguoiDung,
    ExDressRoomReducer
})
export default rootReducer;
import {combineReducers} from 'redux'
import Exburger from './ExBurger';
import { ExQuanLyNguoiDung } from './ExQuanLyNguoiDung';

const rootReducer = combineReducers({
    Exburger,
    ExQuanLyNguoiDung
})
export default rootReducer;
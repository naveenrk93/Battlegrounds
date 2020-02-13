import {combineReducers} from "redux";
import accessTokenReducer from './AccessTokenReducer';
import cardsReducer from "./CardsReducer";
import tabReducer from './TabReducer'

export default combineReducers({
    accessToken: accessTokenReducer,
    cards : cardsReducer,
    currentTab : tabReducer
});
import { combineReducers } from "redux";
import position from "./position";
import game from "./game";

export default combineReducers({position, game});
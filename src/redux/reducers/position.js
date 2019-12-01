import { DEVICE_POSITION } from "../actionTypes";

const initialState = {
    x: NaN,
    y: NaN
}

export default function(state = initialState, action) {
    switch (action.type) {
        case DEVICE_POSITION: {
            const { x, y} = action.payload;
            return {
                ...state,
                x: x,
                y: y
            }
        }
        default:
            return state;
    }
}


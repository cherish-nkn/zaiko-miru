import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../../constant';

const initialState = {
    isOpen: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case OPEN_SIDEBAR:
        return {
            ...state,
            isOpen: payload,
        };
    case CLOSE_SIDEBAR:
        return {
            ...state,
            isOpen: payload,
        };
    default:
        return state;
    }
};

import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../../constant';

export openSidebar = () => dispatch => {
    dispatch({
        type: OPEN_SIDEBAR,
        payload: true,
    });
};

export closeSidebar = () => dispatch => {
    dispatch({
        type: CLOSE_SIDEBAR,
        payload: false,
    })
};

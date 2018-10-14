import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
});

const AppHeader = props => (
    <AppBar
        className={classNames(props.classes.appBar, props.isOpen && props.classes.appBarShift)}
    >
        <Toolbar disableGutters={!props.isOpen}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={props.handleDrawerOpen}
                className={classNames(props.classes.menuButton, props.isOpen && props.classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography  variant="title" color="inherit" noWrap>
                {props.title}
            </Typography>
        </Toolbar>
    </AppBar>
);

AppHeader.propTypes = {
    classes: PropTypes.shape().isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
}

export default withStyles(styles)(AppHeader);

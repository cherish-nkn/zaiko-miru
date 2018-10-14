import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { mailFolderListItems, otherMailFolderListItems } from './MenuItems'; 

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

const AppSidebar = props => (
    <Drawer
        variant="persistent"
        anchor="left"
        open={props.isOpen}
        classes={{
          paper: props.classes.drawerPaper,
        }}
      >
        <div className={props.classes.drawerHeader}>
            <IconButton onClick={props.handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
    </Drawer>
);

AppSidebar.propTypes = {
    classes: PropTypes.shape().isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(AppSidebar);

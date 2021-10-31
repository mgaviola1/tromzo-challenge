import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  HashRouter as Router,
  Link as RouterLink,
} from 'react-router-dom';

const Menu = () => {
  const renderLink = (to) => (
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      })
  );

  return (
    <div>
      <List>
        <Router>
          <ListItem button component={renderLink('/')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>  
        </Router>
      </List>
    </div>
  );
};

export default Menu;
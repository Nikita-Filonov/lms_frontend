import * as React from 'react';
import {useState} from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {NavigationNavbar} from "./NavigationNavbar";
import {CustomDrawer, CustomDrawerHeader} from "../../Styles/Blocks";


export const NavigationDrawer = ({children}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => setOpen(true);
  const onDrawerClose = () => setOpen(false);

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <NavigationNavbar open={open} onDrawerOpen={onDrawerOpen}/>
      <CustomDrawer variant="permanent" open={open}>
        <CustomDrawerHeader>
          <IconButton onClick={onDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </CustomDrawerHeader>
        <Divider/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
            </ListItemButton>
          ))}
        </List>
        <Divider/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
            </ListItemButton>
          ))}
        </List>
      </CustomDrawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <CustomDrawerHeader/>
        {children}
      </Box>
    </Box>
  );
}

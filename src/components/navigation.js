// enter "rcc" se tu dong duoc import code ben duoi vao
//import React, { Component } from 'react'

// export default class Navigation extends Component {
 
// import { Link } from 'react-router-dom';
// import React from 'react'
//   import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
// import { Navbar, NavItem, Icon } from 'react-materialize';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
// import ArticleIcon from '@mui/icons-material/Article';
// import CallIcon from '@mui/icons-material/Call';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// export default function Navigation() {
//   return (

 
//     <div>
//       <Navbar
//   alignLinks="right"
//   brand={<a className="brand-logo" href="/">Film Cards</a>}
//   id="mobile-nav"
//   menuIcon={<MenuIcon/>}
//   options={{
//     draggable: true,
//     edge: 'left',
//     inDuration: 250,
//     onCloseEnd: null,
//     onCloseStart: null,
//     onOpenEnd: null,
//     onOpenStart: null,
//     outDuration: 200,
//     preventScrolling: true
//   }}
// >
// <NavItem href='/addFilm'>
// <HomeIcon left/>add
// </NavItem>
// <NavItem href='/'>
// <HomeIcon left/>Home
// </NavItem>
// <NavItem href='/about'>
// <InfoIcon left/>About
// </NavItem>
// <NavItem href='/news'>
// <ArticleIcon left/>News
// </NavItem>
// <NavItem href='/contact'>
// <CallIcon left/>Contact
// </NavItem>

// <NavItem href='/user'>
// <GroupAddIcon left/>Add User
// </NavItem>       
//  </Navbar>
//     </div>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { NavItem } from 'react-materialize';
const pages = ['Home', 'About', 'News'];

function ResponsiveAppBar() {
  const {user, logOut} = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleSignOut = async ()=>{
  try {
    await logOut()
  } catch (error) {
    console.log(error);
  }
}
  const [anchorElNav, setAnchorElNav] = React.useState(null);
   const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
<Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Home</Typography>
                  </Link>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseNavMenu}>
                  <Link to={`/about`} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">About</Typography>
                  </Link>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseNavMenu}>
                  <Link to={`/news`} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">News</Typography>
                  </Link>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseNavMenu}>
                  <Link to={`/contact`} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Contact</Typography>
                  </Link>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => ( */}
              <Button href='/' onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Home
              </Button>
              <Button href='/about' onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              About
              </Button>
              <Button href='/news' onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              News
              </Button>
              <Button href='/contact' onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Contact
              </Button>
             
          {/* ))} */}
        </Box>
       
        <Box sx={{ flexGrow: 0 }}>
            {user?.displayName?(
              <div>
              <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user.email} src={user.photoURL} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
             <MenuItem  onClick={handleCloseUserMenu}>
              <Typography textAlign="center" ><Link to='/dashboard' style={{textDecoration:"none"}}>Dashboard</Link></Typography>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
              <Typography textAlign="center" ><Link to='/add' style={{textDecoration:"none"}}>Add New Film</Link></Typography>
              </MenuItem>
              <MenuItem>
              <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
              </MenuItem>
            </Menu>
                </div>
              ):(
                <Link to='/login' style={{textDecoration:"none"}} >
                  <Button 
                sx={{ my: 2,  color: 'white', display: 'block' }} 
                >
                  Sign in
                  </Button>
                  </Link>
               )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;



    

  



//-------------------------------------------------
//   export default function Navigation() {
//   const {theme, toggle, dark } = useContext(ThemeContext)

//     return (
//       <div>
//         <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
       
            
//             <ul>
              
//                <li><a className='active'><Link to="/">Home</Link></a></li>
//                <li><a href='#'>News</a></li>
//                <li><a href='#'>About</a></li>
//                <li><a><Link to="/contact">Contact</Link></a></li>
//             </ul>
//             <div style={{position: 'relative'}}>
//             <a className='switch-mode' href='#' onClick={toggle}
//           style={{
//             backgroundColor: theme.backgroundColor,
//             color: theme.color,
//             outline: 'none'
            
            
            
//           }} data-testid="toggle-theme-btn"
//         >
//           Switch Nav to {!dark ? 'Dark' : 'Light'} mode
//          </a>
// </div>
          
        
       
//   </nav>
//       </div>
//     )
  
// } 

//-----------------------------------------------------

// import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
// export default function Navigation() {
//   const { theme, toggle, dark } = useContext(ThemeContext)
  
//   return (
// <div>
//   <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//     <ul>
//       <li><a className='active' href='#'>Home</a></li>
//       <li><a href='#'>News</a></li>
//       <li><a href='#'>About</a></li>
//       <li><a href='#'>Contact</a></li>
//     </ul>
//     <a className='switch-mode' href='#' onClick={toggle}>
//       Switch Nav to {!dark ? 'Dark' : 'Light'} mode
//     </a>
//   </nav>
// </div>
//   )
// }

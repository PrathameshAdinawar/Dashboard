import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Countup,{ useCountUp } from 'react-countup';
import Grid from '@mui/material/Grid';
import ReactApexChart from "react-apexcharts";


const drawerWidth = 280;


const Opt =()=>{
  const[options,setObject] = React.useState({
   
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: 'Points',
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
      
          }
        }
      }
    
  })


 const[series,setSeries] = React.useState([{
  
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  
 }])

 return(
  <ReactApexChart options={options} series={series} type="line" height={350} />
 )
}
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F7FAFF',
  borderRadius: 30,
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.black, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'grey',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function ResponsiveDrawer(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="dark">
            <MailIcon fontSize="large"/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />

      <List>
        {['Home', 'About', 'Mail Box', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex', bgcolor: '#F7FAFF', padding:2.2}}>
      
      <AppBar
        position="absolute"
        elevation="0"
        sx={{
          width: { sm: `calc(98% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: 137,
          marginTop: 5,
          paddingRight:3,
          marginRight:3,
          paddingTop: 4,
          bgcolor: '#fff',
          borderRadius: 3,
        }}
      >
        <Toolbar>
          <IconButton
            color="dark"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'black',fontSize:"20px",padding:1 }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', xs: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="dark">
              <Badge badgeContent={4} color="error">
                <MailIcon fontSize="large"/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="dark"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon fontSize="large"/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="dark"
            >
              <AccountCircle fontSize="large"/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              border: 0,
              width: drawerWidth,
              bgcolor: '#F7FAFF',
              padding:0,
              margin:0
            },
          }}
          open
        >
          
          <Typography sx={{fontSize:20,paddingTop:5}}>
            DashBoard
          </Typography>
          {drawer }
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: 24,
          bgcolor: 'white',
          maxheight: 'auto',
          borderRadius:1
        }}
      >
        {/* <Toolbar /> */}
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
  <Grid item xs={6} lg={3}>
  <Card sx={{bgcolor:'#3B76EF',height:180,borderRadius:2,transition:'all 0.5s ease'  }} className='cards'>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
          Total Income
        </Typography>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 34 }}>
          $<Countup end={500} duration={3}/>
        </Typography>
   
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={6} lg={3}>
  <Card sx={{bgcolor:'#63C7FF',height:180 ,borderRadius:2 ,transition:'all 0.5s ease' }} className='cards'>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
          Total Income
        </Typography>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 34 }}>
          $<Countup end={500} duration={3}/>
        </Typography>
   
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={6} lg={3}>
  <Card  sx={{bgcolor:'#A66DD4',height:180,borderRadius:2, transition:'all 0.5s ease'  }} className='cards'>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
          Total Income
        </Typography>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 34 }}>
          $<Countup end={500} duration={3}/>
        </Typography>
   
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={6} lg={3}>
  <Card sx={{bgcolor:'#6DD4B1',height:180,borderRadius:2 ,transition:'all 0.5s ease'  }} className='cards'>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
          Total Income
        </Typography>
        <Typography gutterBottom sx={{ color: 'white', fontSize: 34 }}>
          $<Countup end={500} duration={3}/>
        </Typography>
   
      </CardContent>
    </Card>
  </Grid>
</Grid>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 } } sx={{padding:3, marginTop:3}}>
  <Grid item xs={6} lg={6} sx={{bgcolor: '#F7FAFF', borderRadius:3}}>
    <Typography sx={{fontSize:22, paddingLeft:1,paddingTop:1}}>AP and AR Balance</Typography>
    <Opt/>
  </Grid>
 </Grid>       
  
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;

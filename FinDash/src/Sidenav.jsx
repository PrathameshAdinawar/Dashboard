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
import Countup, { useCountUp } from 'react-countup';
import Grid from '@mui/material/Grid';
import ReactApexChart from "react-apexcharts";
import Chart from 'chart.js/auto';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidth = 280;

const Fchart8 = () => {
  const [options, setObject] = React.useState({

    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },

    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    yaxis: {
      stepSize: 20
    },
    xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016']
    }

  })


  const [series, setSeries] = React.useState([{

    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }, {
    name: 'Series 2',
    data: [20, 30, 40, 80, 20, 80],
  }, {
    name: 'Series 3',
    data: [44, 76, 78, 13, 43, 10],

  }])




  return (
    <ReactApexChart options={options} series={series} type="radar" height={350} />
  )
}

const Fchart7 = () => {
  const [options, setObject] = React.useState({

    chart: {
      type: 'candlestick',
      height: 360
    },
    title: {
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }


  })


  const [series, setSeries] = React.useState([{



    data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47]
    },
    {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612]
    },
    {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
      x: new Date(1538825400000),
      y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
      x: new Date(1538827200000),
      y: [6588.86, 6600, 6580, 6593.4]
    },
    {
      x: new Date(1538829000000),
      y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
      x: new Date(1538830800000),
      y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
      x: new Date(1538832600000),
      y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
      x: new Date(1538834400000),
      y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
      x: new Date(1538836200000),
      y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
      x: new Date(1538838000000),
      y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
      x: new Date(1538839800000),
      y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
      x: new Date(1538841600000),
      y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
      x: new Date(1538843400000),
      y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
      x: new Date(1538845200000),
      y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
      x: new Date(1538847000000),
      y: [6602, 6607, 6596.51, 6599.95]
    },
    {
      x: new Date(1538848800000),
      y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
      x: new Date(1538850600000),
      y: [6591.02, 6603.08, 6591, 6591]
    },
    {
      x: new Date(1538852400000),
      y: [6591, 6601.32, 6585, 6592]
    },
    {
      x: new Date(1538854200000),
      y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
      x: new Date(1538856000000),
      y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
      x: new Date(1538857800000),
      y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
      x: new Date(1538859600000),
      y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
      x: new Date(1538861400000),
      y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
      x: new Date(1538863200000),
      y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
      x: new Date(1538865000000),
      y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
      x: new Date(1538866800000),
      y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
      x: new Date(1538868600000),
      y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
      x: new Date(1538870400000),
      y: [6596.44, 6601, 6590, 6596.55]
    },
    {
      x: new Date(1538872200000),
      y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
      x: new Date(1538874000000),
      y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
      x: new Date(1538875800000),
      y: [6593.15, 6605, 6592, 6603.06]
    },
    {
      x: new Date(1538877600000),
      y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
      x: new Date(1538879400000),
      y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
      x: new Date(1538881200000),
      y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
      x: new Date(1538883000000),
      y: [6603.85, 6605, 6600, 6604.07]
    },
    {
      x: new Date(1538884800000),
      y: [6604.98, 6606, 6604.07, 6606]
    }]


  }])




  return (
    <ReactApexChart options={options} series={series} type="candlestick" height={350} width={99 + '%'} />
  )
}


const Fchart6 = () => {
  const [options, setObject] = React.useState({

    chart: {
      width: 380,
      height: 300,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    }, colors: ['#E793D3', '#78E3C3'],
    responsive: [{
      breakpoint: 480,

      chart: {
        width: 100
      },
      legend: {
        show: false
      }
    }],
    legend: {
      position: 'right',
      offsetY: 300,
      offsetX: -100,
      height: 230,
    }



  })


  const series = [67, 33]




  return (
    <ReactApexChart options={options} series={series} type="donut" width={400} />
  )
}

const Fchart5 = () => {
  const [options, setObject] = React.useState({

    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: '#F15B46'
          }, {
            from: -45,
            to: 0,
            color: '#FEB019'
          }]
        },
        columnWidth: '80%',
      }
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'Growth',
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + "%";
        }
      }
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
        '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
        '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
        '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
        '2013-07-01', '2013-08-01', '2013-09-01'
      ],
      labels: {
        rotate: -90
      }
    }

  })


  const [series, setSeries] = React.useState([{



    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
      5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
      48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
    ]


  }])

  return (
    <ReactApexChart options={options} series={series} type="bar" height={400} width={99 + "%"} />
  )
}


const Fchart4 = () => {
  const [options, setObject] = React.useState({

    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#6DD4B1', '#F0004C'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {

      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature'
      },
      min: 5,
      max: 40
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }


  })


  const [series, setSeries] = React.useState([{



    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]


  }])

  return (
    <ReactApexChart options={options} series={series} type="line" height={400} width={99 + "%"} />
  )
}


const Fchart3 = () => {
  const [options, setObject] = React.useState({

    chart: {
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 365,

        hollow: {
          margin: 0,
          size: '65%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 10,
          imageOffsetY: 0,
          position: 'front',

        },
        track: {
          background: '#F3F3F4',
          strokeWidth: '100%',
          margin: 0, // margin is in pixels

        },

        dataLabels: {
          show: true,
          name: {
            offsetY: 30,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            offsetY: -15,
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#222',
            fontSize: '26px',
            // show: true,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 1,
        gradientToColors: ['#ABE5A1', '#4D73EA'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 10,
        stops: [0, 90, 100],

      }
    },
    stroke: {

      lineCap: 'round'
    },
    labels: ['Percent'],
  },
  )

  const series = [48]
  return (
    <ReactApexChart options={options} series={series} type="radialBar" height={250} />
  );
}

const Fchart2 = () => {
  const [options, setObject] = React.useState({

    chart: {
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 365,

        hollow: {
          margin: 0,
          size: '65%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 10,
          imageOffsetY: 0,
          position: 'front',

        },
        track: {
          background: '#F3F3F4',
          strokeWidth: '100%',
          margin: 0, // margin is in pixels

        },

        dataLabels: {
          show: true,
          name: {
            offsetY: 30,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            offsetY: -15,
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#222',
            fontSize: '26px',
            // show: true,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 1,
        gradientToColors: ['#ABE5A1', '#4D73EA'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 10,
        stops: [0, 90, 100],

      }
    },
    stroke: {

      lineCap: 'round'
    },
    labels: ['Percent'],
  },
  )

  const series = [67]
  return (
    <ReactApexChart options={options} series={series} type="radialBar" height={250} />
  );
}


const Fchart1 = () => {
  const [options, setObject] = React.useState({

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


  const [series, setSeries] = React.useState([{

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

  return (
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
            <MailIcon fontSize="large" />
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

      <List className='drawers'>
          {/* {['Home', 'About', 'Product', 'Form','Settings'].map((text, index) => ( */}
            <ListItem  disablePadding sx={{ display: 'block' }} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                   px: 2.5,
                  color:'#676884'
                }}  onClick={()=>{nav('/')
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <HomeIcon sx={{color:'#A5ADC6'}} />
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            {/*  */}
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                   color:'#676884'
                } } onClick={()=>{nav('/about')}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <InboxIcon sx={{color:'#A5ADC6'}} />
                </ListItemIcon>
                <ListItemText primary='About' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            {/*  */}
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                   color:'#676884'
                }} onClick={()=>{nav('/product')}}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }} 
                >
                   <HandshakeIcon sx={{color:'#A5ADC6'}}/>
                </ListItemIcon>
                <ListItemText primary='Join Us ' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            {/*  */}
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                   color:'#676884'
                }} onClick={()=>{nav('/form')}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <RecentActorsIcon sx={{color:'#A5ADC6'}} />
                </ListItemIcon>
                <ListItemText primary='Investors' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            {/*  */}
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                   color:'#676884'
                }} onClick={()=>{nav('/settings')}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <SettingsIcon sx={{color:'#A5ADC6'}}/>
                </ListItemIcon>
                <ListItemText primary='Settings' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: '#F7FAFF', padding: 2.2 }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        elevation="0"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: 130,
          marginTop: 4,
          paddingRight: 3,
          marginRight: 0,
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
            sx={{ mr: 2, display: { md: 'none' } }}
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
              sx={{ color: 'black', fontSize: "20px", padding: 1 }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', xs: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="dark">
              <Badge badgeContent={4} color="error">
                <MailIcon fontSize="medium" />
              </Badge>
            </IconButton>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="dark"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon fontSize="medium" />
              </Badge>
            </IconButton>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="dark"
            >
              <AccountCircle fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Grid sx={{ backgroundColor: 'white', margin: 4, marginTop: 5, marginBottom: 0, padding: 4 }}>
            <div class='logo'>

            </div>
          </Grid>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              border: 0,
              width: drawerWidth,
              bgcolor: '#F7FAFF',
              padding: 0,
              margin: 0
            },
          }}
          open
        >

          <Grid sx={{ backgroundColor: 'white', margin: 4, marginTop: 5, marginBottom: 0, padding: 4 }}>
            <div class='logo'>

            </div>
          </Grid>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginTop: 24,
          bgcolor: 'white',
          maxheight: 'auto',
          borderRadius: 1
        }}
      >
        <Box sx={{
          paddingTop: 4,
          paddingLeft: 4,
          paddingRight: 4,
        }}>
          {/* <Toolbar /> */}

          <Grid container rowSpacing={{md:3,xl:1}} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Card sx={{ bgcolor: '#3B76EF', height: 185, borderRadius: 2.5, transition: 'all 0.5s ease', boxShadow: 0 }} className='cards'>
                <CardContent sx={{ marginTop: 3, marginLeft: 1.5 }}>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 17 + 'px', fontWeight: 600 }}>
                    Total Income
                  </Typography>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 30 + 'px', fontWeight: 900 }}>
                    $ <Countup end={579000} duration={3} />

                  </Typography>
                  <p class='save text-light'>Saved 25%</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Card sx={{ bgcolor: '#63C7FF', height: 185, borderRadius: 2.5, transition: 'all 0.5s ease', boxShadow: 0 }} className='cards'>
                <CardContent sx={{ marginTop: 3, marginLeft: 1 }}>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 17 + 'px', fontWeight: 600 }}>
                    Total Expences
                  </Typography>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 30 + 'px', fontWeight: 900 }}>
                    $ <Countup end={79000} duration={3} />

                  </Typography>
                  <p class='save text-light'>Saved 25%</p>

                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Card sx={{ bgcolor: '#A66DD4', height: 185, borderRadius: 2.5, transition: 'all 0.5s ease', boxShadow: 0 }} className='cards'>
                <CardContent sx={{ marginTop: 3, marginLeft: 1 }}>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 17 + 'px', fontWeight: 600 }}>
                    Cash On Hand
                  </Typography>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 30 + 'px', fontWeight: 900 }}>
                    $ <Countup end={92000} duration={3} />

                  </Typography>
                  <p class='save text-light'>Saved 25%</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Card sx={{ bgcolor: '#6DD4B1', height: 185, borderRadius: 2.5, transition: 'all 0.5s ease', boxShadow: 0 }} className='cards'>
                <CardContent sx={{ marginTop: 3, marginLeft: 1 }}>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 17 + 'px', fontWeight: 600 }}>
                    Net Profit Margin
                  </Typography>
                  <Typography gutterBottom sx={{ color: 'white', fontSize: 30 + 'px', fontWeight: 900 }}>
                    $ <Countup end={179000} duration={3} />

                  </Typography>
                  <p class='save text-light'>Saved 65%</p>

                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 3, bgcolor: '#fff' }}>
            
            <Grid item xs={12} md={12} xl={6} >
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0 }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 1, paddingTop: 1 }}>AP and AR Balance</Typography>
                <Fchart1 />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6} xl={3} >
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0 }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 1, paddingTop: 1, paddingBottom: 3 }}>% of Income Budget</Typography>
                <Fchart2 />
                <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ width: 9 + 'px', height: 9 + 'px', bgcolor: '#EDECFC', borderRadius: 50, alignSelf: 'center' }}></Typography>
                    <Typography sx={{ marginLeft: 1, alignSelf: 'center' }}>Blance</Typography>
                  </Typography>

                  <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ width: 9 + 'px', height: 9 + 'px', bgcolor: '#A4A1FB', borderRadius: 50, alignSelf: 'center' }}></Typography>
                    <Typography sx={{ marginLeft: 1, alignSelf: 'center' }}>Blance</Typography>
                  </Typography>
                </Typography>

                <Typography sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 1 }}>
                  <Typography sx={{ color: '#4D4F5C', opacity: '.5', fontSize: 15 + 'px', marginLeft: 2 }}>-$18,570</Typography>
                  <Typography sx={{ color: '#4D4F5C', opacity: '.5', fontSize: 15 + 'px', marginLeft: 2 }}>$31,430</Typography>
                </Typography>
                <hr class='line' />

                <Typography sx={{ color: '#3b86ff', display: 'flex', justifyContent: 'center', paddingTop: 1, paddingBottom: 1 }}>View Full Report</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6} xl={3} >
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0 }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 1, paddingTop: 1, paddingBottom: 3 }}>% of Expences Budget</Typography>
                <Fchart3 />
                <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ width: 9 + 'px', height: 9 + 'px', bgcolor: '#EDECFC', borderRadius: 50, alignSelf: 'center' }}></Typography>
                    <Typography sx={{ marginLeft: 1, alignSelf: 'center' }}>Blance</Typography>
                  </Typography>

                  <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ width: 9 + 'px', height: 9 + 'px', bgcolor: '#A4A1FB', borderRadius: 50, alignSelf: 'center' }}></Typography>
                    <Typography sx={{ marginLeft: 1, alignSelf: 'center' }}>Blance</Typography>
                  </Typography>
                </Typography>

                <Typography sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 1 }}>
                  <Typography sx={{ color: '#4D4F5C', opacity: '.5', fontSize: 15 + 'px', marginLeft: 2 }}>-$18,570</Typography>
                  <Typography sx={{ color: '#4D4F5C', opacity: '.5', fontSize: 15 + 'px', marginLeft: 2 }}>$31,430</Typography>
                </Typography>
                <hr class='line' />

                <Typography sx={{ color: '#3b86ff', display: 'flex', justifyContent: 'center', paddingTop: 1, paddingBottom: 1 }}>View Full Report</Typography>
              </Card>
            </Grid>

          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 3, bgcolor: '#fff' }}>
            <Grid item xs={12} md={6} xl={6}>
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0 }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 1, paddingTop: 1, paddingBottom: 3 }}>EBIT (Earnings Before Interest & Tax)</Typography>
                <Fchart4 />
              </Card>
            </Grid>

            <Grid item xs={12} md={6} xl={6}>
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0 }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 1, paddingTop: 1, paddingBottom: 3 }}>Cost of goods / Services</Typography>
                <Fchart5 />
              </Card>
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: 3, bgcolor: '#fff' }}>
            <Grid item xs={12} md={6} xl={3}>
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0, }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 1, paddingTop: 1, paddingBottom: 3 }}>Disputed vs Overdue Invoices</Typography>
                <Fchart6 />
                <Typography sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                  <Typography sx={{ width: 9 + 'px', height: 9 + 'px', bgcolor: '#E793D3', borderRadius: 50, alignSelf: 'center' }}></Typography>
                  <Typography sx={{ marginLeft: 1, alignSelf: 'center' }}>Disputed Invoice</Typography>
                </Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1.5 }}>
                  <Typography sx={{ width: 9 + 'px', height: 9 + 'px', bgcolor: '#78E3C3', borderRadius: 50, alignSelf: 'center' }}></Typography>
                  <Typography sx={{ marginLeft: 1, alignSelf: 'center' }}>Overdue Invoice</Typography>
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} xl={6}>
              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0, }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 3, paddingTop: 1, paddingBottom: 2 }}>Disputed Invoice</Typography>
                <Fchart7 />
              </Card>
            </Grid>

            <Grid item xs={12} md={6} xl={3}>

              <Card sx={{ bgcolor: '#F9FBFF', borderRadius: 3, padding: 2, boxShadow: 0, }}>
                <Typography sx={{ fontSize: 22, paddingLeft: 3, paddingTop: 1, paddingBottom: 2 }}>Disputed vs Overdue Invoices</Typography>
                <Fchart8 />
              </Card>

            </Grid>
          </Grid>
        </Box>
        <Grid sx={{ marginTop: 4, backgroundColor: '#F7FAFF' }}>
          <Typography sx={{ fontSize: 15, paddingTop: 6, paddingBottom: 1, display: 'flex', justifyContent: 'center', color: 'grey' }}>2024 © Influence - Designed by <span class='footer'> Prathamesh Adinawar</span> </Typography>
        </Grid>
      </Box>

    </Box>
  );
}


export default ResponsiveDrawer;

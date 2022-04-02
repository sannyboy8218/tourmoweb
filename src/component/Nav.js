import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MopedIcon from '@mui/icons-material/Moped';
import React from 'react';
export const Nav = [
    { 
        name:"Dashboard",
        link:"/home",
        icon:<DashboardIcon/>
    },
    {
        name:"User",
        link:"/user",
        icon : <PersonIcon/>
    },
    {
        name:"Motor",
        link:'/vehicle',
        icon:<MopedIcon/>
    }
]
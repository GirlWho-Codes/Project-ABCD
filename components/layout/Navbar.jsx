import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { SVG } from '..';
import {useRouter} from 'next/router';
import axios from 'axios';

const Navbar = ({ setIsSideBarOpen, label }) => {
   const router = useRouter()
   
   // useState hook
   const [anchorEl, setAnchorEl] = React.useState(null);

   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleSideBarToggle = () => {
      setIsSideBarOpen(true);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleLogout = async () => {
      router.push("/auth")
   };

   return (
      <nav className='my-1.5 sm:my-6'>
         <div className='flex justify-between items-start lg:items-center'>
            <Link href= "/">
               <a className='lg:hidden'>
                  <SVG.Logo width='70' />
               </a>
            </Link>
            <p className='text-xs sm:text-sm hidden lg:inline'>{label}</p>

            <div className='flex items-center space-x-1.5 lg:space-x-4'>
               {/* Dropdonwn */}
               <div>
                  <IconButton
                     id='basic-button'
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup='true'
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                  >
                     <SVG.CircledUser />
                  </IconButton>

                  <Menu
                     id='basic-menu'
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     MenuListProps={{
                        'aria-labelledby': 'basic-button',
                     }}
                  >
                     <MenuItem>...</MenuItem>
                  </Menu>
               </div>

               <IconButton onClick={handleLogout} className='hover:bg-red-50'>
                  <SVG.Logout />
               </IconButton>

               <IconButton onClick={handleSideBarToggle} className='lg:hidden'>
                  <SVG.MenuHamburger />
               </IconButton>
            </div>
         </div>
         <p className='text-xs sm:text-sm lg:hidden'>{label}</p>
      </nav>
   );
};

export default Navbar;

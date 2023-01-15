import { Backdrop, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SVG } from '..';

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
   const { asPath } = useRouter();

   // NavItem
   const NavItem = ({ icon, label, link }) => {
      return (
         <li>
            <Link href={link || `/${label.toLowerCase()}`}>
               <a>
                  <Button
                     className={`text-sm normal-case px-0 justify-start hover:text-softOrange hover:bg-transparent ${
                        asPath === (link || `/${label.toLowerCase()}`)
                           ? 'text-orange hover:!text-orange'
                           : asPath.includes(`/${label.toLowerCase()}`)
                           ? 'text-orange hover:!text-orange'
                           : 'text-[#4A5568]'
                     }`}
                     startIcon={icon}
                     fullWidth
                  >
                     {label}
                  </Button>
               </a>
            </Link>
         </li>
      );
   };

   // fuctions
   const handleBackdropClose = () => {
      setIsSideBarOpen(!isSideBarOpen);
   };

   return (
      <>
         <nav
            className={`w-[245px] min-w-[245px] bg-white pl-8 py-6 h-screen fixed overflow-y-auto z-20 transition-transform transform lg:transform-none ${
               isSideBarOpen ? 'translate-0' : '-translate-x-full'
            }`}
         >
            <SVG.Logo width='91.2' />

            <ul className='space-y-4 lg:space-y-4 mt-10 lg:mt-16'>
               <NavItem icon={<SVG.Home />} label='Home' link='/' />
               <NavItem icon={<SVG.Users />} label='Users' />
               <NavItem icon={<SVG.Products />} label='Products' />
               <NavItem icon={<SVG.Transactions />} label='Transactions' />
               <NavItem icon={<SVG.Adminstrators />} label='Adminstrators' />
               <NavItem
                  icon={<SVG.Roles />}
                  label='Roles and Priviledges'
                  link='/roles_and_priviledges'
               />
            </ul>
         </nav>

         {/* Backdrop */}
         <Backdrop
            open={isSideBarOpen}
            onClick={handleBackdropClose}
            sx={{ zIndex: '10' }}
         />
      </>
   );
};

export default Sidebar;

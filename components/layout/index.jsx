import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Index = ({ children, title, pageLabel }) => {
   const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

   return (
      <>
         <Head>
            <title>{`${title} | Lifesavers Admin Dashboard`}</title>
         </Head>

         <div className='flex w-full h-full '>
            <Sidebar
               isSideBarOpen={isSideBarOpen}
               setIsSideBarOpen={setIsSideBarOpen}
            />
            <div className='w-full px-4 sm:px-6 md:px-10 lg:px-6 lg:ml-[245px] xl:px-10'>
               <Navbar
                  label={pageLabel || title}
                  setIsSideBarOpen={setIsSideBarOpen}
               />
               <main className='pb-8 xl:py-6'>{children}</main>
            </div>
         </div>
      </>
   );
};

export default Index;

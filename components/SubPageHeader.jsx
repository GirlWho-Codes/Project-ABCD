import { Button } from '@mui/material';
import React from 'react';
import { SVG, SearchBox } from '.';
import { useRouter } from 'next/router';

const SubPageHeader = ({ label }) => {
   const router = useRouter();
   return (
      <div className=' mt-2 lg:mt-0'>
         <Button
            className='text-[#454D54] text-xs normal-case'
            startIcon={<SVG.ArrowBack2 />}
            variant='text'
            size='small'
            onClick={() => router.back()}
         >
            Back
         </Button>

         <div className='md:flex md:justify-between md:items-end'>
            <h3 className='text-[#191716] font-medium text-sm md:text-base lg:text-lg xl:text-xl tracking-[-0.025em] xl:leading-[48px] mt-1 lg:mt-6'>
               {label}
            </h3>
            <SearchBox />
         </div>
      </div>
   );
};

export default SubPageHeader;

import { Button, Chip } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { DataTable, Layout, SubPageHeader, SVG } from '../../../components';
import { tableSearch } from '../../../utils/tableSearch';

/**
 * This is a getServerSideProps function thats help fetch personal savings data from server before the page loads
 */
export async function getServerSideProps() {
   const response = await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/personal-savings`)
      .then((res) => {
         return res;
      })
      .catch((error) => {
         return {
            status: error.response.status,
            data: { data: error.response.statusText },
         };
      });
 
   return {
      props: {
         status: response ? response.status : {},
         data: response ? response.data.data : {},
      },
   };
}

const PersonalSavings = ({ status, data }) => {
   console.log(
      '🚀 ~ file: personal.jsx ~ line 35 ~ PersonalSavings ~ status',
      status
   );
   console.log(
      '🚀 ~ file: personal.jsx ~ line 35 ~ PersonalSavings ~ data',
      data
   );
   const [filter, setFilter] = React.useState('all transactions');
   const [searchResult, setSearchResult] = useState([]);
   const searchTerm = useSelector((state) => state.searchTerm);

   const columns = React.useMemo(
      () => [
         {
            Header: 'user',
            accessor: 'user',
            Cell: ({ value }) => (
               <div className='flex justify-start items-center gap-2'>
                  <div className='h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] relative'>
                     <Image
                        src={`/images/${value[1]}.png`}
                        alt={value[0]}
                        layout='fill'
                     />
                  </div>
                  <span>{value[0]}</span>
               </div>
            ),
         },
         {
            Header: 'Service',
            accessor: 'service',
         },
         {
            Header: 'Amount',
            accessor: 'amount',
            Cell: ({ value }) => (
               <CurrencyFormat
                  value={value}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
               />
            ),
         },
         {
            Header: 'Payment Method',
            accessor: 'paymentMethod',
         },
         {
            Header: 'Date',
            accessor: 'date',
         },
         {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ value }) => {
               return (
                  <span
                     className={`px-2.5 py-1 lg:px-5 lg:py-2 rounded-full ${
                        value === 'successful'
                           ? 'text-[#4AAE8C] bg-[#DEFFEE]'
                           : value === 'pending'
                           ? 'text-[#F7936F] bg-[#FDF6EF]'
                           : 'text-[#F16063] bg-[#FCEAE8]'
                     }`}
                  >
                     {value}
                  </span>
               );
            },
         },
      ],
      []
   );

   const ChipCompo = ({ label }) => {
      return (
         <Chip
            label={label}
            className={`py-1 px-2 md:py-3 md:px-5 text-[10px] font-medium h-fit md:text-sm rounded-full ${
               filter === label.toLowerCase()
                  ? 'bg-[#FFE6D6] text-[#FF4500]'
                  : 'bg-[#EBF2FA] text-[#A6B7D4]'
            }`}
            clickable
            onClick={() => setFilter(label.toLowerCase())}
            sx={{
               '& .MuiChip-label': {
                  padding: 0,
               },
            }}
         />
      );
   };

   /**
    * Datagrid row data
    */
   let rows;
   // check if personalSavingData is an array
   if (Array.isArray(data) && status === 200) {
      rows = data.map((item) => {
         return {
            user: [item.name, 'person1'],
            service: item.transaction_history[0].transaction_type,
            amount: item.transaction_history[0].amount,
            paymentMethod: item.transaction_history[0].payment_type,
            date: item.transaction_history[0].transaction_time, // 'Oct 4, 2020 2:14pm',
            status: item.transaction_history[0].status,
         };
      });
   } else {
      rows = [];
   }

   const filterData = useMemo(() => {
      if (filter === 'all transactions') {
         return rows;
      } else {
         return rows.filter((item) => item.status === filter);
      }
   }, [rows, filter]);

   useEffect(() => {
      if (!searchTerm) return;

      const result = tableSearch({
         searchTerm,
         dataList: filterData,
      });
      setSearchResult(result);
   }, [searchTerm, filterData]);

   return (
      <Layout
         pageLabel={
            <span className=' space-x-2 lg:space-x-3 '>
               <span>Products</span>
               <SVG.DoubleRight />
               <span>Products</span>
               <SVG.DoubleRight />{' '}
               <span className='text-[#999999]'>Personal Savings</span>
            </span>
         }
         title='Personal Savings'
      >
         <SubPageHeader label='Personal Savings' />

         <div className='md:flex md:justify-between md:items-center mt-2.5 md:mt-5 mb-5 md:mb-10'>
            <div className='space-x-2.5 lg:space-x-5'>
               <ChipCompo label='All transactions' />
               <ChipCompo label='Successful' />
               <ChipCompo label='Pending' />
               <ChipCompo label='Failed' />
            </div>

            <Button
               startIcon={<SVG.Generate />}
               className='bg-[#FFE6D6] mt-2 md:mt-0 text-[#FF4500] normal-case py-1 px-2 md:py-3 md:px-5 text-[10px] font-medium md:text-sm tracking-[-0.025em]'
            >
               Generate receipt
            </Button>
         </div>

         <DataTable
            columns={columns}
            data={searchTerm ? searchResult : filterData}
         />
      </Layout>
   );
};

export default PersonalSavings;

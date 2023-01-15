import { Button, Chip } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { DataTable, Layout, SubPageHeader, SVG } from '../../../components';
import { tableSearch } from '../../../utils/tableSearch';

const Investment = () => {
   const [filter, setFilter] = React.useState('all transactions');
   const [searchResult, setSearchResult] = useState([])
   const searchTerm = useSelector(state => state.searchTerm)

   const columns = React.useMemo(
      () => [
         {
            Header: 'Investment type',
            accessor: 'investmentType',
            Cell: ({ value }) => (
               <div className='flex justify-start items-center gap-2'>
                  <span>
                     {value[1]}
                  </span>
                  <span>{value[0]}</span>
               </div>
            ),
         },
         {
            Header: 'User',
            accessor: 'user',
         },
         {
            Header: 'Investment room',
            accessor: 'investmentRoom',
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
                        value === 'Active'
                           ? 'text-[#136F63] bg-[#E9FBF9]'
                           : 'text-[#EDA95A] bg-[#FDF6EF]'
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

   const data = React.useMemo(
      () => [
         {
            investmentType: ['Real Estate', <SVG.RealEstate key='real' />],
            user: 'Devon Lane',
            investmentRoom: 'Moderate',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Active',
         },
         {
            investmentType: ['Agriculture', <SVG.Agriculture key='agric' />],
            user: 'Devon Lane',
            investmentRoom: 'Moderate',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Inactive',
         },
         {
            investmentType: ['Mutual funds', <SVG.Fund key='mutual' />],
            user: 'Devon Lane',
            investmentRoom: 'Conservative',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Active',
         },
         {
            investmentType: ['Transport', <SVG.Transport key="tras" />],
            user: 'Devon Lane',
            investmentRoom: 'Moderate',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Active',
         },
         {
            investmentType: ['Transport', <SVG.Transport key="tras" />],
            user: 'Devon Lane',
            investmentRoom: 'Aggressive',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Inactive',
         },
         {
            investmentType: ['Real Estate', <SVG.RealEstate key='real' />],
            user: 'Devon Lane',
            investmentRoom: 'Moderate',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Inactive',
         },
         {
            investmentType: ['Agriculture', <SVG.Agriculture key='agric' />],
            user: 'Devon Lane',
            investmentRoom: 'Aggressive',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Active',
         },
         {
            investmentType: ['Real Estate', <SVG.RealEstate key='real' />],
            user: 'Devon Lane',
            investmentRoom: 'Aggressive',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Inactive',
         },
      ],
      []
   );

   const filterData = useMemo(() => {
      if (filter === 'all transactions') {
         return data
      } else {
         return data.filter((item) => item.status === filter)
      }
   }, [data, filter])

   useEffect(() => {
      if (!searchTerm) return;

      const result = tableSearch({
         searchTerm, dataList: filterData
      })
      setSearchResult(result)
   }, [searchTerm, filterData])

   return (
      <Layout
         pageLabel={
            <span className=' space-x-2 lg:space-x-3 '>
               <span>Products</span>
               <SVG.DoubleRight />
               <span>Products</span>
               <SVG.DoubleRight />{' '}
               <span className='text-[#999999]'>Investment</span>
            </span>
         }
         title='Investment'
      >
         <SubPageHeader label='Investment ' />

         <div className='md:flex md:justify-between md:items-center mt-2.5 md:mt-5 mb-5 md:mb-10'>
            <div className='space-x-2.5 lg:space-x-5'>
               <ChipCompo label='All transactions' />
               <ChipCompo label='Active' />
               <ChipCompo label='Inactive' />
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

export default Investment;

import { Button, Chip } from '@mui/material';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { Layout, SubPageHeader, SVG } from '../components';
import { DataTable } from '../components/Table';
import { tableSearch } from '../utils/tableSearch';

export default function Transactions() {
   const [filter, setFilter] = useState('All transactions');
   const [searchResult, setSearchResult] = useState([]);
   const searchTerm = useSelector((state) => state.searchTerm);

   const columns = useMemo(
      () => [
         {
            Header: 'User',
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

   const data = useMemo(
      () => [
         {
            user: ['Devon Lane', 'person1'],
            service: 'Fund Withdrawal',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Successful',
         },
         {
            user: ['Arlene Mocoy', 'person2'],
            service: 'Fund Withdrawal',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Pending',
         },
         {
            user: ['Wade Warren', 'person3'],
            service: 'Fund Withdrawal',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Failed',
         },
         {
            user: ['Wade Warren', 'person3'],
            service: 'Fund Withdrawal',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Successful',
         },
         {
            user: ['Arlene Mocoy', 'person2'],
            service: 'Fund Deposit',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Pending',
         },
         {
            user: ['Devon Lane', 'person1'],
            service: 'Fund Deposit',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Failed',
         },
         {
            user: ['Leslie Alexander', 'person4'],
            service: 'Fund Deposit',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Successful',
         },
         {
            user: ['Devon Lane', 'person1'],
            service: 'Fund Deposit',
            amount: '5000',
            paymentMethod: 'Debit Card',
            date: 'Oct 4, 2020 2:14pm',
            status: 'Pending',
         },
      ],
      []
   );

   const filterData = useMemo(() => {
      if (filter === 'all transactions') {
         return data;
      } else {
         return data.filter((item) => item.status === filter);
      }
   }, [data, filter]);

   useEffect(() => {
      if (!searchTerm) return;

      const result = tableSearch({
         searchTerm,
         dataList: filterData,
      });
      setSearchResult(result);
   }, [searchTerm, filterData]);

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

   return (
      <Layout title={'Transactions'}>
         <SubPageHeader label={'Transactions'} />

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

         <div className='w-full py-5'>
            <DataTable
               columns={columns}
               data={searchTerm ? searchResult : filterData}
            />
         </div>
      </Layout>
   );
}

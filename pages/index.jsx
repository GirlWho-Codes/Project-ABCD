import { Chip, Button, IconButton } from '@mui/material';
import { Layout, SVG, VerticalChart, DonutChart } from '../components';
import CurrencyFormat from 'react-currency-format';

export default function Home() {
   // ChipComponent
   const ChipComponent = ({ label }) => {
      return (
         <Chip
            label={label}
            className='chip bg-white text-[#9C9C9C]'
            clickable
            sx={{
               '& .MuiChip-label': {
                  padding: 0,
               },
            }}
         />
      );
   };

   // MetricComponent
   const MetricComponent = ({ label, value, isCurrency, isUser }) => {
      return (
         <div className='flex flex-col bg-softt bg-metric-pattern bg-center bg-no-repeat bg-cover p-3 lg:p-5 rounded lg:rounded-lg'>
            <i className='ml-auto'>
               {!isUser ? <SVG.WalletMetrics /> : <SVG.UserMetrics />}
            </i>
            <CurrencyFormat
               value={value}
               displayType={'text'}
               thousandSeparator={true}
               prefix={isCurrency && '₦'}
               className='mt-2.5 text-black-80 text-xl lg:text-[40px] lg:leading-[48px] font-bold'
            />
            <span className='text-xs lg:text-base text-black-50 mt-1 lg:mt-3'>
               {label}
            </span>
         </div>
      );
   };

   return (
      <Layout title='Home'>
         <div className='xl:flex xl:justify-between xl:items-center'>
            <div>
               <h3 className='text-black-80 font-bold text-lg lg:text-2xl xl:text-[32px] tracking-[-0.05em] xl:leading-[48px]'>
                  Welcome to Lifesaver
               </h3>
               <p className='text-[#505780] text-xs sm:text-sm lg:text-base'>
                  Manage all transactions and data on the Lifesaver service
               </p>
            </div>
            <div className='space-x-2.5 mt-2 xl:mt-0 lg:space-x-5'>
               <ChipComponent label='Today' />
               <ChipComponent label='Last 7 Days' />
               <ChipComponent label='30 Days' />
               <ChipComponent label='1 Year' />
               <Button
                  startIcon={<SVG.Refresh />}
                  className='text-white normal-case bg-orange chip hidden lg:inline-block'
               >
                  Refresh
               </Button>
               <IconButton className='bg-orange chip lg:hidden'>
                  <SVG.Refresh />
               </IconButton>
            </div>
         </div>

         {/* Metrics */}
         <section className=' my-5 lg:my-10 overflow-x-auto'>
            <div className='gap-3 xl:gap-[18px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
               <MetricComponent
                  value='200000'
                  label='Total Balance'
                  isCurrency
               />
               <MetricComponent
                  value='2000000'
                  label='Total Transaction'
                  isCurrency
               />
               <MetricComponent value='120' label='Total Users' isUser />
               <MetricComponent value='20' label='Total Investments' />
            </div>
         </section>

         {/* Chart */}
         <div className='grid xl:grid-cols-2 lg:gap-x-7 lg:gap-y-10 gap-6'>
            <div className='bg-white p-5 space-y-10 xl:space-y-20'>
               <div className='flex items-center justify-between'>
                  <h6 className='text-xs sm:text-sm md:text-base lg:text-lg'>
                     Total Debit and Credit
                  </h6>
                  <div className='space-x-2 lg:space-x-3.5'>
                     <p className='text-[10px] sm:text-xs md:text-sm lg:text-base inline-flex items-center'>
                        <span className='bg-softOrange rounded-full h-2 w-2 xl:h-3 xl:w-3 inline-block mr-1 lg:mr-2' />
                        Debit
                     </p>
                     <p className='text-[10px] sm:text-xs md:text-sm lg:text-base inline-flex items-center'>
                        <span className='bg-orange rounded-full h-2 w-2 xl:h-3 xl:w-3 inline-block mr-1 lg:mr-2' />
                        Debit
                     </p>
                  </div>
               </div>

               <VerticalChart
                  xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                  yAxis={[
                     {
                        name: 'Debit',
                        data: [100, 200, 300, 500, 400, 200, 100],
                     },
                     {
                        name: 'Credit',
                        data: [100, 200, 300, 500, 400, 200, 100],
                     },
                  ]}
                  colors={['#FF450040', '#FF4500']}
               />
            </div>

            <div className='bg-white p-5 space-y-10 xl:space-y-20'>
               <h6 className='text-xs sm:text-sm md:text-base lg:text-lg'>
                  Total amount sum user’s accounts
               </h6>

               <VerticalChart
                  xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                  yAxis={[
                     {
                        name: 'Total Accounts',
                        data: [100, 200, 300, 500, 400, 200, 100],
                     },
                  ]}
                  colors={['#FF4500']}
                  backgroundBarColors={['#F2B199']}
               />
            </div>
            <div className='bg-white p-5 space-y-10 xl:space-y-20'>
               <h6 className='text-xs sm:text-sm md:text-base lg:text-lg'>
                  Total interest goten from Investment
               </h6>

               <VerticalChart
                  xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                  yAxis={[
                     {
                        name: 'Total Accounts',
                        data: [100, 200, 300, 500, 400, 200, 100],
                     },
                  ]}
                  colors={['#FF4500']}
                  backgroundBarColors={['#F2B199']}
               />
            </div>
            <div className='bg-white p-5 space-y-10 xl:space-y-20'>
               <h6 className='text-xs sm:text-sm md:text-base lg:text-lg'>
                  User Segmentation
               </h6>

               <DonutChart
                  labels={[
                     'Active Account',
                     'Active Account',
                     'Deactivated Account',
                  ]}
                  results={[200, 50, 10]}
                  colors={['#FF4500', '#F2B199', '#FFBE5A']}
                  totalLabel='Total Users'
               />
            </div>
         </div>
      </Layout>
   );
}

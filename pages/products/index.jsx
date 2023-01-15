import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Layout, SVG } from '../../components';

const Products = () => {
   const ProductComponent = ({ label, svg, href }) => {
      return (
         <Link href={`/products/${href}`}>
            <a>
               <ButtonBase className='rounded-xl lg:rounded-[20px] w-full'>
                  <div className='w-full border border-gray-300 rounded-xl lg:rounded-[20px] p-4 pt-8 lg:p-6 lg:pt-[60px] flex flex-col items-start transition-colors hover:bg-orange hover:text-white stroke-orange hover:border-transparent fill-transparent hover:stroke-white'>
                     {svg}
                     <p className=' mt-2 md:mt-3 lg:mt-6 font-medium text-xs md:text-sm lg:text-base tracking-[-0.025em]'>
                        {label}
                     </p>
                  </div>
               </ButtonBase>
            </a>
         </Link>
      );
   };

   return (
      <Layout title='Products'>
         <div className='xl:flex xl:justify-between xl:items-center'>
            <div>
               <h3 className='text-black-80 font-bold text-lg lg:text-2xl xl:text-[32px] tracking-[-0.05em] xl:leading-[48px]'>
                  Products
               </h3>
               <p className='text-[#505780] text-xs sm:text-sm lg:text-base'>
                  Manage all products and services available on Lifesavers
               </p>
            </div>
         </div>

         <section className='mt-5 lg:mt-10'>
            <p className='font-medium text-[#191716] text-sm lg:text-xl lg:leading-[25.36px] tracking-[-0.025em]'>
               Products
            </p>

            <div className='grid grid-cols-2 lg:grid-cols-5 gap-2.5 lg:gap-5 mt-5 lg:mt-10'>
               <ProductComponent
                  label='Personal'
                  svg={<SVG.UserProducts />}
                  href='products/personal'
               />
               <ProductComponent
                  label='Fixed Savings'
                  svg={<SVG.FixedSavingsProducts />}
                  href='products/fixedSavings'
               />
               <ProductComponent
                  label='Group Savings'
                  svg={<SVG.GroupSavingsProducts />}
                  href='products/groupSavings'
               />
               <ProductComponent
                  label='Thrift'
                  svg={<SVG.ThriftProducts />}
                  href='products/thrift'
               />
               <ProductComponent
                  label='Investment'
                  svg={<SVG.InvestmentProducts />}
                  href='products/investment'
               />
            </div>
         </section>

         <section className='mt-5 lg:mt-10'>
            <p className='font-medium text-[#191716] text-sm lg:text-xl lg:leading-[25.36px] tracking-[-0.025em]'>
               Services
            </p>

            <div className='grid grid-cols-2 lg:grid-cols-5 gap-2.5 lg:gap-5 mt-5 lg:mt-10'>
               <ProductComponent
                  label='Airtime'
                  svg={<SVG.AirtimeServices />}
                  href='services/airtime'
               />
               <ProductComponent
                  label='Data'
                  svg={<SVG.DataServices />}
                  href='services/data'
               />
               <ProductComponent
                  label='TV Subscription'
                  svg={<SVG.TVSubscriptionServices />}
                  href='services/tvsubscription'
               />
               <ProductComponent
                  label='Electricity'
                  svg={<SVG.ElectricityServices />}
                  href='services/electricity'
               />
               <ProductComponent
                  label='Internet'
                  svg={<SVG.InternetServices />}
                  href='services/internet'
               />
            </div>
         </section>
      </Layout>
   );
};

export default Products;

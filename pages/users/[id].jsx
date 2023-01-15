import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ToyAvatar from '../../assets/img/toy-avatar.png';
import { Layout, SVG } from '../../components';
import {
   CliqueSaving,
   FixedSaving,
   GoalSaving,
   GroupSaving,
   PersonalInfo,
   PersonalSaving,
   ThriftSaving,
} from '../../components/sections/users';

/**
 * This is a getServerSideProps function thats help fetch users from server before the page loads
 */
export async function getServerSideProps(ctx) {
   const {
      query: { id },
   } = ctx;
   const bearerToken = process.env.BEARER_TOKEN;
      const deviceToken = process.env.DEVICE_TOKEN;
   const res = await axios.get(
      'https://server.lifesavers.ng/api/v1/admin/users/${id}',
      {
         headers: {
            Authorization: `Bearer ${bearerToken}`,
            "device-token": deviceToken
         }
      }
      
   )
   .then((res) => {
      
      return{
         props: {
            userData: res.data.data
         }
         
      }
      
   })
   .catch((error) => {
      
      return{
         props: {
            userData: null
         }
      }
   });
   
   return res
   
}

export default function Users({ status, userData }) {
   const router = useRouter();
   const [currentTab, setCurrentTab] = useState(0);

   const tabs = [
      {
         heading: 'Personal Information',
         component: <PersonalInfo userData={userData} />,
      },
      {
         heading: 'Personal Saving',
         component: <PersonalSaving userData={userData.personal_savings} />,
      },
      {
         heading: 'Group Saving',
         component: <GroupSaving userData={userData.null} />,
      },
      {
         heading: 'Fixed Saving',
         component: <FixedSaving userData={userData.fixed_savings} />,
      },
      {
         heading: 'Goal Saving',
         component: <GoalSaving userData={userData.null} />,
      },
      {
         heading: 'Thrift Saving',
         component: <ThriftSaving userData={userData.null} />,
      },
      {
         heading: 'Clique Saving',
         component: <CliqueSaving userData={userData.null} />,
      },
   ];

   return (
      <Layout title={'User'}>
         <section className='space-y-4'>
            <div
               onClick={() => router.back()}
               className='start space-x-3 text-xs cursor-pointer'
            >
               <i className='text-xs'>
                  <SVG.ArrowBack />
               </i>
               <span>Back</span>
            </div>
            <div className='start space-x-5'>
               <Image
                  src={
                     userData.profile_phone ? userData.profile_phone : ToyAvatar
                  }
                  alt='lifesaver user'
               />
               <span className='text-xl font-bold'>{userData.name}</span>
            </div>
            <div className='flex text-[#1E1E24] flex-col p-6 bg-[#FFE6D6] bg-userPannel-pattern bg-left bg-no-repeat rounded-2xl gap-3'>
               <span className='text-sm font-medium xl:text-base xl:leading-[20px]'>
                  Lifesaver Balance
               </span>
               <span className='xl:leading-[50.72px] tracking-[-0.05em] xl:my-2 xl:text-[40px] font-medium'>
                  ₦39,390.00
               </span>
            </div>
         </section>
         <section className='my-5 '>
            <div className='container w-full'>
               <div className='flex items-center justify-start lg:justify-evenly min-w-full p-0 border-b-[1px] border-solid border-slate-400 space-x-3 overflow-x-auto overflow-y-hidden no-scrollbar'>
                  {tabs.map((tab, i) => (
                     <div
                        key={i}
                        onClick={() => setCurrentTab(i)}
                        className='cursor-pointer'
                     >
                        <div
                           className={`py-2 whitespace-nowrap ${
                              currentTab === i
                                 ? 'font-semibold text-[#1E1E24]'
                                 : 'text-[#676767]'
                           }`}
                        >
                           {tab.heading}
                        </div>
                        <hr
                           className={`p-0 m-0 border-solid rounded-sm -mb-[1px] ${
                              currentTab === i &&
                              'border-[2px] border-orange bg-orange'
                           }`}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div>{tabs[currentTab].component}</div>
         </section>
      </Layout>
   );
}

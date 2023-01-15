import { SVG, LoginCarousel } from '../../components';
import GoogleIcon from '../../assets/img/google-icon.png';
import Image from 'next/image';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { LoadingButton as Button } from '@mui/lab';
import GoogleLogin from 'react-google-login';
import Router from 'next/router';

export default function Login() {
   const [email, setEmail] = React.useState('iversonweb98@gmail.com');
   const [password, setPassword] = React.useState('Be@trice1');
   const [device_name, setDevice_name] = React.useState("samsung galaxy s9+")
   const [loading, setLoading] = React.useState(false);

   /**
    *  This function is to handle login logics
    */
   const handleLogin = async (e) => {
      e.preventDefault();

      !email && toast.error('Email is required');
      !password && toast.error('Password is required');

      setLoading(true);

      const instance = axios.create({
         baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
         withCredentials: true,
         headers: { 
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
         },
      }); 

    const data = {email, password, device_name};
    await instance
       .post(`/api/v1/admin/login`, data)
       .then((res) => {
         
          const token = res.data.token;
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          setLoading(false);
          console.log(res.data);
          toast.success(res.data.data.message);
          toast.success(res.data.data.device_message);
           // Redirect to dashboard
           Router.push('/auth/verify-otp');
           return res.data
          
         
       })
       .catch((err) => {
          setLoading(false);
          console.log(err);
          toast.error('Failed to login');
       });


   };

   return (
      <div>
         <section className='flex items-center w-screen max-h-screen bg-white'>
            <div className=' w-0 lg:w-1/2 h-full bg-[#f0f0f0]'>
               <div className='min-h-screen center'>
                  <div className='absolute left-10 top-5 max-w-fit '>
                     <SVG.Logo width='150' />
                  </div>
                  <div className='w-full'>
                     <LoginCarousel />
                  </div>
               </div>
            </div>
            <div className='w-full lg:w-1/2 center bg-[#FFFFFF]'>
               <div className='w-full max-w-[450px] p-8 lg:p-10 shadow'>
                  <div className='relative col-center'>
                     <h3 className='text-[#0B0B0B] text-lg md:text-xl lg:text-2xl font-[500] tracking-[-0.025em] xl:leading-[48px]'>
                        Welcome back!
                     </h3>
                     <span className='text-[#0B0B0B] text-base md:text-lg lg:text-xl font-[400] tracking-[-0.025em] '>
                        Login to your dashboard
                     </span>
                     <span className='absolute right-0 top-1/4 '>
                        <svg
                           width='52'
                           height='31'
                           viewBox='0 0 52 31'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              d='M27.2969 12.2996C27.5214 12.2675 27.6818 12.2996 27.8102 12.2354C33.0715 10.9522 38.1725 9.25186 42.9206 6.49285C45.07 5.24168 46.9949 3.70176 48.8236 2.06561C49.3048 1.64855 49.8502 1.23149 50.3635 0.846508C50.556 0.718182 50.8126 0.589858 51.0372 0.557776C51.1655 0.557776 51.3901 0.654021 51.4542 0.782347C51.5184 0.910673 51.4222 1.13524 51.3259 1.23149C46.9308 5.37 42.0544 8.8348 36.3118 10.8559C33.3603 11.8825 30.4088 12.845 27.361 13.5187C27.0402 13.5829 26.5911 13.7112 26.4307 13.9358C24.3454 16.8552 21.4901 18.8763 18.4103 20.4804C13.6622 22.9827 8.81792 25.2605 4.00569 27.6346C3.71696 27.795 3.36406 27.9554 3.07533 28.3083C6.60429 28.7574 10.1333 29.1424 13.7264 29.5915C13.6301 30.2011 13.3093 30.3936 12.8923 30.4898C12.411 30.5861 11.8977 30.7144 11.3844 30.7144C8.56126 30.6502 5.73809 30.5861 2.91492 30.4577C2.30537 30.4257 1.69582 30.2653 1.11836 30.0728C-0.004497 29.6557 -0.261151 28.6933 0.444642 27.7308C1.85623 25.8701 3.26782 24.0735 4.74356 22.277C5.16063 21.7316 5.64185 21.6353 6.05891 21.9241C6.41181 22.2128 6.47597 22.7261 6.09099 23.3036C5.41728 24.2981 4.6794 25.2285 3.90945 26.3192C4.1661 26.2551 4.29442 26.2551 4.42275 26.1909C9.13873 23.6565 13.8868 21.1541 18.5707 18.5234C19.9823 17.7535 21.2655 16.6627 22.5488 15.7002C23.0621 15.3153 23.4792 14.7699 24.0566 14.1924C23.6396 14.1603 23.3188 14.1603 23.0621 14.1603C21.0089 14.2887 18.9236 14.1924 16.9025 13.7112C15.1059 13.2621 13.5018 12.4921 12.1865 11.1126C11.7694 10.6314 11.3203 10.1181 10.9995 9.5406C9.55579 7.00616 10.2937 4.15091 12.8281 2.51475C15.94 0.429449 21.7147 -0.148017 25.4361 3.6376C27.5535 5.75498 28.1631 8.35358 27.5535 11.273C27.4894 11.5938 27.3931 11.9467 27.2969 12.2996ZM13.0527 10.1822C14.3039 11.3692 15.6513 12.075 17.1591 12.4279C19.5331 13.0696 21.9713 13.0696 24.3774 12.845C24.9228 12.8129 25.2116 12.5242 25.4682 12.075C26.7194 9.66892 26.1419 6.39661 24.185 4.56796C21.5222 2.09769 16.71 1.64855 13.6301 3.6376C11.5448 4.95294 11.0636 7.1024 12.3148 9.1877C12.5715 9.57268 12.8923 9.95766 13.0527 10.1822Z'
                              fill='black'
                           />
                        </svg>
                     </span>
                  </div>

                  <form onSubmit={handleLogin}>
                     <div className='space-y-5'>
                        <div>
                           <label
                              htmlFor='email'
                              className='block mb-2 text-sm font-[400] text-[#9C9C9C] dark:text-gray-300'
                           >
                              Email
                           </label>
                           <input
                              type='email'
                              id='email'
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#FF4500] focus:border-[#FF4500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder='Superadmin@Lifesaver.com'
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                        </div>
                        <div>
                           <label
                              htmlFor='password'
                              className='block mb-2 text-sm font-[400] text-[#9C9C9C] dark:text-gray-300'
                           >
                              Password
                           </label>
                           <input
                              type='password'
                              id='password'
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#FF4500] focus:border-[#FF4500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder='********'
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />
                        </div>
                           <div>
                           <Button
                              loading={loading}
                              type='submit'
                              className='w-full rounded-xl bg-[#FF4500] normal-case hover:bg-[#dd3f06] center text-white py-3'
                           >
                              Sign in
                           </Button>
                        </div>
                     </div>
                  </form>
                  <div className='mt-4 space-y-5'>
                     <div className='center'>
                        <hr className='border-t-[#9C9C9C] w-full' />
                        <span className='px-5 text-sm text-[#9C9C9C] whitespace-nowrap'>
                           Or continue with
                        </span>
                        <hr className='border-t-[#9C9C9C] w-full' />
                     </div>
                     <div>
                        <button className='w-full rounded-xl border border-[#676767] center text-[#676767] py-3 space-x-2'>
                           <Image src={GoogleIcon} alt='sign in with google' />
                           <span>Sign in with Google</span>
                        </button>
                     </div>
                     <p className='text-[#0B0B0B] '>
                        By signing in, you agree to our{' '}
                        <a
                           href='#'
                           className='text-[#406DE5] underline underline-offset-4 '
                        >
                           Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                           href='#'
                           className='text-[#406DE5] underline underline-offset-4 '
                        >
                           privacy policy
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

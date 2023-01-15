import { SVG, LoginCarousel } from '../../components';
import GoogleIcon from '../../assets/img/google-icon.png';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';
import React from 'react';
import OtpInput from 'react-otp-input';
import { LoadingButton as Button } from '@mui/lab';
import Router from 'next/router';

export default function VerifyOTP() {
   const [otp, setOtp] = React.useState('');
   const [device_name, setDevice_name] = React.useState('MSI');
   const [loading, setLoading] = React.useState(false);

   const handleResendOTP = async () => {
      await axios
         .post('/api/auth/resend_otp', {})
         .then((res) => {
            console.log(res);
            toast.success('wowo');
         })
         .catch((err) => {
            console.log('>>> ' + JSON.stringify(err.response));
            toast.error(err.response.data);
         });
   };

   const handleVerifyOTP = async (e) => {
      e.preventDefault();

      setLoading(true);
      const bearerToken = process.env.BEARER_TOKEN;
      const deviceToken = process.env.DEVICE_TOKEN;
      const instance = axios.create({
         baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
         withCredentials: true,
         headers: { 
            Authorization: `Bearer ${bearerToken} `
         },
      }); 

    const data = { 
            otp,
            device_name,
         };
    await instance
       .post(`/api/v1/admin/verify-otp`, data)
       .then((res) => {
         
          setLoading(false);
          console.log(res.data);
          toast.success(res.data.data.message);
          toast.success(res.data.data.device_message);
           // Redirect to dashboard
           Router.push('/');
           return res.data
          
         
       })
       .catch((err) => {
          setLoading(false);
          console.log(err);
          toast.error('Invalid OTP');
       });


      // await axios
      //    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/verify-otp`, {
      //       otp,
      //       device_name,
      //    })
      //    .then((res) => {
      //       res.json(response)
      //       console.log(res);
      //       setLoading(false);
      //       toast.success('wowo')
            
      //    })
      //    .catch((err) => {
      //       console.log('>>> ' + JSON.stringify(err.response));
      //       setLoading(false);
      //       toast.error(err.response?.data.message);
            
      //    });
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
            <div className='w-full lg:w-1/2  bg-[#FFFFFF]'>
               <div className='w-full max-w-[450px] mx-auto p-8 lg:p-10 shadow'>
                  <div className='mb-10 col-center'>
                     <h3 className='text-[#0B0B0B] text-lg md:text-xl lg:text-2xl font-[500] tracking-[-0.025em] xl:leading-[48px]'>
                        Verify your identity!!
                     </h3>
                     <span className='text-[#0B0B0B] text-center text-base md:text-lg lg:text-xl font-[400] tracking-[-0.025em] '>
                        Please Enter OTP
                     </span>
                     <span className='text-[#0B0B0B] text-center text-sm font-[400]'>
                        We have sent a verificarion code to your email{' '}
                        <span className='font-[500]'>
                           superadmin@lifesavers.com
                        </span>
                     </span>
                  </div>

                  <form onSubmit={handleVerifyOTP}>
                     <div className='space-y-10'>
                        <div className='gap-3 center'>
                           <OtpInput
                              value={otp}
                              onChange={(otp) => setOtp(otp)}
                              numInputs={6}
                              inputStyle='min-w-[42px] w-[42px] h-[42px] border border-[#FF4500]  border-opacity-40 text-gray-900 text-sm text-center rounded-lg focus:outline-none focus:ring-[#FF4500] focus:border-[#FF4500] block p-2.5'
                              containerStyle='space-x-3'
                              isInputNum
                           />
                        </div>
                        <div>
                           <Button
                              loading={loading}
                              type='submit'
                              className='normal-case w-full rounded-xl bg-[#FF4500] hover:bg-[#dd3f06] center text-white py-3'
                           >
                              Verify OTP
                           </Button>
                        </div>
                     </div>
                  </form>
                  <div className='mt-10 space-y-5'>
                     <p className='text-[#0B0B0B] text-center'>
                        Didn’t receive OTP?{' '}
                        <button
                           onClick={handleResendOTP}
                           className='text-[#FF4500] underline underline-offset-4 '
                        >
                           Resend Code
                        </button>
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

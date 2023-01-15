import Image from 'next/image';

export const GroupAvatars = ({ images }) => {
   return (
      <div className='flex -space-x-4 lg:-space-x-6'>
         {images ? (
            <>
               {images.slice(0, 3).map((image, index) => (
                  <div
                     key={index}
                     className='h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] relative inline-block rounded-xl border-4 border-white'
                     style={{ zIndex: 10 + index }}
                  >
                     <Image
                        src={`/images/${image}.png`}
                        alt={image}
                        layout='fill'
                        className=''
                     />
                  </div>
               ))}
               {images.length > 3 && (
                  <p className='h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] relative rounded-xl border-4 bg-white text-[#C2C2C2] font-medium lg:text-sm text-xs flex justify-center items-center border-softt z-[15]'>
                     {images.length - 3}+
                  </p>
               )}
            </>
         ) : (
            <>
               <img
                  className='w-[2.5rem] h-[2.5rem] rounded-xl border-4 border-white dark:border-gray-800'
                  src='/images/person1.png'
                  alt=''
               />
               <img
                  className='w-[2.5rem] h-[2.5rem] rounded-xl border-4 border-white dark:border-gray-800'
                  src='/images/person2.png'
                  alt=''
               />
               <img
                  className='w-[2.5rem] h-[2.5rem] rounded-xl border-4 border-white dark:border-gray-800'
                  src='/images/person3.png'
                  alt=''
               />
            </>
         )}
      </div>
   );
};

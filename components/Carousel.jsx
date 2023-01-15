import Image from 'next/image'
import { SVG } from './index'

// import Swiper modules
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '../styles/Auth.module.css'

// images
import SliderImg1 from '../assets/img/slider-img-1.png'
import SliderImg2 from '../assets/img/slider-img-2.png'
import SliderImg3 from '../assets/img/slider-img-3.png'
import { useRef } from 'react'


export function LoginCarousel() {
    const prevElRef = useRef(null)
    const nextElRef = useRef(null)

    return (
        <div className='h-full relative'>
            {/* main slider */}
            <Swiper
                className='h-full p-10'
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    enabled: true,
                    prevEl: prevElRef.current,
                    nextEl: nextElRef.current
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevElRef.current;
                    swiper.params.navigation.nextEl = nextElRef.current;
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('Slide changed')}
            >
                <SwiperSlide className='p-0' >
                    <div>
                        <div className='w-[25rem] mb-10 h-auto'>
                            <Image src={SliderImg1} className='' alt='' />
                            
                        </div>
                        <p className="text-center text-xl font-semibold mb-10 ">
                            Control all data at a go!!
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-0' >
                    <div>
                        <div className='w-[25rem] mb-10 h-auto'>
                            <Image src={SliderImg2} className='' alt='' />
                            
                        </div>
                        <p className="text-center text-xl font-semibold mb-10 ">
                            Add and remove admins as required
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-0' >
                    <div>
                        <div className='w-[25rem] mb-10 h-auto'>
                            <Image src={SliderImg3} className='' alt='' />
                            
                        </div>
                        <p className="text-center text-xl font-semibold mb-10 ">
                            Manage the controls and permissions
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* slider controls */}
            <div
                ref={prevElRef}
                role={'button'}
                className='absolute bottom-5 left-10 bg-slate-200 rounded-full !hidden lg:!flex w-[44px] h-[44px] center z-40'
            >
                <i className='text-xs'><SVG.ChevronLeft /></i>
            </div>
            <div 
                ref={nextElRef}
                role={'button'}
                className='absolute bottom-5 right-10 bg-slate-200 rounded-full !hidden lg:!flex w-[44px] h-[44px] center z-40'
            >
                <i className='text-xs'><SVG.ChevronRight /></i>
            </div>
        </div>
    )
}
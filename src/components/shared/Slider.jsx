import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaStar } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='shadow-2xl mx-24 md:mx-96 border-[#800020] border-[1px] md:p-12 flex flex-col place-items-center gap-6 p-8'>
                        <h1 className='font-black text-2xl text-[#800020]'>Client name</h1>
                        <p className='text-center text-pretty'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequuntur dolores accusantium veritatis quidem praesentium, ad ea iusto molestias sapiente earum dolorem alias fugiat. Cum omnis assumenda ullam quaerat blanditiis?</p>
                        <div className='flex flex-row gap-1 text-2xl text-[#800020]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>                    <div className='shadow-2xl mx-24 md:mx-96 border-[#800020] border-[1px] md:p-12 flex flex-col place-items-center gap-6 p-8'>
                    <h1 className='font-black text-2xl text-[#800020]'>Client 2</h1>
                    <p className='text-center text-pretty'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequuntur dolores accusantium veritatis quidem praesentium, ad ea iusto molestias sapiente earum dolorem alias fugiat. Cum omnis assumenda ullam quaerat blanditiis?</p>
                    <div className='flex flex-row gap-1 text-2xl text-[#800020]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>                    <div className='shadow-2xl mx-24 md:mx-96 border-[#800020] border-[1px] md:p-12 flex flex-col place-items-center gap-6 p-8'>
                    <h1 className='font-black text-2xl text-[#800020]'>Client 3</h1>
                    <p className='text-center text-pretty'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequuntur dolores accusantium veritatis quidem praesentium, ad ea iusto molestias sapiente earum dolorem alias fugiat. Cum omnis assumenda ullam quaerat blanditiis?</p>
                    <div className='flex flex-row gap-1 text-2xl text-[#800020]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
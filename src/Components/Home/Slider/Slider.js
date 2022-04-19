import bannerOne from '../../../Assets/Images/bannerOne.jpg'
import bannerTwo from '../../../Assets/Images/bannerTwo.jpg'
import bannerThree from '../../../Assets/Images/bannerThree.jpg'
import bannerFour from '../../../Assets/Images/bannerFour.jpg'
import bannerFive from '../../../Assets/Images/bannerFive.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='overlay w-full h-full absolute top-0'></div>
                    <img src={bannerOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='overlay w-full h-full absolute top-0'></div>
                    <img src={bannerTwo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='overlay w-full h-full absolute top-0'></div>
                    <img src={bannerThree} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='overlay w-full h-full absolute top-0'></div>
                    <img src={bannerFour} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='overlay w-full h-full absolute top-0'></div>
                    <img src={bannerFive} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
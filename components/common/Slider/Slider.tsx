"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
    items: any[];
    slidesPerView?: number;
    spaceBetween?: number;
    centeredSlides?: boolean;
    breakpoints?: any;
    renderItem: (item: any, index: number) => React.ReactNode;
}

export default function Slider({
    items,
    slidesPerView = 1,
    spaceBetween = 0,
    centeredSlides = false,
    breakpoints,
    renderItem,
}: SliderProps) {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Pagination]}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                centeredSlides={centeredSlides}
                breakpoints={breakpoints}
                pagination={{
                    clickable: true,
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active'
                }}
                className="mySwiper"
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i} className="flex-center">
                        {renderItem(item, i)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom CSS for the Pink Bullets */}
            <style jsx global>{`
                .custom-bullet {
                    width: 32px;
                    height: 12px;
                    display: inline-block;
                    border-radius: 99px;
                    background: #B9194A69;
                    margin: 0 4px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .custom-bullet-active {
                    background: #B9194A !important;
                }
                .swiper-pagination {
                    position: relative !important;
                    margin-top: 2rem;
                }
            `}</style>
        </div>
    );
}
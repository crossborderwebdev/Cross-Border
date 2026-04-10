"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
// Import Sliders with SSR disabled
const Slider = dynamic(() => import('@/components/common/Slider/Slider'), { 
    ssr: false,
    loading: () => <div className="h-[190px] min-w-[800px] animate-pulse rounded-xl" /> 
});

export default function AwardSlider({ data, breakPoints }: any) {
    return (
        <Slider
            items={data}
            slidesPerView={breakPoints.slidesPerView}
            spaceBetween={breakPoints.spaceBetween}
            centeredSlides={breakPoints.centeredSlides}
            breakpoints={breakPoints.breakPoints}
            renderItem={(cat) => (
                <div className={`flex items-center justify-center w-full h-[123px] bg-white rounded-xl shadow-sm`}>
                    <Image src={cat} width={140} height={50} alt="" className="h-auto w-auto" />
                </div>
            )}
        />
    );
}
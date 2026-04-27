"use client";
import VideoBlock from "@/components/sections/Block/VideoBlock";
import dynamic from "next/dynamic";

// Import Sliders with SSR disabled
const Slider = dynamic(() => import('@/components/common/Slider/Slider'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-white/5 animate-pulse rounded-xl" />
});

export default function VideoTestimonialSlider({ data, breakPoints }: any) {
    return (
        <Slider
            items={data}
            slidesPerView={breakPoints.slidesPerView}
            spaceBetween={breakPoints.spaceBetween}
            initialSlide={1}
            breakpoints={breakPoints.breakPoints || null}
            centeredSlides={breakPoints.centeredSlides}
            renderItem={(item) => (
                <div className="flex flex-col justify-center items-start gap-4">
                    <VideoBlock entry={item?.fields?.video} />
                    <p className="text-xl">{item?.fields?.description}</p>
                    <h4 className="text-sm text-left font-medium">{item?.fields?.personName}</h4>
                </div>
            )}
        />
    );
}
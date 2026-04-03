"use client";
import dynamic from "next/dynamic";
// Import Sliders with SSR disabled
const Slider = dynamic(() => import('@/components/common/Slider/Slider'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-white/5 animate-pulse rounded-xl" />
});

export default function TestimonialSlider({ data, breakPoints }: any) {
    return (
        <Slider
            items={data}
            slidesPerView={breakPoints.slidesPerView}
            spaceBetween={breakPoints.spaceBetween}
            breakpoints={breakPoints.breakPoints || null}
            centeredSlides={breakPoints.centeredSlides}
            renderItem={(item) => (
                <div className="bg-white p-6 md:p-8 rounded-2xl text-gray-900 h-full flex gap-8 shadow-lg">
                    <span className="text-8xl text-dark mb-4">“</span>
                    <div className="mt-6 w-[70%] md:w-full">
                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 mb-6 flex-grow italic">{item.quote}</p>
                        <div className="flex text-3xl text-yellow-400 mb-4">
                            {Array.from({ length: item.rating }).map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <div>
                            <p className="font-bold">{item.author}</p>
                            <p className="text-brand-red text-sm">{item.company}</p>
                        </div>
                    </div>
                </div>
            )}
        />
    );
}
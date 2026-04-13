"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
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
                <div className="bg-white p-6 md:p-8 rounded-2xl text-gray-900 h-full flex gap-8 shadow-lg" >
                    <span className="text-8xl text-dark mb-4">“</span>
                    <div className="mt-6 w-[70%] md:w-full">
                        <h4 className="font-bold text-xl mb-2">{item?.fields?.title}</h4>
                        <p className="text-gray-600 mb-6 flex-grow italic">{item?.fields?.description}</p>
                        <Image
                            src={`https:${item?.fields?.icon?.fields?.file?.url}`}
                            width={78}
                            height={15}
                            alt={item?.fields?.icon?.fields?.title || `Icon for ${item?.fields?.personName}`}
                            className="rounded-full mb-4"
                        />
                        <div>
                            <p className="font-bold">{item?.fields?.personName}</p>
                            <h4 className="text-secondary text-sm">{item?.fields?.companyNameAndDesignation}</h4>
                        </div>
                    </div>
                </div >
            )}
        />
    );
}
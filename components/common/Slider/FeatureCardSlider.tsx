"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
// Import Sliders with SSR disabled
const Slider = dynamic(() => import('@/components/common/Slider/Slider'), {
    ssr: false,
    loading: () => <div className="h-[235px] w-full bg-white/5 animate-pulse rounded-xl" />
});

export default function FeatureCardSlider({ data, breakPoints }: any) {
    return (
        <Slider
            items={data}
            slidesPerView={breakPoints.slidesPerView}
            spaceBetween={breakPoints.spaceBetween}
            breakpoints={breakPoints.breakPoints || null}
            centeredSlides={breakPoints.centeredSlides}
            renderItem={(cat) => (
                <div className={`
                    p-10 flex flex-col gap-6  w-full h-[236px] text-center shadow-[1px_4px_30px_0px_#00000026] rounded-xl
                    ${cat.active
                        ? 'bg-[linear-gradient(180deg,#212121_-10.28%,#582D43_58.62%,#C43776_111.16%)] text-white'
                        : 'bg-white text-gray-900'
                    }
                `}>
                    <Image
                        src={cat.icon}
                        alt={`card`}
                        width={50}
                        height={50}
                    />
                    <h3 className="mt-3 text-2xl text-left font-semibold leading-[1.2] w-[120px]">{cat.title}</h3>
                </div>
            )}
        />
    );
}
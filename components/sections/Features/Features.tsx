import Image from 'next/image';
import FeatureCardSlider from '@/components/common/Slider/FeatureCardSlider';

export default function Features() {
    const categories = [
        { title: "Corporate Markets", icon: '/assets/corporate_market_icon.png' },
        { title: "Private Markets", icon: '/assets/corporate_market_icon.png', active: true },
        { title: "Treasury Management Solutions", icon: '/assets/corporate_market_icon.png' },
        { title: "Invoice Automation", icon: '/assets/corporate_market_icon.png' },
    ];

    const sliderBreakpoints = {
        slidesPerView: 1.4,
        spaceBetween: 20,
    };

    return (
        <section className="bg-white px-6 pb-[100px] -mt-[100px]">
            {/* Video Wrapper */}
            <div className="max-w-[995px] mx-auto mb-20 relative rounded-[24px] overflow-hidden group">
                <Image
                    src="/assets/videoPoster.png"
                    alt="Video"
                    width={1200}
                    height={675}
                    layout="responsive"
                />
                {/* Play Button - Only shows on group hover as per your SCSS display:none/flex logic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#db2777] rounded-full hidden group-hover:flex items-center justify-center text-white text-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#be185d]">
                    ▶
                </div>
            </div>

            {/* Header */}
            <div className="text-center mb-[60px]">
                <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-900 leading-tight">
                    Products designed for the way modern business pays.
                </h2>
                <p className="font-medium text-[22px] md:text-[30px] text-gray-700 mt-2">
                    What Corpay Cross-Border Solution are you looking for today?
                </p>
            </div>

            {/* Flex Container */}
            <div className="hidden sm:flex max-w-[1000px] mx-auto flex flex-wrap gap-6 justify-center">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`
                            p-[40px] py-[40px] md:p-[30px] md:py-[30px] rounded-[15px] shadow-[1px_4px_30px_0px_rgba(0,0,0,0.15)] 
                            transition-all duration-300 cursor-pointer flex flex-col
                            flex-1 basis-full sm:basis-[calc(50%-24px)] lg:basis-[calc(25%-24px)]
                            hover:-translate-y-1.5
                            ${cat.active
                                ? 'bg-[linear-gradient(180deg,#212121_-10.28%,#582D43_58.62%,#C43776_111.16%)] text-white'
                                : 'bg-[#f9fafb] text-gray-900'
                            }
                        `}
                    >
                        <Image
                            className="mb-[34px] block"
                            src={cat.icon}
                            height={50}
                            width={50}
                            alt='icon'
                        />
                        <h3 className={`text-[25px] font-bold leading-[1.2] ${cat.active ? 'text-white' : 'text-[#111827]'}`}>
                            {cat.title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Mobile Slider Only */}
            <div className="sm:hidden">
                <FeatureCardSlider data={categories} breakPoints={sliderBreakpoints} />
            </div>
        </section>
    );
}
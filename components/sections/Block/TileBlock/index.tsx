import Image from "next/image";
import AwardSlider from '@/components/common/Slider/AwardSlider';
import TestimonialSlider from '@/components/common/Slider/TestimonialSlider';
import FeatureCardSlider from "@/components/common/Slider/FeatureCardSlider";

const TileBlock = ({ entry }: { entry: any }) => {
    const style = entry?.fields?.style;
    const blocks = entry?.fields?.blocks ?? [];

    // if (style === "Partners") {
    //     return (
    //         <PartnerDynamic
    //             items={blocks}
    //             slidesPerView={1.8}
    //             spaceBetween={20}
    //             breakpoints={{ 1024: { slidesPerView: 3, spaceBetween: 20 } }}
    //             renderItem={renderItem}
    //         />
    //     );
    // }

    if (style === "Awards" || style === "Partners") {
        const awardBreakpoints = {
            slidesPerView: 1.8,
            spaceBetween: 20,
            breakPoints: {
                1024: { slidesPerView: 3, spaceBetween: 20 },
            },
        };
        return (
            <AwardSlider data={blocks} breakPoints={awardBreakpoints} />
        );
    }

    if (style === "Testimonials") {
        const testimonialSliderBreakpoints = {
            slidesPerView: 0.9,
            spaceBetween: 20,
            centeredSlides: false,
            breakPoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
            },
        };
        return (
            <div className="max-w-[1300px] mx-auto">
                <TestimonialSlider data={blocks} breakPoints={testimonialSliderBreakpoints} />
            </div>
        );
    }

    if (style === "Awards Slider") {
        const awardSliderBreakpoints = {
            slidesPerView: 1.4,
            spaceBetween: 20,
            centeredSlides: true,
            breakPoints: {
                640: {
                    slidesPerView: 3.4,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
            },
        };
        return (
            <div className="max-w-[1300px] mx-auto">
                <AwardSlider data={blocks} breakPoints={awardSliderBreakpoints} />
            </div>
        );
    }

    if (style === "4 Column Product Boxes") {
        const sliderBreakpoints = {
            slidesPerView: 1.4,
            spaceBetween: 20,
        };
        return (
            <div>
                <div className="hidden sm:flex max-w-[1000px] mx-auto flex-wrap gap-6 justify-center pt-[45px]">
                    {blocks.map((item: any, idx: number) => {
                        const url = item?.fields?.icon?.fields?.file?.url || item?.fields?.image?.fields?.file?.url || item?.fields?.partnerImage?.fields?.file?.url;
                        const title = item?.fields?.linkText;

                        return (
                            <div
                                key={idx}
                                className={`
                                    p-10 md:p-[30px] rounded-[15px] shadow-[1px_4px_30px_0px_rgba(0,0,0,0.15)] 
                                    cursor-pointer flex flex-col flex-1 basis-full sm:basis-[calc(50%-24px)] lg:basis-[calc(25%-24px)]
                                    group hover:bg-[linear-gradient(180deg,#212121_-10.28%,#582D43_58.62%,#C43776_111.16%)] hover:text-white
                                    ${item?.sys?.id === "1oOFtNabeMz8gGDEzbjgZO"
                                        ? 'bg-[linear-gradient(180deg,#212121_-10.28%,#582D43_58.62%,#C43776_111.16%)]'
                                        : 'bg-[#f9fafb] text-primary'
                                    }
                                `}
                            >
                                {url && (
                                    <Image
                                        className={`mb-[34px] block ${item?.sys?.id === "1oOFtNabeMz8gGDEzbjgZO" ? 'invert' : 'group-hover:invert'}`}
                                        src={`https:${url}`}
                                        height={50}
                                        width={50}
                                        alt='icon'
                                    />
                                )}
                                <h3 className={`
                                    text-2xl font-bold leading-[1.2] group-hover:text-accent
                                    ${item?.sys?.id === "1oOFtNabeMz8gGDEzbjgZO"
                                        ? 'text-accent'
                                        : 'text-primary'
                                    }
                                `}>
                                    {title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
                {/* Mobile Slider Only */}
                <div className="sm:hidden">
                    <FeatureCardSlider data={blocks} breakPoints={sliderBreakpoints} />
                </div>
            </div>
        );
    }

    return null;
};

export default TileBlock;
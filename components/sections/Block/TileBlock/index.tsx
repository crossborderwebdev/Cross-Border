import Image from "next/image";
import AwardSlider from '@/components/common/Slider/AwardSlider';
import TestimonialSlider from '@/components/common/Slider/TestimonialSlider';

const TileBlock = ({ entry }: { entry: any }) => {
    const style = entry?.fields?.style;
    const blocks = entry?.fields?.blocks ?? [];

    const renderItem = (item: any, index: number) => {

        if (style === "Testimonials") {
            return <div className="bg-accent p-6 md:p-8 rounded-2xl text-gray-900 h-full flex gap-8 shadow-lg" >
                <span className="text-8xl text-dark mb-4">“</span>
                <div className="mt-6 w-[70%] md:w-full">
                    <h4 className="font-bold text-xl mb-2">{item?.fields?.title}</h4>
                    <p className="text-gray-600 mb-6 flex-grow italic">{item?.fields?.description}</p>
                    {/* <div className="flex text-3xl text-yellow-400 mb-4">
                        {Array.from({ length: item.rating }).map((_, i) => <span key={i}>★</span>)}
                    </div> */}
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
        } else {
            const url = item?.fields?.partnerImage?.fields?.file?.url || item?.fields?.awardsImage?.fields?.file?.url;
            const alt =
                item?.fields?.partnerImage?.fields?.title ||
                item?.fields?.internalName ||
                "";

            if (!url) return null;
            return (
                <div className="flex justify-center items-center w-full h-[123px] bg-accent rounded-xl shadow-sm">
                    <Image
                        src={`https:${url}`}
                        width={140}
                        height={50}
                        alt={alt}
                        className="h-auto w-auto"
                    />
                </div>
            );
        }
    };

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
            <TestimonialSlider data={blocks} breakPoints={testimonialSliderBreakpoints} />
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
            <AwardSlider data={blocks} breakPoints={awardSliderBreakpoints} />
        );
    }

    return null;
};

export default TileBlock;
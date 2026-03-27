import AwardSlider from '@/components/common/Slider/AwardSlider';
import Image from 'next/image';

// Memory check: Using your specific dummy data structure
const dummyData: any = {
    title: "Our Partners",
    description: "As your trusted partner, we help solve the challenges of processing payments, enabling your organization to create, integrate, service, and scale a world-class currency and payments offering. We aim to enhance your offering with new payments and risk management capabilities, or process transactions on behalf of your customers, fueling your strategic growth. We're proud to partner with these leading organizations and associations.",
    image: {
        sys: { id: '1' },
        url: '/assets/partners.png',
        title: 'Partners working together',
    },
    partnerLogosCollection: {
        items: [
            { sys: { id: 'l1' }, name: 'Mastercard', logo: { url: '/assets/corporate_market_icon.png', title: 'Mastercard', sys: { id: 'a1' } } },
            { sys: { id: 'l2' }, name: 'FEI Canada', logo: { url: '/assets/corporate_market_icon.png', title: 'FEI', sys: { id: 'a2' } } },
            { sys: { id: 'l3' }, name: 'FEI Canada', logo: { url: '/assets/corporate_market_icon.png', title: 'FEI', sys: { id: 'a2' } } },
            { sys: { id: 'l4' }, name: 'FEI Canada', logo: { url: '/assets/corporate_market_icon.png', title: 'FEI', sys: { id: 'a2' } } },
            { sys: { id: 'l5' }, name: 'FEI Canada', logo: { url: '/assets/corporate_market_icon.png', title: 'FEI', sys: { id: 'a2' } } },
            { sys: { id: 'l6' }, name: 'FEI Canada', logo: { url: '/assets/corporate_market_icon.png', title: 'FEI', sys: { id: 'a2' } } },
        ]
    }
};

const images = [
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
]

const awardBreakpoints = {
    slidesPerView: 1.8,
    spaceBetween: 20,
    breakPoints: {
        1024: { slidesPerView: 3, spaceBetween: 20 },
    },
};

export default function Partner({ data = dummyData }: { data?: any }) {
    const logos = data?.partnerLogosCollection?.items ?? [];
    const sectionImage = data?.image?.url;

    return (
        <section className="py-20 px-6 md:ps-6 md:pe-0 overflow-hidden" style={{ background: 'linear-gradient(180deg,rgba(180, 211, 235, 1) 50%, rgba(247, 246, 245, 1) 100%)' }}>
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-4 lg:gap-16">

                {/* Left Side: Content and Logos */}
                <div className="flex-1 w-full">
                    <h2 className="text-[30px] md:text-[48px] text-center md:text-left font-bold text-gray-900 mb-6 leading-tight">
                        {data?.title}
                    </h2>
                    <p className="text-[20px] text-center md:text-left font-normal text-gray-700 leading-relaxed mb-10 max-w-2xl">
                        {data?.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {/* {logos.length > 0 ? (
                            logos.map((item: any) => (
                                <div
                                    key={item.sys.id}
                                    className="bg-white rounded-xl shadow-sm flex items-center justify-center p-6 min-w-[140px] h-[80px] flex-1 basis-[calc(33.333%-1rem)] hover:shadow-md transition-shadow"
                                >
                                    {item.logo?.url ? (
                                        <Image
                                            src={item.logo.url}
                                            alt={item.logo.title || item.name}
                                            width={120}
                                            height={40}
                                            className="object-contain max-h-full"
                                        />
                                    ) : (
                                        <span className="text-xs text-gray-400 font-bold uppercase">{item.name}</span>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 italic">No partners available.</p>
                        )} */}
                        <div className='max-w-[600px]'>
                            <AwardSlider data={images} breakPoints={awardBreakpoints} />
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="hidden md:flex flex-1 relative w-full md:min-h-[500px]">
                    {sectionImage ? (
                        /* Memory: rounded-tl-[20px] and rounded-bl-[200px] */
                        <div className="relative h-[600px] w-full rounded-tl-[20px] rounded-bl-[200px] lg:rounded-bl-[240px] overflow-hidden shadow-2xl ">
                            <Image
                                src={sectionImage}
                                alt={data?.image?.title || "Partners"}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: "center"
                                }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ) : (
                        <div className="bg-gray-200 h-[500px] w-full rounded-bl-[200px]" />
                    )}
                </div>

            </div>
        </section>
    );
}
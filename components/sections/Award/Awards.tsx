import AwardSlider from '@/components/common/Slider/AwardSlider';
import Image from 'next/image';

const awardsDummyData = {
    title: "Our Awards",
    description: "Our main goal as an organization is keeping our customers satisfied, and providing them with tools to suppor t their growth in a changing global economy. We are committed to adding new features and benefits to our solution set for our clients many of whom have long tenures with Corpay. These innovations often earn us recognition and accolades from various industr y professionals and publications",
    heroImage: {
        sys: { id: 'h1' },
        url: '/assets/award.png',
        title: 'Trophy Award',
    },
    awardsCollection: {
        items: [
            { sys: { id: 'a1' }, year: '2023', logo: { sys: { id: 'l1' }, url: '/assets/corporate_market_icon.png', title: 'Award 1' } },
            { sys: { id: 'a2' }, year: '2023', logo: { sys: { id: 'l2' }, url: '/assets/corporate_market_icon.png', title: 'Award 2' } },
            { sys: { id: 'a3' }, year: '2023', logo: { sys: { id: 'l3' }, url: '/assets/corporate_market_icon.png', title: 'Award 3' } },
        ]
    }
};

const images = [
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
    '/assets/awardlogo.png',
]

const awardBreakpoints = {
    slidesPerView: 1.8,
    spaceBetween: 20,
    breakPoints:{
        1024: { slidesPerView: 3, spaceBetween: 20 },
    },
};

export default function Awards({ data = awardsDummyData }: { data?: any }) {
    const awards = data?.awardsCollection?.items ?? [];
    const sectionImage = data?.heroImage?.url;

    return (
        <section
            className="py-2 md:py-10 lg:pb-30 overflow-hidden"
            style={{ background: 'linear-gradient(180deg,rgba(247, 246, 245, 1) 60%, rgba(244, 185, 99, 1) 100%)' }}
        >
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side: Image */}
                <div className="hidden md:block flex-1 relative">
                    {sectionImage ? (
                        <div className="relative h-[610px] rounded-tr-[30px] rounded-br-[200px] lg:rounded-br-[240px] overflow-hidden shadow-2xl">
                            <Image
                                src={sectionImage}
                                alt={data?.heroImage?.title || "Awards"}
                                fill
                                style={{ objectFit: 'cover', objectPosition: "center" }}
                                // sizes="(max-width: 768px) 0vw, 50vw"
                                priority={false}
                            />
                        </div>
                    ) : (
                        <div className="bg-gray-200 h-[600px] w-full rounded-tr-[20px] rounded-bl-[240px]" />
                    )}
                </div>

                {/* Right Side: Content and Slider */}
                <div className="flex-1 w-full px-6 md:px-0 md:pr-5 overflow-hidden">
                    <h2 className="text-center md:text-left text-[30px] md:text-[48px] font-bold text-gray-900 mb-6 leading-tight">
                        {data?.title}
                    </h2>
                    <p className="text-center md:text-left text-[20px] font-normal text-gray-700 leading-relaxed mb-10 md:mb-30 md:max-w-xl">
                        {data?.description}
                    </p>

                    {/* CSS Slider Container hello world */}
                    <div className="md:max-w-[600px]">
                        <AwardSlider data={images} breakPoints={awardBreakpoints} />
                    </div>
                </div>

            </div>
        </section>
    );
}
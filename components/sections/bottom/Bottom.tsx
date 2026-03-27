import Team from './Team';
import Image from 'next/image';
import TestimonialSlider from '@/components/common/Slider/TestimonialSlider';
import AwardSlider from '@/components/common/Slider/AwardSlider';

const teamDummyData = {
    hero: {
        title: "Team",
        description: "Our main goal as an organization is keeping our customers satisfied, and providing them with tools to suppor t their growth in a changing global economy. We are committed to adding new features and benefits to our solution set for our clients many of whom have long tenures with Corpay.",
        videoPoster: "/assets/teamVideoPoster.png",
    },
    testimonials: [
        { id: 't1', title: "Direct yet Friendly Tone", quote: "Lorem ipsum dolor sit amet, consectetur Quis ipsum suspendisse ultrices", author: "Victoria Wotton", company: "Fementum Odio Co.", rating: 5 },
        { id: 't2', title: "Direct yet Friendly Tone", quote: "Lorem ipsum dolor sit amet, consectetur Quis ipsum suspendisse ultrices", author: "Victoria Wotton", company: "Fementum Odio Co.", rating: 5 },
        { id: 't3', title: "Direct yet Friendly Tone", quote: "Lorem ipsum dolor sit amet, consectetur Quis ipsum suspendisse ultrices", author: "Victoria Wotton", company: "Fementum Odio Co.", rating: 5 },
    ],
    awards: [
        '/assets/awardlogo.png',
        '/assets/awardlogo.png',
        '/assets/awardlogo.png',
        '/assets/awardlogo.png',
        '/assets/awardlogo.png',
    ]
};

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

export default function Bottom({ data = teamDummyData }: { data?: any }) {
    return (
        <section className="relative w-full pt-10 md:pt-24 pb-30 md:pb-60 text-white overflow-hidden bg-[linear-gradient(180deg,#C76F96_0%,#B54275_10%,#522F42_100%)]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-20">

                {/* Section 1: Video & Content */}
                <Team data={data.hero} />

                {/* Section 2: Testimonials Slider */}
                <TestimonialSlider data={data.testimonials} breakPoints={testimonialSliderBreakpoints} />

                {/* Section 3: Awards Slider */}
                <AwardSlider data={data.awards} breakPoints={awardSliderBreakpoints} />

            </div>

            {/* Background Decorative Lines */}
            <div className="absolute bottom-0 left-0 w-full h-40 md:h-45 pointer-events-none">
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={'/assets/bglines.png'}
                        alt='bgLines'
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
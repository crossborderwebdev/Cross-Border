import Image from 'next/image';
import Button from '@/components/common/Button/Button';

export default function Hero() {
    return (
        <section className="relative min-h-[700px] flex items-center py-20 px-6 pb-[200px] text-white bg-[linear-gradient(180deg,#212121_-10.28%,#582D43_58.62%,#C43776_111.16%)]">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between lg:text-left text-center">
                
                {/* Content Area */}
                <div className="flex-1 w-full">
                    <h1 className="text-[50px] font-semibold leading-[1.1] mb-6 tracking-tight">
                        Streamline cross-border payments
                    </h1>
                    
                    <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-[455px] lg:mx-0 mx-auto">
                        Simplify the way you connect with the global marketplace. Our world-class trading platform and integrated payment solutions can be customized to your unique business requirements.
                    </p>

                    {/* Button with mobile specific padding override */}
                    <div className="[&_button]:max-lg:px-[83px] [&_button]:max-lg:py-[12px]">
                        <Button variant="primary" label="Learn More" />
                    </div>

                    {/* Stats Grid */}
                    <div className="flex justify-center lg:justify-start gap-10 lg:gap-[100px] mt-[30px] pt-10">
                        <div className="flex flex-col items-start">
                            <strong className="text-[26px] lg:text-[32px] font-semibold block">$4.1M+</strong>
                            <p className="text-[13px] lg:text-[15px] font-medium text-[#F9F9FB] max-w-[100px] text-left leading-tight m-0">
                                Payments annually
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-start">
                            <strong className="text-[26px] lg:text-[32px] font-semibold block">200+</strong>
                            <p className="text-[13px] lg:text-[15px] font-medium text-[#F9F9FB] max-w-[100px] text-left leading-tight m-0">
                                Trusted Countries
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <strong className="text-[26px] lg:text-[32px] font-semibold block">2000+</strong>
                            <p className="text-[13px] lg:text-[15px] font-medium text-[#F9F9FB] max-w-[100px] text-left leading-tight m-0">
                                Satisfied Customers
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Container - Hidden on Mobile */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <Image 
                        src="/assets/heroImg.png" 
                        alt="Coins" 
                        width={536} 
                        height={517} 
                        className="max-w-full h-auto"
                        priority 
                    />
                </div>
                
            </div>
        </section>
    );
}
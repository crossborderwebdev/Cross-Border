import Image from 'next/image';
import Button from '@/components/common/Button';
import StatsBlock from '../StatsBlock';

export default function Hero({ entry }: { entry: any }) {
    return (
        <div className="relative min-h-[700px] flex items-center py-20 px-6 pb-[200px] text-white">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between lg:text-left text-center">

                {/* Content Area */}
                <div className="flex-1 w-full">
                    <h1 className="text-[50px] font-semibold leading-[1.1] mb-6 tracking-tight">
                        {entry?.fields?.title}
                    </h1>

                    <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-[455px] lg:mx-0 mx-auto">
                        {entry?.fields?.description}
                    </p>

                    {/* Button with mobile specific padding override */}
                    <div className="[&_button]:max-lg:px-[83px] [&_button]:max-lg:py-[12px] [&_button]:mx-auto" >
                        {entry?.fields?.ctAs?.map((cta:any, index:number) => (
                            <Button key={index} entry={cta} />
                        ))}
                    </div>


                    {entry?.fields?.statsBlock && (
                        <StatsBlock entry={entry.fields.statsBlock} />
                    )}
                </div>

                {/* Image Container - Hidden on Mobile */}
                <div className="hidden lg:flex flex-1 justify-center">
                    {entry?.fields?.bannerImage?.fields?.file?.url && (
                        <Image
                            src={`https:${entry?.fields?.bannerImage?.fields?.file?.url}`}
                            alt={entry?.fields?.bannerImage?.fields?.title || 'Hero Image'}
                            width={536}
                            height={517}
                            className="max-w-full h-auto"
                            priority
                        />
                    )}
                </div>

            </div>
        </div>
    );
}
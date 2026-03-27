import Image from 'next/image';

export default function Team({ data }: any) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <div className="max-w-[560px] w-full flex-1 relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image src={data.videoPoster} alt="Team" width={300} height={200} className="w-full" />
                {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="w-20 h-20 bg-[#C43776] rounded-full flex items-center justify-center transition-transform hover:scale-110">
                        <span className="text-white text-3xl ml-1">▶</span>
                    </button>
                </div>
                <div className="absolute bottom-6 w-full text-center">
                    <p className="text-xl font-medium tracking-wide">Dedicated Global Team</p>
                </div> */}
            </div>

            <div className="max-w-[545px] lg:max-w-[384px]">
                <h2 className="text-center lg:text-left text-5xl font-bold mb-6">{data.title}</h2>
                <p className="text-center lg:text-left text-[20px] text-white/80 leading-relaxed">
                    {data.description}
                </p>
            </div>
        </div>
    );
}
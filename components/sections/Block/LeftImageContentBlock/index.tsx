import Image from "next/image";
import TileBlock from "@/components/sections/Block/TileBlock";

const LeftImageContentBlock = ({ entry }: { entry: any }) => {
    const imageUrl = entry?.fields?.image?.fields?.file?.url;
    const imageAlt = entry?.fields?.image?.fields?.title || "Content Image";
    return (
        <div
            className="py-2 md:py-10 lg:pb-30 overflow-hidden"
            style={{ background: 'linear-gradient(180deg,rgba(247, 246, 245, 1) 60%, rgba(244, 185, 99, 1) 100%)' }}
        >
            <div className="max-w-[1900px] mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-8 xl:gap-16">

                <div className="hidden md:block flex-1 relative">
                    {imageUrl ? (
                        <div className="relative h-[610px] rounded-tr-[30px] rounded-br-[200px] lg:rounded-br-[240px] overflow-hidden shadow-2xl">
                            <Image
                                src={`https:${imageUrl}`}
                                alt={imageAlt}
                                fill
                                style={{ objectFit: 'cover', objectPosition: "center" }}
                                sizes="(max-width: 768px) 0vw, 50vw"
                                priority={false}
                            />
                        </div>
                    ) : (
                        <div className="bg-gray-200 h-[610px] w-full rounded-bl-[200px]" />
                    )}
                </div>

                {/* Right Side: Content and Slider */}
                <div className="w-full md:w-1/2 max-w-[600px] me-0 xl:me-[10%] px-6 md:px-0 md:pe-6 xl:pe-0">
                    <h2 className="text-center md:text-left text-[30px] md:text-[48px] font-bold text-black mb-6 leading-tight">
                        {entry?.fields?.title}
                    </h2>
                    <p className="text-center md:text-left text-xl font-normal text-black leading-relaxed mb-10 md:mb-30 md:max-w-xl">
                        {entry?.fields?.description}
                    </p>
                    {entry?.fields?.tile && (
                        <div className="w-full" >
                            <TileBlock entry={entry.fields.tile} />
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default LeftImageContentBlock
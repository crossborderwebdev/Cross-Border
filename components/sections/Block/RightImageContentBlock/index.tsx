import Image from "next/image";
import TileBlock from "@/components/sections/Block/TileBlock";

const RightImageContentBlock = ({ entry }: { entry: any }) => {
    const imageUrl = entry?.fields?.image?.fields?.file?.url;
    const imageAlt = entry?.fields?.image?.fields?.title || "Content Image";
    return (
        <div
            className="py-20"
        >
            <div className="max-w-[1900px] mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-8 xl:gap-16">

                {/* Left: Content + TileBlock */}
                <div className="w-full md:w-1/2 max-w-[600px] ms-0 xl:ms-[10%] px-6 md:px-0 md:ps-6 xl:ps-0">
                    <h2
                        className="text-[30px] md:text-[48px] text-center md:text-left font-bold text-black mb-6 leading-tight"

                    >
                        {entry?.fields?.title}
                    </h2>
                    <p
                        className="text-xl text-center md:text-left font-normal text-black leading-relaxed mb-10 max-w-2xl"

                    >
                        {entry?.fields?.description}
                    </p>

                    {entry?.fields?.tile && (
                        <div className="w-full" >
                            <TileBlock entry={entry.fields.tile} />
                        </div>
                    )}
                </div>

                {/* Right: Image */}
                <div className="hidden md:flex w-1/2 relative w-full md:min-h-[500px]">
                    {imageUrl ? (
                        <div className="relative h-[610px] w-full rounded-tl-[20px] rounded-bl-[200px] lg:rounded-bl-[240px] overflow-hidden shadow-2xl">
                            <Image
                                src={`https:${imageUrl}`}
                                alt={imageAlt}
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                sizes="(max-width: 768px) 100vw, 50vw"

                            />
                        </div>
                    ) : (
                        <div className="bg-gray-200 h-[610px] w-full rounded-bl-[200px]" />
                    )}
                </div>

            </div>
        </div>
    )
}

export default RightImageContentBlock
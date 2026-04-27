import Image from "next/image";
import Button from "@/components/common/Button";

const CardBlock = ({ items }: { items: any[] }) => {

    return (
        <>
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item: any, index: number) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md">
                        <div className="flex items-center gap-6 mb-4">
                            <Image
                                src={item?.fields?.icon?.fields?.file?.url}
                                alt={`card`}
                                width={33}
                                height={33}
                            />
                            <h3 className="text-xl font-semibold text-primary">
                                {item?.fields?.title}
                            </h3>
                        </div>
                        <p className="text-base font-normal text-primary mb-10">
                            {item?.fields?.description}
                        </p>
                        {item?.fields?.cta && (
                            <Button key={index} entry={item?.fields?.cta} />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardBlock;
import Image from 'next/image';
import "./style.css"

const Row = ({ direction, items }: { direction: 'left' | 'right'; items: any[] }) => {
    const scrollClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
        <div className="flex overflow-hidden w-full">
            <div className={`flex w-max flex-nowrap ${scrollClass}`}>
                {[...items, ...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-3 min-w-[180px] bg-[#F5F7F9] px-11 py-5 rounded-lg mx-2">
                        <Image
                            src={item.fields.flag.fields.file.url}
                            alt={item.fields.flag.fields.title}
                            width={37}
                            height={19}
                        />
                        <span className="text-[22px] font-medium text-primary ">{item.fields.currencyName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function CurrencyFlagBlock({ items }: { items: any[] }) {
    return (
        <div className="py-5 space-y-5">
            <Row direction="left" items={items} />
            <Row direction="right" items={items} />
            <Row direction="left" items={items} />
        </div>
    );
}
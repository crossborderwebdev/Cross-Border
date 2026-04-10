import { StatsBlockEntry, StatsBlockItemProps } from "./type"

const StatsBlock = ({ entry }: { entry: StatsBlockEntry }) => {
    return (
        <div className="flex justify-center lg:justify-start gap-10 lg:gap-[100px] mt-[30px] pt-10">
            {entry.fields.blocks?.map((state, index) => (
                <StateItems key={index} entry={state} />
            ))}
        </div>
    );
}

const StateItems = ({ entry }: { entry: StatsBlockItemProps }) => {
    return (
        <div className="flex flex-col items-start">
            <strong className="text-[26px] lg:text-[32px] font-semibold block">
                {entry.fields.header}
            </strong>
            <p className="text-[13px] lg:text-[15px] font-medium text-[#F9F9FB] max-w-[100px] text-left leading-tight m-0">
                {entry.fields.body}
            </p>
        </div>
    )
}

export default StatsBlock
import { BlockRenderer } from '@/components/sections/Block';

const SectionBlock = ({ entry }: { entry: any }) => {
    const blocks = entry?.fields?.components || entry?.fields?.blocks || [];

    return (
        <section>
            {blocks.map((block: any) => (
                <BlockRenderer key={block?.sys?.id} data={block} />
            ))}
        </section>
    );
};

export default SectionBlock;

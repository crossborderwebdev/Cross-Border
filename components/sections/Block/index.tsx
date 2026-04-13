'use client'
import Hero from '@/components/sections/Block/Hero/Hero';
import ContentBlock from '@/components/sections/Block/ContentBlock';
import TileBlock from './TileBlock';

const componentMap: any = {
    heroBlock: Hero,
    contentBlock: ContentBlock,
    tileBlock: TileBlock,
};

export const BlockRenderer = ({ key, data }: { key?: string; data: any }) => {
    const contentTypeId = data.sys?.contentType?.sys?.id || data.__typename;
    const Block = componentMap[contentTypeId];

    console.log(data, 'ssss')

    if (!Block) {
        console.warn(`No component found for type: ${data.__typename}`);
        return null;
    }

    return <Block entry={data} />;
};
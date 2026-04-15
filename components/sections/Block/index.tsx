'use client'
import Hero from '@/components/sections/Block/Hero/Hero';
import ContentBlock from '@/components/sections/Block/ContentBlock';
import TileBlock from './TileBlock';
import VideoBlock from './VideoBlock';
import TextBlock from './TextBlock';

const componentMap: any = {
    heroBlock: Hero,
    contentBlock: ContentBlock,
    tileBlock: TileBlock,
    videoBlock: VideoBlock,
    commonTextBlock: TextBlock,
};

export const BlockRenderer = ({ key, data }: { key?: string; data: any }) => {
    const contentTypeId = data.sys?.contentType?.sys?.id || data.__typename;
    const Block = componentMap[contentTypeId];

    if (!Block) {
        console.warn(`No component found for type: ${data.__typename}`);
        return null;
    }

    return <Block entry={data} />;
};
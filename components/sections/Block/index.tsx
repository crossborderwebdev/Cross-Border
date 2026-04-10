// components/contentful/Renderer.tsx
import Hero from '@/components/sections/Block/Hero/Hero';

const componentMap: any = {
    heroBlock: Hero,
    // Add more mappings here as you build components
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
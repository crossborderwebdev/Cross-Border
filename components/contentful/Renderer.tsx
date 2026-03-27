// components/contentful/Renderer.tsx
import Hero from '../sections/Hero/Hero';

const componentMap: any = {
  Hero: Hero,
  // Add more mappings here as you build components
};

export const ContentfulRenderer = ({ data }: { data: any }) => {
  const Component = componentMap[data.__typename];

  if (!Component) {
    console.warn(`No component found for type: ${data.__typename}`);
    return null;
  }

  return <Component {...data} />;
};
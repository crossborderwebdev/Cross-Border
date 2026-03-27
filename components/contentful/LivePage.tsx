'use client';

// Use the exact module you found in the suggestions
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { ContentfulRenderer } from './Renderer';

export default function LivePage({ initialData, locale }: { initialData: any, locale: string }) {
  // 1. This hook transforms your static data into "live" data.
  // When you type in Contentful, this variable updates instantly.
  const liveData = useContentfulLiveUpdates(initialData);

  return (
    <main>
      {/* 2. Use liveData instead of initialData */}
      <h1 
        data-contentful-entry-id={liveData.sys.id} 
        data-contentful-field-id="title"
      >
        {liveData.title}
      </h1>

      {/* 3. Render your modules from the live-updated list */}
      {liveData.modulesCollection?.items.map((module: any) => (
        <ContentfulRenderer key={module.sys.id} data={module} />
      ))}
    </main>
  );
}
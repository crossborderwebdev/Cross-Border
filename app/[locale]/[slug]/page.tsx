import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/contentful/api';
import { getPageBySlug } from '@/lib/contentful/contentful';
import SectionBlock from '@/components/sections';
import Features from '@/components/sections/Block/Features/Features';

interface PageProps {
    params: Promise<{ locale: string; slug: string[] }>;
}

export default async function CMSPage({ params }: PageProps) {
    const { locale, slug }:any = await params;

    const page = await getPageBySlug(locale, slug, false);

    console.log( locale, slug, 'rrrrr')

    if (!page) {
        notFound();
    }

    const sections = page.fields?.sections as any[] || [];
    
    return (
        <>
            {sections.map((section: any) => (
                <SectionBlock key={section?.sys?.id} entry={section} />
            ))}
        </>
    );
}
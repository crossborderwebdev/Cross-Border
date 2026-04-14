import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/contentful/api';
import { getPageBySlug } from '@/lib/contentful/contentful';
import SectionBlock from '@/components/sections';

interface PageProps {
    params: Promise<{ locale: string; slug: string[] }>;
}

export default async function CMSPage({ params }: PageProps) {
    const { locale, slug }:any = await params;

    // Convert array ['blog', 'post-title'] to '/blog/post-title'
    const path = `/${slug.join('/')}`;

    // const pageData = await getPageData(path, locale);
    const page = await getPageBySlug(locale, slug, false);

    console.log( locale, slug, 'rrrrr')

    if (!page) {
        notFound();
    }

    const sections = page.fields?.sections as any[] || [];

    return (
        <>
            {/* <ContentfulRenderer data={page} /> */}
            {sections.map((section: any) => (
                <SectionBlock key={section?.sys?.id} entry={section} />
            ))}
        </>
    );
}
import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/contentful/api';
import { ContentfulRenderer } from '@/components/contentful/Renderer';

interface PageProps {
    params: Promise<{ locale: string; slug: string[] }>;
}

export default async function CMSPage({ params }: PageProps) {
    const { locale, slug } = await params;

    // Convert array ['blog', 'post-title'] to '/blog/post-title'
    const path = `/${slug.join('/')}`;

    const pageData = await getPageData(path, locale);

    if (!pageData) {
        notFound();
    }

    return (
        <main>
            <ContentfulRenderer data={pageData} />
        </main>
    );
}
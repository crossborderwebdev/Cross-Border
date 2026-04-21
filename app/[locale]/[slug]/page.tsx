import { notFound } from 'next/navigation';
import { getPageBySlug, getPagesOfType } from '@/lib/contentful/contentful';
import type { Metadata } from "next";
import SectionBlock from '@/components/sections';
import { locales } from '@/lib/helper/navigationHelper';

export const revalidate = 86400; // 1 day revalidate

interface PageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { locale, slug } = await params;
    const page = await getPageBySlug(locale, slug, false);
    
    if (!page) {
        return { title: "Corpay Cross-Border" };
    }
    const seo = page?.fields?.seo as any;

    return {
        title: seo?.title ?? "Corpay Cross-Border",
        description: seo?.description ?? "Corpay Cross-Border",
    };
}

export async function generateStaticParams() {
    const params: { locale: string; slug: string }[] = [];

    const pages = await getPagesOfType({
        pageContentType: 'page',
        locale: "en-US",
        preview: false
    });

    pages.forEach((page: any) => {
        locales.forEach((locale: any) => {
            params.push({
                locale: locale.code,
                slug: page.fields.slug,
            });
        });
    });

    return params;
}

export default async function CMSPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const page = await getPageBySlug(locale, slug, false);

    if (!page) notFound();

    const sections = (page.fields?.sections as any[]) || [];

    return (
        <>
            {sections.map((section: any) => (
                <SectionBlock key={section?.sys?.id} entry={section} />
            ))}
        </>
    );
}

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <>
            <main>{children}</main>
        </>
    );
}
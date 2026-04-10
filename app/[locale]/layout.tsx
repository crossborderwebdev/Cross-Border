import HeaderController from "@/components/header/HeaderController";
import FooterController from "@/components/footer/FooterController";
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
            {/* <HeaderController locale={locale} /> */}
            <main>{children}</main>
            {/* <FooterController /> */}
        </>
    );
}
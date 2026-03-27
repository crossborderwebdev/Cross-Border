// app/[locale]/[[...slug]]/layout.tsx

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function PageSlugLayout({ children, params }: LayoutProps) {
    // Await params if you need to use the locale for Header/Footer data
    const { locale } = await params;

    return (
        <>
            {/* You can add a slug-specific Header here if needed */}
            {children}
            {/* You can add a slug-specific Footer here if needed */}
        </>
    );
}
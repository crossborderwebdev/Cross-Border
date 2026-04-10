import { cookies, draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/contentful/api';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Hero from '@/components/sections/Block/Hero/Hero';
import Features from '@/components/sections/Block/Features/Features';
import Partner from '@/components/sections/Block/Partner/Partner';
import Awards from '@/components/sections/Block/Award/Awards';
import Bottom from '@/components/sections/Block/bottom/Bottom';
import { getPageBySlug } from '@/lib/contentful/contentful';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = await params;
  const { isEnabled: isDraftMode } = await draftMode();
  const cookieStore = await cookies();
  const activeLocale = cookieStore.get('NEXT_LOCALE')?.value || locale;

  const data = await getPageBySlug('en-US', ['abc'], isDraftMode);

  console.log('rrrr', data)

  if (!data) return notFound();

  // If we are in Draft Mode, use the LivePage client component
  // If we are in Production, just render the standard layout
  if (isDraftMode) {
    // return <LivePage initialData={data} locale={activeLocale} />;
  }

  return (
    <main>
      <Hero entry={data?.fields?.sections?.[0]?.fields?.blocks?.[0]} />
      <Features />
      <Partner />
      <Awards />
      <Bottom />
    </main>
  );
}
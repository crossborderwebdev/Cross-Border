import { cookies, draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/contentful/api';
import LivePage from '@/components/contentful/LivePage';
import { ContentfulRenderer } from '@/components/contentful/Renderer';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Hero from '@/components/sections/Hero/Hero';
import Features from '@/components/sections/Features/Features';
import Partner from '@/components/sections/Partner/Partner';
import Awards from '@/components/sections/Award/Awards';
import Bottom from '@/components/sections/bottom/Bottom';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = await params;
  const { isEnabled: isDraftMode } = await draftMode();
  const cookieStore = await cookies();
  const activeLocale = cookieStore.get('NEXT_LOCALE')?.value || locale;

  const data = await getPageData('/', activeLocale, isDraftMode);

  console.log(data, 'rrr', isDraftMode)

  if (!data) return notFound();

  // If we are in Draft Mode, use the LivePage client component
  // If we are in Production, just render the standard layout
  if (isDraftMode) {
    console.log('draft')
    return <LivePage initialData={data} locale={activeLocale} />;
  }

  return (
    <main>
      {/* <h1>{data.title}</h1> */}
      {/* {data.modulesCollection?.items.map((module: any) => (
        <ContentfulRenderer key={module.sys.id} data={module} />
      ))} */}
      <Hero />
      <Features />
      <Partner />
      <Awards />
      <Bottom />
    </main>
  );
}
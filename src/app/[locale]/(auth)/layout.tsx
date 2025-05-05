import { ReactNode } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
// i18n
import { routing } from '@/i18n/routing';
// Next Intl
import { getTranslations, setRequestLocale } from 'next-intl/server';
// Assets
import images_1 from "@/public/mock-images/—Pngtree—ramadan elements png blue_6124415.png"


type Props = {
  children?: ReactNode
  params: Promise<{ locale: string }>
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title')
  };
}

interface ProductPageProps {
  params: Promise<{ locale: string }>;
  children?: ReactNode;
}

export default async function LocaleLayout({ children, params }: ProductPageProps) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main>
      <div className='flex gap-8 w-full h-screen p-8'>
        <div className='w-full lg:w-[40%] h-full fcc flex-col '>
          {children}
        </div>
        <div className='w-[60%] h-full hidden lg:flex'>
          <div className='w-full h-full rounded-3xl overflow-hidden bg-primary-medium shadow-lg'>
            <Image
              unoptimized
              src={images_1}
              alt='login image'
              className='object-cover'
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

import PageLayout from '@/components/PageLayout';
import { setRequestLocale, getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>
};

export default async function PathnamesPage({ params }: Props) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations('IndexPage');


  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </div>
    </PageLayout>
  );
}

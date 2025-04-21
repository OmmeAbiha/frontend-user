import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { loadNamespaces } from './loadMessages';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const defaultNamespaces = ['common', 'layout', 'navigation'];

  return {
    locale,
    // messages: (
    //   await (locale === 'fa'
    //     ? // When using Turbopack, this will enable HMR for `en`
    //     import('../../messages/fa.json')
    //     : import(`../../messages/${locale}.json`))
    // ).default
    messages: await loadNamespaces(locale, defaultNamespaces)
  };
});

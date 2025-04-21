// i18n/loadMessages.ts
export async function loadNamespaces(locale: string, namespaces: string[]) {
    const messages: Record<string, any> = {};
  
    await Promise.all(
      namespaces.map(async (ns) => {
        try {
          const mod = await import(`../../messages/${locale}/${ns}.json`);
          messages[ns] = mod.default;
        } catch (error) {
          console.warn(`Namespace "${ns}" for locale "${locale}" not found`);
        }
      })
    );
  
    return messages;
  }
  
'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { GrLanguage } from "react-icons/gr";
import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import clsx from 'clsx';

export default function LocaleSwitcherMenu() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isPending, startTransition] = useTransition();

    const handleChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(
                // @ts-expect-error: locale routing types
                { pathname, params },
                { locale: nextLocale }
            );
        });
    };

    return (
        <Menu as="div" className="relative inline-block">
            <MenuButton
                className={clsx(
                    'flex items-center gap-2 rounded-full bg-gray-800 p-3 text-sm font-semibold text-white outline-none',
                    isPending && 'opacity-50 pointer-events-none'
                )}
            >
                <GrLanguage size={20} className="text-white text-base" />
            </MenuButton>

            <MenuItems
                anchor="bottom end"
                className="absolute z-50 mt-1 gap-1 flex flex-col w-40 rounded-xl border border-white/5 bg-gray-900 p-1 text-sm text-white shadow-lg outline-none"
            >
                {routing.locales.map((cur) => (
                    <MenuItem key={cur} as="button" onClick={() => handleChange(cur)}
                        className={({ active }) =>
                            clsx(
                                'w-full px-3 h-10 rounded-md ',
                                active ? 'bg-white/10' : '',
                                cur === locale ? 'bg-red-300' : ''
                            )
                        }
                    >
                        {t('locale', { locale: cur })}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
}

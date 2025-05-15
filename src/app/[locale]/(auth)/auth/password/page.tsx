"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import CustomLink from '@/src/components/CustomLink';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextBox from '@/src/components/inputs/TextBox';
import Button from '@/src/components/Button';
import { ArrowLeft, ArrowLeft2, Send2, SmsTracking } from 'iconsax-reactjs';

const validationSchema = Yup.object({
    password: Yup.string()
        .required('رمز عبور الزامی است')
        .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
        .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
        .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
        .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
        .matches(/[@$!%*?&#]/, 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد')
        .matches(/^[A-Za-z0-9@$!%*?&#]+$/, 'رمز عبور فقط باید شامل حروف انگلیسی و کاراکترهای مجاز باشد'),
});

function Page() {
    const router = useRouter();
    const locale = useLocale();
    const isEnglish = locale === 'en';
    const t = useTranslations('Auth.password');
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema,
        onSubmit: values => {
            const data = {
                password: values,
                country: values
            };

            console.log(data);
            router.push(`/auth/change-password`);
        }
    });

    useEffect(() => {
        passwordInputRef.current?.focus();
    }, []);

    return (
        <>
            <form className='flex flex-col w-full gap-y-4' onSubmit={formik.handleSubmit}>
                <div className='w-full'>
                    <div className='flex flex-col w-full'>
                        <p className='text-xs text-tertiary-600 mb-5'>{t('enterPassword')}</p>
                        <div className={`flex ${isEnglish && "flex-row-reverse"}`}>
                            <TextBox
                                id='password'
                                label={t('passwordLabel')}
                                type="phone"
                                name="password"
                                className='w-full'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={formik.errors.password}
                                touched={formik.touched.password}
                                ref={passwordInputRef}
                            />
                        </div>
                    </div>
                    <CustomLink className='text-xs text-secondary-400' href="/auth/forget-password/mobile-verification">{t('forgotPassword')}</CustomLink>
                </div>
                <Button
                    title={t('continue')}
                    type='submit'
                    iconPosition='end'
                    icon={<ArrowLeft className={`${isEnglish && "rotate-180"}`} />}
                />
            </form>
            <div className='flex flex-col w-full gap-3 mt-8'>
                <Button
                    variant='outline'
                    onClick={() => router.push("/auth/telegram")}
                >
                    <div className='w-full h-full flex font-normal items-center justify-between'>
                        <Send2 size={20} className={`${!isEnglish && "[transform:rotateY(180deg)]"}`} />
                        <span className='text-sm'>{t('telegramOption')}</span>
                        <ArrowLeft2 size={20} className={`${isEnglish && "rotate-180"}`} />
                    </div>
                </Button>
                <Button
                    variant='outline'
                    onClick={() => router.push("/auth/code")}
                >
                    <div className='w-full h-full font-normal flex items-center justify-between'>
                        <SmsTracking size={20} className={`${!isEnglish && "[transform:rotateY(180deg)]"}`} />
                        <span className='text-sm'>{t('smsOption')}</span>
                        <ArrowLeft2 size={20} className={`${isEnglish && "rotate-180"}`} />
                    </div>
                </Button>
            </div>
        </>
    );
}

export default Page;
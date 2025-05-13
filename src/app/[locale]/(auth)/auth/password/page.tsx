"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
// i18n
import { useRouter } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
// Formik
import { useFormik } from 'formik'
import * as Yup from 'yup'
// Component
import TextBox from '@/src/components/inputs/TextBox';
import Button from '@/src/components/Button';
// Iconsax
import { ArrowLeft, ArrowLeft2, Send2, SmsTracking } from 'iconsax-reactjs';


const validationSchema = Yup.object({
    phoneNumber: Yup.string()
        .required('شماره موبایل الزامی است')
        .matches(/^[0-9]{10}$/, 'شماره موبایل باید ۱۰ رقم باشد'),
});

function Page() {
    const router = useRouter();
    const locale = useLocale();
    const isEnglish = locale === 'en';
    const phoneNumberInputRef = useRef<HTMLInputElement>(null);
    const t_code = useTranslations('Auth.code');
    const t_telegram = useTranslations('Auth.telegram');
    // const t = useTranslations('Auth.password');

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
        },
        validationSchema,
        onSubmit: values => {

            const data = {
                phoneNumber: values,
                country: values
            };

            console.log(data);
            router.push(`/auth/change-password`);
        }
    });

    useEffect(() => {
        phoneNumberInputRef.current?.focus();
    }, []);

    return (
        <>
            <form className='flex flex-col w-full gap-y-4' onSubmit={formik.handleSubmit}>
                <div className='flex flex-col w-full'>
                    <p className='text-xs text-tertiary-600 mb-2'>رمزعبور خود را وارد کنید.</p>
                    <div className={`flex ${isEnglish && "flex-row-reverse"}`}>
                        <TextBox
                            id='phoneNumber'
                            label={"رمز عبور"}
                            type="phone"
                            name="phoneNumber"
                            className='w-full'
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            error={formik.errors.phoneNumber}
                            touched={formik.touched.phoneNumber}
                            ref={phoneNumberInputRef}
                        />
                    </div>
                </div>
                <Link className='text-sm' href="/mobile-verification">رمزعبور را فراموش کردید؟</Link>
                <Button
                    title={"ادامه"}
                    type='submit'
                    iconPosition='end'
                    icon={<ArrowLeft className={`${isEnglish && "rotate-180"}`} />}
                />
            </form>
            <div className='flex flex-col w-full gap-3 mt-10'>
                <Button
                    variant='outline'
                    onClick={() => router.push("/auth/telegram")}
                >
                    <div className='w-full h-full flex items-center justify-between'>
                        <Send2 size={20} className={`${!isEnglish && "[transform:rotateY(180deg)]"}`} />
                        {/* <span className='text-sm'>{t_telegram('getCodeViaTelegram')}</span> */}
                        <ArrowLeft2 size={20} className={`${isEnglish && "rotate-180"}`} />
                    </div>
                </Button>
                <Button
                    variant='outline'
                    onClick={() => router.push("/auth/code")}
                >
                    <div className='w-full h-full flex items-center justify-between'>
                        <SmsTracking size={20} className={`${!isEnglish && "[transform:rotateY(180deg)]"}`} />
                        {/* <span className='text-sm'>{t_code('getCodeViaSms')}</span> */}
                        <ArrowLeft2 size={20} className={`${isEnglish && "rotate-180"}`} />
                    </div>
                </Button>
            </div>
        </>
    );
}

export default Page;
"use client"
import React from 'react';
import Image from 'next/image'
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
// React Icon
import { FaArrowLeftLong } from "react-icons/fa6";
// Assets
import Logo from "@/public/common/logo/favicon-70x87.png"
import Typography from "@/public/common/logo/Typography.png"
// Animation
import { motion } from 'framer-motion';
import LocaleSwitcherMenu from '@/src/components/LocaleSwitcherMenu';


const validationSchema = Yup.object({
  countryCodes: Yup.string()
    .required('کد الزامی است'),
  phoneNumber: Yup.string()
    .required('شماره موبایل الزامی است')
    .matches(/^[0-9]{10}$/, 'شماره موبایل باید ۱۰ رقم باشد'),
});

function Page() {
  const router = useRouter();
  const t = useTranslations('auth');
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const formik = useFormik({
    initialValues: {
      countryCodes: '98',
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: values => {
      const data = {
        "phoneNumber": values.countryCodes + values.phoneNumber,
      };

      console.log(data);
      router.push(`/auth/code`);
    }
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='w-[310px] h-full fcc flex-col'
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      <div className='w-full mb-10 text-xs flex gap-2'>
        <Image
          unoptimized
          src={Logo}
          alt='login image'
          className='object-contain w-[60px] h-auto'
          width={70}
          height={87}
        />
        <Image
          unoptimized
          src={Typography}
          alt='login image'
          className='object-contain w-[160px] h-auto'
          width={260}
          height={96}
        />
      </div>

      <form className='flex flex-col w-full max-w-[320px] gap-y-4' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col w-full'>
          <p className='text-xs text-tertiary-600 mb-5'>{t('enterInfo')}</p>
          <div className='flex gap-2'>
            <TextBox
              id='countryCodes'
              label={t('codeLabel')}
              type="text"
              name="countryCodes"
              className='w-[80px]'
              onChange={formik.handleChange}
              value={formik.values.countryCodes}
              error={formik.errors.countryCodes}
              touched={formik.touched.countryCodes}
            />
            <TextBox
              id='phoneNumber'
              label={t('phoneLabel')}
              type="text"
              name="phoneNumber"
              className='w-full'
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
            />
          </div>
        </div>
        <Button
          title={t('continueButton')}
          type='submit'
          iconPosition='end'
          icon={<FaArrowLeftLong className={`${isEnglish && "rotate-180"}`} />}
        />
      </form>

      <p className='text-xs text-tertiary-500 mt-5 leading-5'>
        {t('termsText')} <Link href="/help-center/general-policy" target="_blank" className='text-secondary-400 hover:underline transition-all duration-300'>{t('termsLink')}</Link>
      </p>

      <div>
        <LocaleSwitcherMenu />
      </div>
    </motion.div>
  );
}

export default Page;
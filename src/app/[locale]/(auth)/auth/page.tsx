"use client"
import React, { useState } from 'react';
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
import ResponsiveDialogDrawer from '@/src/components/ResponsiveDialogDrawer';
import CountryPicker from './_components/CountryPicker';


const validationSchema = Yup.object({
  countryCodes: Yup.string()
    .required('کد الزامی است'),
  phoneNumber: Yup.string()
    .required('شماره موبایل الزامی است')
    .matches(/^[0-9]{10}$/, 'شماره موبایل باید ۱۰ رقم باشد'),
});

function Page() {
  const router = useRouter();
  const t = useTranslations('Auth');
  const locale = useLocale();
  const isEnglish = locale === 'en';
  const [open, setOpen] = useState(false);
  const [countrySelect, setCountrySelect] = useState(10);

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


  return (
    <>
      <form className='flex flex-col w-full max-w-[320px] gap-y-4' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col w-full'>
          <p className='text-xs text-tertiary-600 mb-5'>{t('enterInfo')}</p>
          <div className={`flex ${isEnglish && "flex-row-reverse"}`}>
            <TextBox
              id='phoneNumber'
              label={t('phoneLabel')}
              type="phone"
              name="phoneNumber"
              className='w-full'
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
            />
            <span className='text-tertiary-400 flex pt-3.5 mx-1'>-</span>

            <div
              onClick={() => setOpen(true)}
              className='cursor-pointer relative h-12 w-20 py-2 px-3 border border-border-2 rounded-lg caret-primary-medium focus:outline-none text-sm bg-background'>
              <span className={`absolute bg-background rounded-sm px-1 -top-2 ${isEnglish ? 'left-3' : 'right-3'} pointer-events-none transition-all duration-500 font-medium text-[11px] text-tertiary-600`}>
                {t('codeLabel')}
              </span>
            </div>
            <ResponsiveDialogDrawer
              open={open}
              setOpen={setOpen}
            >
              <CountryPicker
                countrySelect={countrySelect}
                setCountrySelect={setCountrySelect} />
            </ResponsiveDialogDrawer>

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
        {t.rich('termsText', {
          link: (chunks) => (
            <Link
              href="/help-center/general-policy"
              target="_blank"
              className="text-secondary-400 hover:underline transition-all duration-300"
            >
              {chunks}
            </Link>
          )
        })}
      </p>

      {/* <div>

        <div role='button' onClick={() => setOpen(!open)}>
          {open ? "close" : "open"}
        </div>



      </div> */}
    </>
  );
}

export default Page;
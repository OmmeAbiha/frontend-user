"use client"

import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'
//component
import TextBox from '@/src/components/inputs/TextBox';
//services
import { useRouter } from '@/i18n/routing';
import Link from 'next/link';
// assets
import Logo from "@/public/common/logo/favicon-70x87.png"
import Typography from "@/public/common/logo/Typography.png"
import images_1 from "@/public/mock-images/—Pngtree—ramadan elements png blue_6124415.png"
import Button from '@/src/components/Button';
import { FaArrowLeftLong } from "react-icons/fa6";


const validationSchema = Yup.object({
  countryCodes: Yup.string()
    .required('کد الزامی است'),
  phoneNumber: Yup.string()
    .required('شماره موبایل الزامی است')
    .matches(/^[0-9]{10}$/, 'شماره موبایل باید ۱۰ رقم باشد'),
    
});

function Page() {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      countryCodes: '98',
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: values => {
      const data = {
        "phoneNumber": values.countryCodes + values.phoneNumber,
      }

      console.log(data)
    }
  })

  return (
    <div className='flex w-full h-screen p-8'>
      <div className='w-full lg:w-[40%] h-full fcc flex-col '>
        <div className='w-[310px] h-full fcc flex-col'>
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
              <p className='text-xs text-tertiary-600 mb-5'>برای ورود یا ثبت‌نام، اطلاعات کاربری خود را وارد کنید:</p>
              <div className='flex gap-2'>
                <TextBox
                  id='countryCodes'
                  label='کد'
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
                  label='شماره موبایل'
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
              title="ادامه"
              type='submit'
              iconPosition='end'
              icon={<FaArrowLeftLong />}
            />
          </form>

          <p className='text-xs text-tertiary-500 mt-5 leading-5'> استفاده از این سرویس به معنی پذیرش <Link href="/help-center/general-policy" target="_blank" className='text-secondary-400 hover:underline transition-all duration-300'> قوانین و مقررات </Link> می باشد.
          </p>
        </div>
      </div>
      <div className='w-[60%] h-full hidden lg:flex'>
        <div className='w-full h-full rounded-3xl overflow-hidden bg-primary-medium shadow-lg'>
          <Image
            unoptimized
            src={images_1}
            alt='login image'
            className='object-contain'
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
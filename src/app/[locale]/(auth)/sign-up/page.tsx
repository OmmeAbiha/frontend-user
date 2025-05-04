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

const validationSchema = Yup.object({
  username: Yup.string()
    .required('نام کاربری الزامی است'),
  password: Yup.string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
    .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    .matches(/[@$!%*?&#]/, 'رمز عبور باید حداقل یک کاراکتر ویژه داشته باشد')
})

function Page() {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      const data = {
        "userName": values.username,
        "password": values.password,
        "securityCode": "",
        "positionId": null,
        "rememberMe": true
      }

      // auth(data)
      //     .then((res) => {
      //         Cookies.set('TOKEN', res.data.accessToken, { expires: 1 })
      //         router.push("/dashboard")
      //     })
      //     .catch(() => { })
    }
  })

  return (
    <div className='flex w-full h-screen p-8'>
      <div className='w-full lg:w-[40%] h-full fcc flex-col '>
        <div className='w-[260px] h-full fcc flex-col'>
          <div className='w-full mb-16 text-xs flex gap-2'>
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
          <div className='w-full mb-10 text-xs'>
            <h2 className='w-full font-extrabold text-3xl mb-2'>شروع کنید</h2>
            <h6 className='text-tertiary-400'>قبلاً حساب کاربری دارید؟ <Link className='text-tertiary-800 hover:text-primary-medium transition-all duration-300' href={"/fa/sign-in"}>ورود</Link></h6>
          </div>
          <form className='flex flex-col w-full max-w-[320px] gap-y-4' onSubmit={formik.handleSubmit}>
            <div className='flex flex-col w-full'>
              <TextBox
                id='username'
                label='نام کاربری'
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.errors.username}
                touched={formik.touched.username}
              />
            </div>
            <div className='flex flex-col w-full'>
              <TextBox
                id='password'
                label='رمز عبور'
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
            </div>
            <button type="submit" className='h-11 px-5 transition-all bg-primary-main hover:bg-primary-main/90 text-primary-foreground mt-6 rounded-xl w-full'>ثبت نام کنید</button>
          </form>
          <p className='text-xs text-tertiary-400 mt-5 leading-5'>
            با ثبت نام، با موارد زیر موافقم 
            <Link className='underline hover:text-primary-medium' href="#"> شرایط خدمات</Link> و 
            <Link className='underline hover:text-primary-medium' href="#"> سیاست حفظ حریم خصوصی</Link>
          </p>
        </div>
      </div>
      <div className='w-[60%] h-full hidden lg:block'>
        <div className='w-full h-full rounded-3xl overflow-hidden bg-primary-veryLight p-10 fcc'>
          {/* <Image
                        unoptimized
                        src={'/images/login/loging.gif'}
                        alt='login image'
                        className='object-cover p-10'
                        width={1000}
                        height={1000}
                    /> */}
        </div>
      </div>
    </div>
  )
}

export default Page
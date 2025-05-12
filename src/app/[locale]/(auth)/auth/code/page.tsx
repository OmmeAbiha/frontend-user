"use client"
import React, { useRef, useState } from 'react'
import { OtpInput } from './_components/OtpInput';
import Button from '@/src/components/Button';
import { ArrowLeft, ArrowLeft2, ArrowRight2, SmsTracking } from 'iconsax-reactjs';
import { useLocale } from 'next-intl';

function Page() {
  const [otp, setOtp] = useState('');
  const OtpInputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const handleSubmit = () => {
    console.log("handleSubmit")
  }

  return (
    <div className="w-full">
      <p className='text-xs text-tertiary-600 mb-5'>
        {`کد فرستاده شده در تلگرام برای ${"0910****121"} را وارد کنید.`}
      </p>
      <form className='flex flex-col w-full gap-y-4' onSubmit={handleSubmit}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          onComplete={() => {
            OtpInputRef.current?.blur();
            handleSubmit();
          }}
          ref={OtpInputRef}
        />
        <Button
          title={"تایید"}
          type='submit'
          iconPosition='end'
          icon={<ArrowLeft className={`${isEnglish && "rotate-180"}`} />}
        />
      </form>
      <Button
        title={"دریافت کد ورود از طریق پیامک"}
        type='submit'
        variant='outline'
        className='mt-10'
      >
        <div className='w-full h-full flex items-center justify-between'>
          <SmsTracking size={20} className={`${!isEnglish && "[transform:rotateY(180deg)]"}`} />
          <span className='text-sm'>دریافت کد ورود از طریق پیامک</span>
          <ArrowLeft2 size={20} className={`${isEnglish && "rotate-180"}`} />
        </div>
      </Button>
    </div>
  )
}

export default Page
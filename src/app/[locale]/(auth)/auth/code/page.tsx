"use client"
import React, { useRef, useState } from 'react'
import { OtpInput } from './_components/OtpInput';
import Button from '@/src/components/Button';
import { ArrowLeft } from 'iconsax-reactjs';
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
    <div dir='ltr' className="w-full">
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
      <p className="mt-4">OTP: {otp}</p>
    </div>
  )
}

export default Page
"use client"
import React, { useState } from 'react'
import { OtpInput } from './_components/OtpInput';

function Page() {
  const [otp, setOtp] = useState('');

  return (
    <div dir='ltr' className="w-full">
      <OtpInput value={otp} onChange={setOtp} />
      <p className="mt-4">OTP: {otp}</p>
    </div>
  )
}

export default Page
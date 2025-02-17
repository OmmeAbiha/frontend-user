"use client"

import { useTheme } from 'next-themes';
import toastHandler from '@/functions/toasHandler';

export default function Home() {
  const { setTheme } = useTheme()

  const handler = () => {
    toastHandler('success', 'سلام ممد!')
  }

  return (
    <div>
      <main className='fcc flex-col gap-1'>
        تست
        <button className='bg-primary text-primary-foreground p-2' onClick={() => setTheme('light')}>light</button>
        <button className='bg-primary text-primary-foreground p-2' onClick={() => setTheme('dark')}>dark</button>
        <button className='bg-primary text-primary-foreground p-2' onClick={() => setTheme('system')}>system</button>
        <button className='bg-primary text-primary-foreground p-2' onClick={() => handler()}>system</button>
      </main>
    </div>
  );
}
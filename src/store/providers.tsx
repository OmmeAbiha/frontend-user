"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes"
import { Provider } from "react-redux";
import { store } from "./store";
//toast 
import { Toaster } from 'react-hot-toast';
//logo logger
import { logLogo } from "../functions/logLogo";

export default function Providers({ children }: { children: React.ReactNode }) {
  //log the khodnevis logo
  useEffect(() => {
    const descriptionLog = {
      version: '1.0.0',
      origin: window.origin,
      massage: 'hello developer!'
    }
    logLogo(descriptionLog)
  }, [])

  return (
    <Provider store={store}>
      <Toaster />
      <ThemeProvider defaultTheme="system" enableSystem >
        {children}
      </ThemeProvider>
    </Provider>
  )
}

// import React, { InputHTMLAttributes, useState } from 'react'

// interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
//   touched?: boolean;
//   className?: string;
// }

// function TextBox({ label, className, error, touched, onFocus, onBlur, ...rest }: TextBoxProps) {
//   const [isFocused, setIsFocused] = useState(false)

//   const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//     setIsFocused(true)
//     onFocus?.(e) // اگر prop onFocus داده شده بود، اجراش کن
//   }

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//     setIsFocused(false)
//     onBlur?.(e) // اگر prop onBlur داده شده بود، اجراش کن
//   }

//   const shouldFloatLabel = isFocused || !!rest.value;

//   return (
//     <div className={`flex flex-col relative ${className}`}>
//       <label htmlFor="customTextBox" className={`absolute pointer-events-none ${shouldFloatLabel ? '-top-3 text-xs text-primary-main' : 'top-2 text-sm'} transition-all duration-500 font-medium  ${error && touched ? 'text-status-danger-400' : 'text-foreground/50'}`}>{label}</label>
//       <input
//         id="customTextBox"
//         className={`py-2 border-b caret-primary-medium focus:outline-none text-sm ${error && touched ? 'border-danger-400' : 'border-border focus:border-primary-main'} bg-background ${className}`}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         {...rest}
//       />
//       <div className='mt-1'>
//         {error && touched ? (
//           <span className='text-danger-400 font-bold text-[10px] p-0.5 px-2 bg-danger-300/20 rounded-[4px]'>{error}</span>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// export default TextBox






// import React, { InputHTMLAttributes, useState } from 'react'

// interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
//   touched?: boolean;
//   className?: string;
// }

// function TextBox({ label, className, error, touched, ...rest }: TextBoxProps) {

//   return (
//     <div className={`flex flex-col relative ${className}`}>
//       <label htmlFor="customTextBox" className={`pointer-events-none transition-all duration-500 font-medium text-xs mb-2  ${error && touched ? 'text-danger-400' : 'text-foreground/50'}`}>{label}</label>
//       <input
//         id="customTextBox"
//         className={`py-2 px-3 border rounded-lg caret-primary-medium focus:outline-none text-sm ${error && touched ? 'border-danger-400' : 'border-border focus:border-primary-main'} bg-background ${className}`}
        
//         {...rest}
//       />
//       <div className='mt-1'>
//         {error && touched ? (
//           <span className='text-danger-400 font-bold text-[10px] p-0.5 px-2 bg-danger-300/20 rounded-[4px]'>{error}</span>
//         ) : null}
//       </div>
//     </div>
//   )
// }

// export default TextBox








import React, { InputHTMLAttributes, useState } from 'react'

interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
  className?: string;
}

function TextBox({ label, className, error, touched, ...rest }: TextBoxProps) {

  return (
    <div className={`flex flex-col relative ${className}`}>
      <label htmlFor="customTextBox" className={`absolute bg-background rounded-md px-1 -top-2 right-3 pointer-events-none transition-all duration-500 font-medium text-[11px] ${error && touched ? 'text-danger-400' : 'text-tertiary-600'}`}>{label}</label>
      <input
        id="customTextBox"
        className={`h-12 py-2 px-3 border rounded-lg caret-primary-medium focus:outline-none text-sm ${error && touched ? 'border-danger-400' : 'border-border-2 focus:border-primary-main'} bg-background ${className}`}
        
        {...rest}
      />
      <div className='mt-1'>
        {error && touched ? (
          <span className='text-danger-400 font-bold text-[10px] p-0.5 px-2 bg-danger-300/20 rounded-[4px]'>{error}</span>
        ) : null}
      </div>
    </div>
  )
}

export default TextBox
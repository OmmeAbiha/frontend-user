'use client'

import { OTPInput, SlotProps } from 'input-otp'
import { clsx, type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { OtpLengthIncrement, OtpLengthDecremental, clearOtpLength } from '@/store/features/authSlice'

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

interface OtpInputProps {
    value: string
    onChange: (val: string) => void
    onComplete?: () => void
}

export const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>(
    ({ value, onChange, onComplete, ...rest }, ref) => {
        const dispatch = useDispatch();

        const handleChange = (val: string) => {
            if (/^\d*$/.test(val)) {
                const newLength = val.length;
                const currentLength = value.length;

                if (newLength === 0) {
                    dispatch(clearOtpLength()); 
                } else if (newLength > currentLength) {
                    dispatch(OtpLengthIncrement());
                } else if (newLength < currentLength) {
                    dispatch(OtpLengthDecremental());
                }

                onChange(val);

                if (newLength === 6 && onComplete) {
                    onComplete();
                }
            }
        };

        return (
            <div dir='ltr' className='w-full'>
                <OTPInput
                    {...rest}
                    ref={ref}
                    maxLength={6}
                    autoFocus
                    pattern="\d"
                    value={value}
                    onChange={handleChange}
                    containerClassName="group w-full fcc items-center has-[:disabled]:opacity-30"
                    render={({ slots }) => (
                        <div className="flex">
                            {slots.map((slot, idx) => (
                                <React.Fragment key={idx}>
                                    <Slot key={idx} {...slot} />
                                    {idx < slots.length - 1 && <FakeDash />}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                />
            </div>
        );
    }
);

OtpInput.displayName = 'OtpInput';

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                'relative sm:w-11 sm:h-11 w-10 h-10 text-base',
                'fcc',
                'transition-all duration-100 text-secondary-400',
                // 'border-border-2 border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
                'border border-border-2 rounded-md',
                'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                'outline outline-0 outline-accent-foreground/20',
                {
                    'ring-1 ring-primary-main border-transparent bg-primary-veryLight/20': props.isActive,
                }
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
            {props.hasFakeCaret && <FakeCaret />}
        </div>
    )
}

function FakeCaret() {
    return (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
            <div className="w-px h-8 bg-transparent" />
        </div>
    )
}

function FakeDash() {
    return (
        <div className="w-[10px] sm:w-[11px] fcc">
            <div className="w-[5px] h-[2px] rounded-full bg-primary-main" />
        </div>
    )
}
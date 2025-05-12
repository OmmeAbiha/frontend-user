'use client'

import { OTPInput, SlotProps } from 'input-otp'
import { clsx, type ClassValue } from 'clsx'
import { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { OtpLengthIncrement, OtpLengthDecremental } from '@/store/features/authSlice'

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
                if (val.length > value.length) {
                    dispatch(OtpLengthIncrement()); // Increment when length increases
                } else if (val.length < value.length) {
                    dispatch(OtpLengthDecremental()); // Decrement when length decreases
                }

                onChange(val);

                if (val.length === 6 && onComplete) {
                    onComplete();
                }
            }
        };

        return (
            <OTPInput
                {...rest}
                maxLength={6}
                autoFocus
                pattern="\d"
                value={value}
                onChange={handleChange}
                containerClassName="group flex items-center has-[:disabled]:opacity-30"
                render={({ slots }) => (
                    <>
                        <div className="flex">
                            {slots.slice(0, 2).map((slot, idx) => (
                                <Slot key={idx} {...slot} />
                            ))}
                        </div>

                        <FakeDash />

                        <div className="flex">
                            {slots.slice(2, 4).map((slot, idx) => (
                                <Slot key={idx} {...slot} />
                            ))}
                        </div>

                        <FakeDash />

                        <div className="flex">
                            {slots.slice(4, 6).map((slot, idx) => (
                                <Slot key={idx} {...slot} />
                            ))}
                        </div>
                    </>
                )}
            />
        );
    }
);

OtpInput.displayName = 'OtpInput';

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                'relative w-10 h-12 text-base',
                'fcc',
                'transition-all duration-100 text-secondary-400',
                'border-border-2 border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
                'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                'outline outline-0 outline-accent-foreground/20',
                {
                    'ring-1 ring-primary-main border-transparent bg-secondary-400/5': props.isActive,
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
        <div className="w-4 fcc">
            <div className="w-2 h-[2px] rounded-full bg-primary-main" />
        </div>
    )
}
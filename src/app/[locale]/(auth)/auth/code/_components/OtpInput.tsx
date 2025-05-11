'use client'

import { OTPInput, SlotProps } from 'input-otp'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

interface OtpInputProps {
    value: string
    onChange: (val: string) => void
}

export function OtpInput({ value, onChange }: OtpInputProps) {
    return (
        <OTPInput
            maxLength={6}
            pattern="\d"
            value={value}
            onChange={(val) => {
                if (/^\d*$/.test(val)) {
                    onChange(val)
                }
            }}
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
    )
}

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
                    'bg-primary-veryLight ': props.isActive,
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
            <div className="w-px h-8 bg-primary-veryLight" />
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

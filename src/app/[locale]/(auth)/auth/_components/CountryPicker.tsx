import React, { useState } from 'react'
import Image from 'next/image';
// Static
import { enums as countryData } from '@/static/countryData';
// Framer Motion
import { motion } from 'framer-motion'
// Components
import TextBox from '@/src/components/inputs/TextBox';

interface CountryPickerProps {
    countrySelect: string;
    setCountrySelect: (value: string) => void;
    isActiveSearch: boolean;
    setIsOpen: (value: boolean) => void;
}

function CountryPicker({ countrySelect, setCountrySelect, isActiveSearch, setIsOpen }: CountryPickerProps) {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value.toLowerCase());
    };

    const filteredCountries = countryData.filter((country) =>
        country.name.toLowerCase().includes(query) || // Partial match for name
        country.dial_code.startsWith(query) || // Exact match for dial_code
        country.dial_code_without_plus.startsWith(query) // Exact match for dial_code_without_plus
    );

    return (
        <div className='px-2 w-full h-full'>
            <motion.div
                initial={false}
                animate={{
                    opacity: isActiveSearch ? 1 : 0,
                    height: isActiveSearch ? 60 : 0,
                    marginTop: isActiveSearch ? 8 : 0,
                    marginBottom: isActiveSearch ? 8 : 0,
                    paddingTop: isActiveSearch ? 12 : 0,
                }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden w-full flex justify-between'
            >
                <TextBox
                    label="نام یا کد کشور را وارد کنید"
                    value={query}
                    onChange={handleChange}
                    className="w-full min-h-12"
                    type="text"
                />
            </motion.div>

            <div className='w-full h-full mt-2'>
                <motion.ul
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className='w-full h-full overflow-y-scroll gap-y-1 flex flex-col p-[1px] pb-16'
                >
                    {filteredCountries.map((country) => (
                        <li
                            key={country.id}
                            onClick={() => {
                                setCountrySelect(country.id)
                                setIsOpen(false)
                            }}
                            className={`px-2 rounded-lg text-sm ring-primary-main cursor-pointer transition-all duration-300 flex w-full items-center justify-between h-11 min-h-11 
                            ${country.id === countrySelect ? "ring-1 text-primary-main" : "text-tertiary-800 hover:bg-primary-veryLight hover:text-primary-dark"}
                            `}
                        >
                            <div className='flex items-center gap-2'>
                                <Image src={country.image} alt={country.name} width="20" height="20" />
                                <span className='h-full flex items-center'>{country.name} ({country.code})</span>
                            </div>
                            <span>{country.dial_code_without_plus} +</span>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}

export default CountryPicker
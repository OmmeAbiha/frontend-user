import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { TbMapSearch } from "react-icons/tb";
import { enums as countryData } from '@/static/countryData';


function CountryPicker({ countrySelect, setCountrySelect }) {
    return (
        <div>
            <div className='w-full flex items-center justify-between my-5'>
                <span>انتخاب کشور</span>
                <span><TbMapSearch size={20} /></span>
            </div>
            <ul className='w-full h-[400px] overflow-y-scroll'> {/* Set fixed height */}
                {countryData.map((country) => (
                    <li key={country.id} className='px-2 lg:px-3 rounded-lg text-sm text-tertiary-800 cursor-pointer hover:bg-primary-veryLight flex w-full items-center justify-between h-10'>
                        <div className='flex items-center gap-2'>
                            <img src={country.image} alt={country.name} width="30" height="20" />
                            <span>{country.name} ({country.code})</span>
                        </div>
                        <span>{country.dial_code}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CountryPicker
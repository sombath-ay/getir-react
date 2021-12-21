import React from 'react';
import {BiGlobe} from 'react-icons/bi';
import {RiUserFill, RiUserAddFill} from 'react-icons/ri';
import {HiLocationMarker} from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';

export default function Header() {
    return (
        <>
            <div className='bg-brand-color '>
                <div className='container mx-auto h-16 md:h-11 flex items-center justify-center md:justify-between'>
                    <a href='#'>
                        <h1>Getir</h1>
                    </a>
                    <nav className='hidden md:flex gap-x-8 text-sm font-semibold'>
                        <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-8 hover:text-opacity-100'>
                            <BiGlobe size={20} />
                            Turkce (TR)
                        </a>
                        <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-8 hover:text-opacity-100'>
                            <RiUserFill size={20} />
                            Giris Yap
                        </a>
                        <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-8 hover:text-opacity-100'>
                            <RiUserAddFill size={20} />
                            Kayit Ol
                        </a>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto md:hidden items-center h-10 px-3 justify-between">
                <div className="flex items-center gap-x-2 text-sm font-semibold text-gray-800">
                    <HiLocationMarker size={18} className="text-primary-brand-color" />
                    Teslimat Adresi Belirle
                </div>
                <IoIosArrowForward size={18} className="text-primary-brand-color" />
            </div>
        </>
    )
}


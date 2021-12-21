
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaFacebook} from "react-icons/fa";
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useWindowWidth } from "@react-hook/window-size";

export default function HeroSection() {

    const [selected, setSelected] = useState('TR');

    const windowWidth = useWindowWidth();

    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15',

    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (
        <div className='relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
            {windowWidth >= 768 && <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
                </div>
            </Slider>}
            <div className='md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20'>
                <div className="hidden md:block">
                    <img className="h-20 w-20 rounded-full" src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t1.6435-9/80050669_117199743100226_7961876245791113216_n.png?_nc_cat=109&cb=c578a115-2e46c7d2&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHoZPgLP1vJpLBNkVnF8RFrEnpxbK9xgQ8SenFsr3GBD33i4ERC0Ju_BBX5EQmh6F0ql1ncSUuXx_r2id9Lvg04&_nc_ohc=knpyakXalUIAX--bZqR&_nc_oc=AQkMPiSX_33YX_PIphGphtpRGFTYlzipMw-5g57LZX5wIhPX_2uk77bGrTmokhDC3zU&_nc_ht=scontent.fpnh11-1.fna&oh=00_AT-Z0CGcLX3q1VhvX4qZYlcRnLDsjzo-K-Bl0PvT9AzR8g&oe=61E28518" />
                    <h3 className="mt-8 text-4xl font-semibold text-white">
                        Dakikalar icinde <br /> kapinizda <br />
                    </h3>
                </div>
                <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giris yap veya kayit ol</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                            <label className="flex-1 relative group block cursor-pointer">
                                <input className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" required />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarasi</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
                            Telefon numarasi ile devam et
                        </button>
                        <hr className="h-[1px] bg-gray-300 my-2" />
                        <button className="bg-blue-700 bg-opacity-10 px-4 text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold">
                            <FaFacebook size={24} />
                            <span className="mx-auto">Facebook ile devam et</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


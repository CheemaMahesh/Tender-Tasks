"use client";
import { useState } from 'react';
import Image from 'next/image';
import menu_white from '../../Assets/menu_white.png';
import search_white from '../../Assets/search_white.png';
import search_active from '../../Assets/search_active.png';
import menu_active from '../../Assets/menu_active.png';
import card_white from '../../Assets/card_white.png';
import card_active from '../../Assets/card_active.png';
import bell from '../../Assets/bell.png';
import search_black from '../../Assets/search_black.png';
import column from '../../Assets/columns.png';
import arrow from '../../Assets/Arrow.png';
import arrow_active from '../../Assets/arrow_active.png';
import phone from '../../Assets/phone.png';
import phone_active from '../../Assets/phone_active.png';

const HomePage = () => {
    const [selected, setSelected] = useState<string | null>('card');
    const [selectedView, setSelectedView] = useState<string | null>('board');
    
    return (
        <section className="homePage w-full h-screen p-2 flex justify-around items-center">
            <section className="left_side_bar_homepage w-[50px] h-[calc(100%-20px)] flex flex-col items-center gap-8">
                <Image className="w-5 h-5 cursor-pointer" onClick={() => setSelected('menu')} src={selected === 'menu' ? menu_active : menu_white} alt="Menu Icon" />
                <Image className="w-5 h-5 cursor-pointer" onClick={() => setSelected('search')} src={selected === 'search' ? search_active : search_white} alt="Search Icon" />
                <Image className="w-5 h-5 cursor-pointer" onClick={() => setSelected('card')} src={selected === 'card' ? card_active : card_white} alt="Search Icon" />
                <Image className="w-5 h-5 cursor-pointer" onClick={() => setSelected('arrow')} src={selected === 'arrow' ? arrow_active : arrow} alt="Arrow Icon" />
                <Image className="w-5 h-5 cursor-pointer" onClick={() => setSelected('phone')} src={selected === 'phone' ? phone_active : phone} alt="Phone Icon" />
            </section>
            <section className='right_side_container_homepage bg-[#1F2024] rounded-[15px] h-[calc(100%-20px)] w-[calc(100%-70px)] flex flex-col p-4'>
                <div className='top_container w-full flex justify-between pb-4'>
                    <p className='text-white text-2xl font-bold'>Tender Tasks</p>
                    <div className='flex items-center w-[40%] justify-between px-4'>
                        <div className='w-[calc(100%-70px)] h-8 rounded-[4px] flex justify-between items-center bg-[#FFF] px-2'>
                            <input className='w-[calc(100%-20px)] h-8 rounded-[4px] p-1 px-2 text-[#000] outline-none' placeholder='Search for tenders' />
                            <Image className='w-5 h-5 cursor-pointer' src={search_black} alt="Search Icon" />
                        </div>
                        <Image src={bell} alt="Bell Icon" />
                        <div className='w-7 h-7 rounded-full border-2 border-white flex justify-center items-center bg-red-400'>
                            S
                        </div>
                    </div>
                </div>
                <hr />
            <div className='right_main_content_homepage w-full h-[calc(100%-50px)] mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className="flex w-[74%] bg-[#000] h-11 rounded-[24px] flex items-center gap-2 font-semibold">
                            <p onClick={() => setSelectedView('list')} className={selectedView === 'list' ? 'cursor-pointer px-4 border-[2px] border-[#6f4e20] border-solid w-fit h-[calc(100%-2px)] rounded-[24px] flex items-center justify-center' : 'cursor-pointer px-4 w-fit h-[calc(100%-2px)] rounded-[24px] flex items-center justify-center'}>List View</p>
                            <p onClick={() => setSelectedView('board')} className={selectedView === 'board' ? 'cursor-pointer px-4 border-[2px] border-[#6f4e20] border-solid w-fit h-[calc(100%-2px)] rounded-[24px] flex items-center justify-center' : 'cursor-pointer px-4 w-fit h-[calc(100%-2px)] rounded-[24px] flex items-center justify-center'}>Board View</p>
                    </div>
                    <div className="w-fit flex items-center gap-4">
                        <p className='w-fit h-11 flex items-center rounded-md justify-center cursor-pointer px-2 border-[1px] border-[#6f4e20] border-solid'>
                            View Tender Details
                        </p>
                        <div className='flex items-center gap-3 w-fit h-8 px-4 p-3 border-[2px] border-[#FBFCF8] border-solid rounded-[15px]'>
                        <Image className='w-4 h-4' src={column} alt="Columns" />
                        <p className=''>
                            Columns
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    )
};

export default HomePage;
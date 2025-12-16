import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Sun, X } from 'lucide-react';

const Layout = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex h-screen bg-gray-900 text-white overflow-hidden'>
            <div className='md:hidden fixed top-0 left-0 w-full h-16 bg-gray-100 text-gray-900 flex items-center justify-between gap-3 px-4 py-2 z-50'>
                <div className="flex items-center gap-3" onClick={() => setOpen(true)}>
                    <Menu className='text-gray-400 hover:text-gray-600 transition duration-300' />
                    <h1 className='text-lg font-semibold'>Izzatbek Abdusharipov</h1>
                </div>
                <Sun />
            </div>

            <AnimatePresence>
                {open && (
                    <>
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:0.4}}
                    exit={{opacity:0}}
                    onClick={()=>setOpen(false)}
                    className='fixed inset-0 z-40 bg-black/50 md:hidden'
                    />
                    <motion.aside 
                    initial={{x: '-100%'}}
                    animate={{x:0}}
                    exit={{x: '-100%'}}
                    transition={{type:'spring',stiffness: 260,damping:25}}
                    className='fixed top-0 left-0 h-screen w-72 z-50 bg-gray-800 md:hidden'>
                        <div className='flex justify-end p-4'>
                            <X className='cursor-pointer' onClick={()=>setOpen(false)} />
                        </div>
                        <Sidebar/>
                    </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <aside className={`hidden md:block md:w-72 bg-gray-900 text-white h-screen overflow-y-auto shrink-0 shadow shadow-cyan-500`}>
                <Sidebar />
            </aside>

            <main className={'flex-1 h-screen overflow-y-auto p-4'}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
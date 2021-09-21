import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import { phoneNumber } from '@/helpers/constants'
import Link from 'next/link';
import { navItems } from '@/lib/navItems'

export default function mobileMenu() {

    const router = useRouter();
    let currentPath = router.pathname;

    //State management for mobile menu
    const [open, setOpen] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    return (
        <>
            <button aria-label="Open Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu ${open ? 'open' : ''}`}>
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Menu */}
            <div open={open} className={`fixed top-0 left-0 -z-10 w-full h-full p-4 transition-all duration-200 bg-white ${open ? 'opacity-100 z-40' : 'opacity-0'}`}>
                
                <div className="flex flex-col items-center justify-center h-screen">

                <motion.div variants={container} initial="hidden" animate={open ? 'show' : ''}>

                    <motion.div variants={listItem}>
                        <img src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio Logo" className="w-2/3 mx-auto mb-8 max-w-72" />
                    </motion.div>

                    {navItems.map(({ title, url, type }, i) => {
                        return(
                            type === "route" ? (
                                <motion.div className="mb-5 text-center" variants={listItem} key={i}>
                                    { currentPath == "/treatment-menu" || currentPath == "/book" ? (
                                        <Link href={`/${url}`}>
                                            <a className="relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)}>
                                                {title}
                                            </a>
                                        </Link>
                                    ) : (
                                        <Link href={`/${url}`}>
                                            <a className="relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full">
                                                {title}
                                            </a>
                                        </Link>
                                    ) }
                                </motion.div>
                            ) : (
                                <motion.div className="mb-5 text-center" variants={listItem} key={i}>
                                    { currentPath == "/treatment-menu" || currentPath == "/book" ? (
                                        <Link href={`/#${url}`}>
                                            <a className="relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full">
                                                {title}
                                            </a>
                                        </Link>
                                    ) : (
                                        <a data-scroll-to data-offset="-100" className="relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" href={`#${url}`} onClick={() => setOpen(!open)}>
                                            {title}
                                        </a>
                                    )}                                    
                                </motion.div>
                            )                        
                        )
                    })}
                
                    <motion.div className="text-center" variants={listItem}>
                        <a className="transition-all duration-200" variants={listItem} href={`tel:${phoneNumber}`}>Tel: <span className="font-bold">{phoneNumber}</span></a>                    
                    </motion.div>

                </motion.div>

                </div>
            </div>
            {/* End Mobile Menu */}
        </>
    )
}
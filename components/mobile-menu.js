import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function mobileMenu({ navItems }) {

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

                    {navItems.map((item, i) => {
                        return(
                        <motion.div className="mb-5 text-center" variants={listItem} key={i}>
                            <a data-scroll-to data-offset="-100" className="block tracking-widest uppercase" href={`#${item}`} onClick={() => setOpen(!open)}>
                                {item}
                            </a>
                        </motion.div>
                        )
                    })}
                
                    <motion.div className="text-center" variants={listItem}>
                        <a className="transition-all duration-200" variants={listItem} href="tel:07723039623">Tel: <span className="font-bold">07723 039623</span></a>                    
                    </motion.div>

                </motion.div>

                </div>
            </div>
            {/* End Mobile Menu */}
        </>
    )
}
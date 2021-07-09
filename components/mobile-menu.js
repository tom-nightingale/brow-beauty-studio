import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function mobileMenu({navItems}) {

    const router = useRouter();
    let currentPath = router.pathname;

    //State management for mobile menu
    const [open, setOpen] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                
                <div className="flex flex-col items-center justify-center h-full">

                <motion.div variants={container} initial="hidden" animate={open ? 'show' : ''}>

                    <motion.div variants={listItem}>
                        <img src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio Logo" className="w-2/3 mx-auto mb-8" />
                    </motion.div>

                    {/* {
                    Object.values(navItems).map((item, i) => {
                        return(
                        <motion.div className="mb-6 text-center" key={i} variants={listItem}>
                            <Link href={item.href} scroll={false}>
                            <a aria-label={`Go to ${item.label}`} onClick={() => setOpen(!open)} className={`tracking-widest uppercase navItem ${currentPath === item.href ? 'text-orange-dark navActive' : ''}`}>
                                {item.label}
                            </a>
                            </Link>
                        </motion.div>
                        )
                    })
                    } */}

                    {/* <motion.div className="text-center" variants={listItem}>
                    <Button onClick={() => setOpen(!open)} link="/contact" aria-label="Navigate to Contact" classes="mb-6 inline-flex justify-center">Get In Touch</Button>
                    </motion.div> */}
                    <motion.div className="mb-5 text-center" variants={listItem}>
                     <Link href="#" scroll={false}>
                        <a aria-label="Home" onClick={() => setOpen(!open)} className="nav-item">
                            Home
                        </a>
                    </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                    <Link href="#" scroll={false}>
                        <a aria-label="Treatments" onClick={() => setOpen(!open)} className="nav-item">
                            Treatments
                        </a>
                    </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                    <Link href="#" scroll={false}>
                        <a aria-label="About" onClick={() => setOpen(!open)} className="nav-item">
                            About
                        </a>
                    </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                    <Link href="#" scroll={false}>
                        <a aria-label="Where" onClick={() => setOpen(!open)} className="nav-item">
                            Where
                        </a>
                    </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                    <Link href="#" scroll={false}>
                        <a aria-label="Contact" onClick={() => setOpen(!open)} className="nav-item">
                            Contact
                        </a>
                    </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                    <Link href="#" scroll={false}>
                        <a aria-label="Social" onClick={() => setOpen(!open)} className="nav-item">
                            Social
                        </a>
                    </Link>
                    </motion.div>

                
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
import { useEffect } from "react";
import { Image } from "react-datocms";

export default function Treatment({ overlay, heading, subHeading, description, image, alt }) {

    useEffect(() => {
        // Detect non-mobile screen size and add scrolling effect to Treatments
        let breakpoint = 1280;
        let element = document.querySelectorAll('.data-scroll');
        window.addEventListener('resize', () => {
            let width = window.innerWidth;   
            if (width >= breakpoint) {
                element.forEach((elem) => {
                    elem.setAttribute('data-scroll', '');
                });
            } else {
                element.forEach((elem) => {
                    elem.removeAttribute('data-scroll', '');
                });
            }
        });
    })
    

    return(
        <div className={`relative flex-wrap items-center w-full justify-between p-4 xs:flex treatment lg:mt-[-100px] ${alt ? 'sm:after:right-4' : 'sm:after:left-4'} `}>

            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed={`${alt ? '-0.3' : '0.3'}`} data-scroll-position="left" className={`flex justify-start relative z-10 ${alt ? 'flex justify-end xs:order-2' : ''} xs:w-1/2 overflow-hidden data-scroll`}>
                <p className={`absolute top-1/2 -translate-y-1/2 font-serif text-6xl tracking-wider text-white w-full text-center ${alt ? ' -rotate-90 right-[-46%] sm:right-[-44%] md:right-[-45%] lg:right-[-46%] xl:right-[-47%]' : 'rotate-90 origin-center left-[-46%] sm:left-[-44%] md:left-[-45%] lg:left-[-46%] xl:left-[-47%]'}  z-50 `}>{overlay}</p>
                <Image data={{...image.responsiveImage, alt: overlay }} className="" />
            </div>

            <div className={`relative z-10 flex flex-col ${alt ? 'lg:items-start' : 'lg:items-end'}  xs:w-1/2`}>
                <p className={`p-4 font-serif text-xl md:text-3xl sm:p-12 md:p-12 ${alt ? 'text-left' : 'text-right'}`}>{heading}
                <span className="block font-sans text-base tracking-wider uppercase">{subHeading}</span></p>
            </div>
        </div>
    )
}
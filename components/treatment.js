import { Image } from "react-datocms";

export default function Treatment({ overlay, heading, subHeading, description, image, alt }) {
    return(
        <div className={`relative flex-wrap items-center w-full justify-between p-4 sm:flex treatment lg:mt-[-100px] ${alt ? 'after:right-4' : 'after:left-4'} `}>
            

            <div className={`flex justify-start relative z-10 ${alt ? 'flex justify-end md:order-2' : ''} sm:w-1/2 overflow-hidden`}>
                <p className={`absolute top-1/2 -translate-y-1/2 font-serif text-6xl tracking-wider text-white w-full text-center ${alt ? ' -rotate-90 right-[-46%] sm:right-[-44%] md:right-[-45%] lg:right-[-46%] xl:right-[-47%]' : 'rotate-90 origin-center left-[-46%] sm:left-[-44%] md:left-[-45%] lg:left-[-46%] xl:left-[-47%]'}  z-50 `}>{overlay}</p>
                <Image data={{...image.responsiveImage, alt: overlay }} className="" />
            </div>

            <div className={`relative z-10 flex flex-col ${alt ? 'lg:items-start' : 'lg:items-end'}  sm:w-1/2`}>
                <p className="p-4 pl-0 font-serif text-xl bg-white md:text-3xl sm:p-12 md:p-12">{heading}
                <span className="block font-sans text-base tracking-wider uppercase">{subHeading}</span></p>
            </div>
        </div>
    )
}
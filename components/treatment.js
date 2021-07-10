export default function Treatment({ overlay, title, description, image, alt }) {
    return(
        <div className={`flex-wrap items-center justify-between w-full p-4 sm:flex treatment lg:mt-[-100px] ${alt ? 'after:right-4' : 'after:left-4'} `}>
            <div className={`relative z-10 sm:w-1/2 ${alt ? 'flex justify-end md:order-2' : ''}`}>
                <p className={`absolute font-serif text-6xl tracking-wider text-white ${alt ? '-rotate-90 -right-20' : 'rotate-90 -left-20'} -translate-y-1/2 top-1/2 `}>{overlay}</p>
                <img className="" src={image} alt={overlay} />
            </div>
            <div className={`relative z-10 flex flex-col ${alt ? 'lg:items-start' : 'lg:items-end'}  sm:w-1/2`}>
                <p className="p-4 pl-0 font-serif text-xl bg-white md:text-3xl sm:p-12 md:p-12">{title}
                <span className="block font-sans text-base tracking-wider uppercase">{description}</span></p>
            </div>
        </div>
    )
}
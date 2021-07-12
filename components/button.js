export default function Button({ external, destination, modifier, label, secondary }) {
    return (
        <>
            {external && 
                <a rel="noreferrer" target="_blank" href={destination} className={`tracking-widest inline-block p-4 uppercase border border-black md:px-6 lg:text-lg lg:px-8 xl:px-12 ${modifier} ${secondary ? 'bg-black text-white' : ''}`}>
                    {label}
                </a>
            }

            {!external && 
                <a href={destination} className={`tracking-widest inline-block p-4 uppercase border border-black md:px-6 lg:text-lg lg:px-8 lg:px-12 ${modifier} ${secondary ? 'bg-black text-white' : ''}`}>
                    {label}
                </a>
            }
        </>
        
    )
}
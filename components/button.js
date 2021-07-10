export default function Button({ external, destination, modifier, label, secondary }) {
    return (
        <>
            {external && 
                <a rel="noreferrer" target="_blank" href={destination} className={`inline-block p-4 uppercase border border-black md:p-6 lg:text-lg lg:px-8 lg:py-6 ${modifier} ${secondary ? 'bg-black text-white' : ''}`}>
                    {label}
                </a>
            }

            {!external && 
                <a href={destination} className={`inline-block p-4 uppercase border border-black md:p-6 lg:text-lg lg:px-8 lg:py-6 ${modifier} ${secondary ? 'bg-black text-white' : ''}`}>
                    {label}
                </a>
            }
        </>
        
    )
}
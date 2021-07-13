export default function Button({ external, destination, modifier, label, secondary }) {
    return (
        <>
            {external && 
                <a rel="noreferrer" target="_blank" href={destination} className={`btn ${secondary ? 'btn--secondary' : ''} ${modifier} `}>
                    {label}
                </a>
            }

            {!external && 
                <a href={destination} className={`btn ${secondary ? 'btn--secondary' : ''} ${modifier}`}>
                    {label}
                </a>
            }
        </>
        
    )
}
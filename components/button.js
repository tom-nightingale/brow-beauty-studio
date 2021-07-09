export default function Button({ destination, modifier, label}) {
    return (
        <a href={destination} className={`${modifier}`}>
            {label}
        </a>
    )
}
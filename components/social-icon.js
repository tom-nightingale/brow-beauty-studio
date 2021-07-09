export default function socialIcon({ platform, url }) {
    return (
        <a className="block mb-5" href="" aria-label={`Follow The Brow &amp; Beauty Stuido on ${platform}`} rel="noreferrer">
            <img className="relative h-7" src={`/icons/icon-${platform}.svg`} alt={`Follow The Brow &amp; Beauty Studio ${platform}`} />
        </a>
    )
}
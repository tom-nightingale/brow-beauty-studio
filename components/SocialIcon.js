export default function socialIcon({ platform, url, classes, svgFill}) {
    return (
        <>

        <a className={`block w-8 h-8 ${classes}`} href={url} aria-label={`Follow The Brow &amp; Beauty Studio on ${platform}`} rel="noreferrer" target="_blank">

            {platform == "facebook" &&
                <svg width="100%" height="100%" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M22.6804 22.8516L23.8358 15.4994H16.6119V10.7283C16.6119 8.71692 17.621 6.75629 20.8564 6.75629H24.1405V0.496704C24.1405 0.496704 21.1602 0 18.3108 0C12.3617 0 8.47304 3.52136 8.47304 9.896V15.4994H1.86011V22.8516H8.47304V40.625H16.6119V22.8516H22.6804Z" fill={svgFill}/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="26" height="40.625" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>            
            }

            {platform == "instagram" &&
                <svg width="100%" height="100%" viewBox="0 0 38 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M19.0068 12.7076C13.6121 12.7076 9.26081 17.3309 9.26081 23.0627C9.26081 28.7945 13.6121 33.4178 19.0068 33.4178C24.4014 33.4178 28.7528 28.7945 28.7528 23.0627C28.7528 17.3309 24.4014 12.7076 19.0068 12.7076ZM19.0068 29.7948C15.5206 29.7948 12.6706 26.7757 12.6706 23.0627C12.6706 19.3496 15.5121 16.3305 19.0068 16.3305C22.5014 16.3305 25.343 19.3496 25.343 23.0627C25.343 26.7757 22.493 29.7948 19.0068 29.7948ZM31.4247 12.284C31.4247 13.6268 30.4068 14.6993 29.1514 14.6993C27.8876 14.6993 26.8782 13.6178 26.8782 12.284C26.8782 10.9502 27.8961 9.86869 29.1514 9.86869C30.4068 9.86869 31.4247 10.9502 31.4247 12.284ZM37.8796 14.7353C37.7354 11.4999 37.0398 8.63401 34.809 6.2728C32.5867 3.91158 29.8894 3.17257 26.8443 3.01035C23.7059 2.82109 14.2992 2.82109 11.1608 3.01035C8.1242 3.16356 5.42688 3.90257 3.19607 6.26378C0.96527 8.625 0.278216 11.4909 0.125537 14.7263C-0.0525879 18.0609 -0.0525879 28.0555 0.125537 31.39C0.269734 34.6254 0.96527 37.4913 3.19607 39.8525C5.42688 42.2138 8.11572 42.9528 11.1608 43.115C14.2992 43.3042 23.7059 43.3042 26.8443 43.115C29.8894 42.9618 32.5867 42.2228 34.809 39.8525C37.0314 37.4913 37.7269 34.6254 37.8796 31.39C38.0577 28.0555 38.0577 18.0699 37.8796 14.7353ZM33.8251 34.9679C33.1635 36.7343 31.8827 38.0951 30.2117 38.8071C27.7095 39.8616 21.772 39.6182 19.0068 39.6182C16.2416 39.6182 10.2956 39.8525 7.80188 38.8071C6.13938 38.1042 4.85857 36.7433 4.18849 34.9679C3.19607 32.3093 3.42509 26.0007 3.42509 23.0627C3.42509 20.1247 3.20456 13.8071 4.18849 11.1575C4.85009 9.39104 6.1309 8.03019 7.80188 7.31822C10.3041 6.26378 16.2416 6.50711 19.0068 6.50711C21.772 6.50711 27.718 6.2728 30.2117 7.31822C31.8742 8.02118 33.155 9.38203 33.8251 11.1575C34.8175 13.8161 34.5885 20.1247 34.5885 23.0627C34.5885 26.0007 34.8175 32.3183 33.8251 34.9679Z" fill={svgFill}/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="38" height="46.1429" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            }

        </a>

            
        </>
    )
}
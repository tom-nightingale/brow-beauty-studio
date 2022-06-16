import { phoneNumber } from '@/helpers/constants'
import Button from '@/components/Button'


export default function Where() {

    return (
        <div className="relative p-8 my-20 overflow-hidden bg-gray-200 sm:p-12 lg:p-20" id="Where">

            <div className="sm:max-w-screen-xs">

            <p className="mb-[-6px] font-serif text-4xl leading-none text-center text-white lg:text-5xl lg:mb-[-9px] relative z-50" data-scroll-direction="horizontal" data-scroll-speed="-0.1" data-scroll>Where</p>

            <div className="relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20">

                <p>A: The Brow and Beauty Studio</p>
                <div className="pl-5 leading-relaxed">
                    <p>14 Westgate</p>            
                    <p>Southwell</p>                    
                    <p>Nottinghamshire</p>
                    <p>NG15 0JH</p>
                </div>

                <p>T: <a className="inline-block pl-1 mt-8 font-bold" href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>

                <Button
                    destination="https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2"
                    modifier="mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center"
                    label="Get directions"
                    secondary
                    external
                />

            </div>
            
            <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.89577866733!2d-0.9595265842944402!3d53.076145502616704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879b7adce5eb921%3A0x61bb4d2348e5be94!2s14%20Westgate%2C%20Southwell%20NG25%200JH!5e0!3m2!1sen!2suk!4v1655401368584!5m2!1sen!2suk" className="w-full h-full border-0" loading="lazy"></iframe>
            </div>

            </div>

            <div className="absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2">
                
            <a className="inline-block p-4 px-12 text-sm uppercase transition-all duration-200 -rotate-90 bg-white cursor-pointer hover:pt-8">View map</a>
            
            </div>

        </div>
    )
}

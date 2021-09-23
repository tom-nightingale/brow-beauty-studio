import { phoneNumber } from '@/helpers/constants'
import Container from '@/components/Container'

export default function Contact({  }) {
    
    return (
        <div className="px-6 py-16 bg-gray-100 sm:p-8 md:p-12 lg:p-20" id="Contact">

            <Container>

                <p className="mb-[-6px] font-serif text-4xl leading-none text-center text-gray-300 lg:text-5xl lg:mb-[-9px]">Contact</p>
                
                <div className="relative max-w-screen-lg p-8 mx-auto bg-white shadow-lg sm:p-8 md:p-12 lg:p-20">

                    <div className="relative">

                        <img src="logo-circle-light.png" alt="The Brow &amp; Beauty Studio" className="absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                        <div className="relative z-20">

                        <p className="max-w-screen-sm mx-auto leading-relaxed text-center">If you'd like to get in touch to make a booking or ask a question please use the form below. If you'd prefer to talk, fel free to give me a call directly on <a className="inline-block font-bold" href={`tel:${phoneNumber}`}>{phoneNumber}</a>.</p>

                        <form id="form" action="https://formspree.io/f/YOURAPI" method="POST" className="relative z-10 flex flex-wrap mt-4 -m-1 overflow-x-hidden">
                            <label className="w-full md:w-1/2">
                            <input required type="text" className="w-full" name="name" placeholder="Your Name *" />
                            </label>
                            <label className="w-full md:w-1/2">
                            <input required type="text" className="w-full" name="phonenumber" placeholder="Your Number *" />
                            </label>
                            <label className="w-full md:w-1/2">
                            <select className="w-full" name="Treatment Type">
                                <option value="Eyebrow Care">Eyebrow Care</option>
                                <option value="Eyelash Extensions">Eyelash Extensions</option>
                                <option value="Facial">Facial</option>
                                <option value="Massage">Massage</option>
                                <option value="Massage">Massage</option>
                                <option value="Microblading">Microblading</option>
                                <option value="Other">Other</option>
                            </select>
                            </label>
                            <label className="w-full md:w-1/2">
                                <input required type="tel" className="w-full" name="telephone" placeholder="Telephone" />
                            </label>
                            <label className="w-full">
                                <textarea required placeholder="Your message" name="message" className="w-full min-h-48"></textarea>
                            </label>
                            <input type="text" name="_gotcha" className="hidden" />
                            <div className="w-full mt-8 text-center">
                                <input type="submit" className="inline-block p-4 mx-auto text-sm text-white uppercase bg-black border border-black md:p-6 lg:px-8 lg:py-4" value="Send Form" />
                            </div>
                        </form>

                        </div>
                        
                    </div>
                
                </div>
                
            </Container>

        </div>
    )
}

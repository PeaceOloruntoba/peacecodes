import Image from "next/image";
import leadd from "../../app/assets/taxi.jpg"

export default function Jumbotron() {
    return(
        <div>
            <div className="flex gap-5 p-24">
            <Image src={leadd} alt="Godd" className="w-96" />
            <div>
            <p className='text-gray-200 font-semibold text-2xl p-4'>Our IT section provides a variety of services, including website development, mobile app development, management system implementation, cyber security training, CCTV installation, and general IT consultation.</p>
            <p className="text-gray-200 font-semibold text-2xl p-4">We build customized solutions to match your particular demands using cutting-edge technology and experience, assuring flawless operations, increased security, and optimized business processes</p>
            </div>
            </div>

        </div>
    )
}
import Image from "next/image";
import leadd from "../../app/assets/taxi.jpg"

export default function Jumbotron() {
    return(
        <div>
            <div>
            <Image src={leadd} alt="Godd" />
            <div>
            <p className='text-gray-200 font-semibold text-2xl'>Our IT section provides a variety of services, including website development, mobile app development, management system implementation, cyber security training, CCTV installation, and general IT consultation. We build customized solutions to match your particular demands using cutting-edge technology and experience, assuring flawless operations, increased security, and optimized business processes</p>
            </div>
            </div>

        </div>
    )
}
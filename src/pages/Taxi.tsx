import Navbar from "./components/Navbar";
import "../app/globals.css"
import Jumbotron from "./components/Jumbotron";

export default function Taxi() {
    return(
        <>
        <div className=" bg-gradient-to-r from-blue-500 via-pink-500 to-red-500">
            <Navbar />
            Wanna see how thid looks
            <Jumbotron />
        </div>
        </>
    )
}

import Blogging from "./Blogging";
import HomeAbout from "./HomeAbout";
import Jumbotron from "./Jumbotron";

export default function Intro() {
    return(
        <div className="flex justify-center items-center px-36 bg-slate-300 dark:bg-gray-950">
                <div className="bg-slate-200 dark:bg-slate-950 rounded-xl ">
            <Jumbotron />
            <HomeAbout />
            <Blogging />
            </div>
        </div>
    )
}

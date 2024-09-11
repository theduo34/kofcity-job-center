import KjcImage from "../../../../builders/KjcImage";
import {useNavigate} from "react-router-dom";
import {getTopContent} from "./TopContent.constants.tsx";
import { MoveRight } from 'lucide-react';

const TopContent = () => {
    const navigate = useNavigate();
    const menuItems = getTopContent(navigate)
    return(
        <>
            <div className="items-center space-y-4 py-4 ">
                <div className="items-center justify-center md:justify-start space-y-4 md:space-y-6 w-full xl:w-3/5">
                    <div
                        className="items-center capitalize flex text-red-600 font-mono text-xl md:text-3xl leading-tight">
                        Your ultimate destination for finding the perfect job opportunity.
                    </div>
                    <div
                        className="items-center leading-tight text-md md:text-lg">
                        Transform your job search experience with our platform, where finding the perfect opportunity is
                        effortless. Explore a tailored selection of opportunities that align with your skills and
                        aspirations, guiding you towards a fulfilling career path customized just for you.
                    </div>
                </div>
                <div className="items-center space-y-4 md:space-y-6 lg:space-y-8">
                    {
                        menuItems.map((menu) => {
                            return (
                                <div
                                    onClick={menu.onClick}
                                    className="flex items-center justify-center md:justify-end translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out">
                                    <div
                                        className="flex items-center bg-white shadow-md rounded-md w-full md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 py-2 ">
                                        <div className="flex items-center space-x-4 w-full">
                                            <div
                                                className="flex-shrink-0 flex items-start justify-center w-16 h-16 bg-gray-200 hover:bg-gray-300 rounded-full overflow-hidden">
                                                <KjcImage
                                                    src={menu.image}
                                                    className="w-full h-full object-cover rounded-full"/>
                                            </div>

                                            <div className="flex-grow flex items-center justify-between">
                                                <div className="space-y-2">
                                                    <div className="font-semibold text-lg md:text-xl text-kjc-950 capitalize"
                                                         key={menu.key}>
                                                        {menu.label}
                                                    </div>
                                                    <p className="flex">
                                                        <small className="items-center flex space-x-2">
                                                            <p className={`p - 0.5 md:p-1 rounded-full text-white ${menu.className}`}>
                                                                {menu.users}
                                                            </p>
                                                            <span className="font-base md:font-semibold">{menu.description}</span>
                                                        </small>
                                                    </p>
                                                </div>
                                                <div
                                                    className="flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-300"
                                                    onClick={menu.onClick}>
                                                    <MoveRight/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default TopContent
import KjcImage from "../../../builders/KjcImage";
import {RightOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {getTopContent} from "../Home.constants.tsx";

const TopContent = () => {
    const navigate = useNavigate();
    const menuItems = getTopContent(navigate)
    return(
        <>
            <div className="items-center space-y-4">
                <div className="items-center justify-center md:justify-start pt-0 md:pt-4 space-y-4 md:space-y-8 w-full md:w-4/5 xl:w-3/5">
                    <div
                        className="items-center capitalize flex text-red-600 font-bold text-4xl leading-tight ">
                        Your ultimate destination for finding the perfect job opportunity.
                    </div>
                    <div
                        className="items-center leading-tight text-lg md:text-xl text-white">
                        Transform your job search experience with our platform, where finding the perfect opportunity is
                        effortless. Explore a tailored selection of opportunities that align with your skills and
                        aspirations, guiding you towards a fulfilling career path customized just for you.
                    </div>
                </div>

                    {
                        menuItems.map((menu) => {
                            return (
                                <div className="flex items-center justify-center md:justify-end">
                                <div
                                    className="flex items-center bg-white shadow-md rounded-md w-full md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 py-2">
                                    <div className="flex space-x-4 w-full">
                                        <div className="flex items-center rounded-full w-14 border-2 border-kjc-950">
                                            <KjcImage
                                                src={menu.image}
                                                alt="job logo"
                                                className="rounded-full h-full w-full"
                                            />
                                        </div>

                                        <div className="flex w-full items-center justify-between">
                                            <div className="items-center space-y-2 ">
                                                <div className="font-bold text-xl md:text-2xl text-kjc-950 capitalize">
                                                    {menu.label}
                                                </div>
                                                <p className="flex">
                                                    <small className="items-center flex space-x-2">
                                                        <p className="p-0.5 md:p-1 rounded-full text-white bg-kjcBtn-400">
                                                            {menu.users}
                                                        </p>
                                                        <span
                                                            className="font-base md:font-semibold">
                                                            {menu.description}
                                                        </span>
                                                    </small>
                                                </p>
                                            </div>
                                            <div
                                                className="rounded-full px-1.5 py-1 bg-gray-200 hover:bg-gray-300"
                                                onClick={menu.onClick}
                                            > <RightOutlined/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }

            </div>
        </>
    )
}
export default TopContent
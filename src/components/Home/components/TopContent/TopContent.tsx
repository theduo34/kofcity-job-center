import KjcImage from "../../../../builders/KjcImage";
import {RightOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {getTopContent} from "./TopContent.constants.tsx";

const TopContent = () => {
    const navigate = useNavigate();
    const menuItems = getTopContent(navigate)
    return(
        <>
            <div className="items-center space-y-4 py-4 ">
                <div className="items-center justify-center md:justify-start space-y-4 md:space-y-8 w-full xl:w-3/5">
                    <div
                        className="items-center capitalize flex text-red-600 font-mono text-4xl leading-tight">
                        Your ultimate destination for finding the perfect job opportunity.
                    </div>
                    <div
                        className="items-center leading-tight text-lg md:text-xl">
                        Transform your job search experience with our platform, where finding the perfect opportunity is
                        effortless. Explore a tailored selection of opportunities that align with your skills and
                        aspirations, guiding you towards a fulfilling career path customized just for you.
                    </div>
                </div>

                    {
                        menuItems.map((menu) => {
                            return (
                                <div className="flex items-center pt-2 justify-center md:justify-end translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <div
                                     className="flex items-center bg-white shadow-md rounded-md w-full md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 py-4">
                                        <div className="flex space-x-4 w-full">
                                            <div
                                                className="flex items-center rounded-full w-16 h-16 border-2 border-kjc-950">
                                                <KjcImage
                                                    src={menu.image}
                                                    alt=""
                                                    className="rounded-full h-full w-full object-center"
                                                />
                                            </div>

                                            <div className="flex w-full items-center justify-between">
                                                <div className="items-center space-y-2 ">
                                                    <div
                                                        className="font-semibold text-3xl  text-kjc-950 capitalize"
                                                        key={menu.key}
                                                    >
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
                                                ><RightOutlined/>
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
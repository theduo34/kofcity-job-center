import WithContentLayout from "../../../../layout/hoc/WithContentLayout";
import KjcImage from "../../../../../builders/KjcImage";
import successTwo from "/public/assets/images/user/dashboard/successTwo.gif";
import {UserOutlined} from "@ant-design/icons";

const SuccessStories = () => {
    return(
        <>
            <div className={"items-center justify-center  w-full"}>
                <div className={"p-4 text-balance relative text-center text-xl md:text-2xl py-10 font-mono text-kjc-950 bg-amber-50 bg-opacity-80"}>
                    Real Stories, Real Success!!! Achieve Your Dreams with Us
                </div>
                <div className={"absolute top-1 right-4"}></div>

                <div className={"item-center"}>
                    <WithContentLayout className={"items-center "}>
                        <div className={"flex flex-col lg:flex-row items-center justify-start lg:justify-between xl:justify-around  space-y-14"}>
                            <div
                                className={"relative bg-white flex items-center justify-center h-[300px] w-[300px] xl:w-[400px] xl:h-[400px] shadow-lg"}>
                                <div
                                    className={"absolute -bottom-10 left-10 flex items-center justify-center h-[300px] w-[300px] xl:w-[400px] xl:h-[400px] bg-amber-100"}>
                                    <KjcImage
                                        src={successTwo}
                                        alt={"success gif"}
                                        className={"z-10"}
                                    />
                                </div>
                            </div>

                            <div
                                className={"relative bg-amber-100 flex items-center justify-center h-[300px] w-[300px] xl:w-[400px] xl:h-[400px]  shadow-lg "}>
                                <div
                                    className={"p-8 absolute -bottom-10 left-10 flex items-center justify-center h-[300px] w-[300px] xl:w-[400px] xl:h-[400px] bg-white"}>
                                    <h1 className={"absolute text-4xl top-10  left-8 items-center justify-start font-semibold"}>"</h1>
                                    <p>Hey there. I'm doing fucking good in coding. What the fuck you doing as well</p>
                                    <h1 className={"absolute text-4xl bottom-10  right-8 items-center justify-start font-semibold"}>"</h1>
                                    <div className={"absolute bottom-4 right-4"}>
                                        <h1 ><UserOutlined/> aquasiNinetyNine</h1>
                                        <p>Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </WithContentLayout>
                </div>
            </div>
        </>
    )
}
export default SuccessStories;
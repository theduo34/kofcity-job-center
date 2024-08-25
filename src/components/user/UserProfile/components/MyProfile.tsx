import {Pencil} from "lucide-react";

const MyProfile = () => {
    return (
        <>
            <div>
                <h1 className="text-xl font-semibold py-2 px-4 md:px-0">My Profile</h1>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start justify-between">

                {/* First div col */}
                <div className="w-full md:w-[28%] p-2 space-y-4">
                    <div className="flex items-start shadow-lg px-4 py-8 rounded-lg">
                        <p className="w-16 h-16 flex items-center justify-center bg-gray-400 rounded-lg">
                            AB
                        </p>
                        <div className="w-full ms-4 flex flex-col">
                            <h2 className="flex items-center justify-between font-semibold text-lg">
                                Hi Emmanuel<span className={"cursor-pointer"}><Pencil/></span>
                            </h2>
                            <p>Remote Opportunities</p>
                            <p>Accra</p>
                        </div>
                    </div>
                    <div className="shadow-lg bg-kjcBtn-100 px-4 py-8 rounded-lg space-y-4">
                        <div>
                            <h2 className="font-semibold text-lg">Experience</h2>
                            <p>Stand out from the crowd. Your listed experience here will assist us in providing you
                                with
                                alerts and recommendations based on your past experience.</p>
                        </div>
                        <div>
                            <h4 className="f text-lg">Remote Opportunities</h4>
                            <h4 className=" text-lg">Remote Opportunities</h4>
                            <h4 className=" text-lg">Remote Opportunities</h4>
                            <h4 className=" text-lg">Remote Opportunities</h4>
                            <h4 className=" text-lg">Remote Opportunities</h4>
                            <h4 className=" text-lg">Remote Opportunities</h4>
                            <h4 className="text-lg">Remote Opportunities</h4>
                        </div>
                    </div>
                </div>

                {/* Second div col */}
                <div className="w-full md:w-[70%] p-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <div className="w-full flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0">
                            <div className="w-full md:w-[49%] h-[180px] border-2 border-neutral-200 px-4 py-8">
                                <div className="flex flex-col ">
                                    <h2 className="flex items-center justify-between font-semibold text-lg pb-4">
                                        Contact Information<span className={"cursor-pointer"}><Pencil/></span>
                                    </h2>
                                    <p className={"items-center uppercase"}>emmanuel Somuah</p>
                                    <p className={"items-center uppercase"}>emmsom506@gmail.com</p>
                                    <p className={"items-center uppercase"}>+233 55 928 6073</p>
                                </div>
                            </div>
                            <div className="w-full md:w-[49%] h-[180px] border-2 border-neutral-200 px-4 py-8">
                                <div className="flex flex-col ">
                                    <h2 className="flex items-center justify-between font-semibold text-lg pb-4">
                                        Location<span className={"cursor-pointer"}><Pencil/></span>
                                    </h2>
                                    <p className={"items-center uppercase"}>Accra, +233</p>
                                    <p className={"items-center uppercase"}>Ghana</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h2 className={"font-semibold text-lg pb-2"}>Professional Summary</h2>
                            <div className={"border-2 border-neutral-200 p-2"}>
                                Highly skilled and accomplished Network Engineer with [number]
                                years of experience in designing, implementing, and managing complex
                                network infrastructures. Proven track record of ensuring high availability,
                                scalability, and security of network systems. Expertise in routing, switching,
                                network protocols, and cloud-based solutions. Strong problem-solving skills,
                                with ability to analyze and resolve complex network issues.
                                Proficient in network architecture, configuration, and optimization. Excellent
                                communication and collaboration skills, with experience working with cross-functional
                                teams to deliver high-quality network solutions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProfile;

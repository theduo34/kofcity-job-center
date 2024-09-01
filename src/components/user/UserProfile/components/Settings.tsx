import {Pencil} from "lucide-react";

const Settings = () => {

    return(
        <>
            <div>
                <h1 className="text-xl font-semibold py-2 px-4 md:px-0">Settings</h1>
            </div>

            <div className={"flex items-center justify-center"}>

            </div>

            <div className="w-full flex flex-col md:flex-row items-start justify-between">
                {/* First div col */}
                <div className="w-full md:w-[28%] p-2 space-y-4">
                    <div className="flex items-start shadow-md px-4 py-8 rounded-lg">
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
                </div>

                {/* Second div col */}
                <div className="w-full md:w-[70%] p-4 shadow-md">
                    <div className="w-full items-start justify-between space-y-4 md:space-y-0">

                    </div>
                </div>
            </div>
        </>
    )
}
export default Settings;
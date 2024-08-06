import {Bookmark} from "lucide-react";


const ExtraFilterListedJob = () => {
    return(
        <>
            <div className="flex flex-col xl:grid xl:grid-cols-2 2xl:flex-row items-center justify-between space-x-4">

                {/* listed jobs section */}
                <div className="w-full xl:w-full 2xl:basis-2/6 h-[1000px] overflow-y-auto">
                    <div className="space-y-4">
                        <div className="p-4 mb-4 rounded-lg bg-white h-[300px]  space-y-8">
                            <div className="flex items-center justify-between">
                                <p className="flex items-center space-x-2">
                                    <span
                                        className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
                                    <span className="items-center leading-normal">New</span>
                                </p>
                                <p><Bookmark/></p>
                            </div>
                            <div>
                                Listing Job one
                            </div>
                        </div>

                        <div className="p-4 mb-4 rounded-lg bg-white h-[300px]">
                            <div className="flex items-center justify-between">
                                <p className="flex items-center space-x-2">
                                    <span
                                        className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
                                    <span className="items-center leading-normal">New</span>
                                </p>
                                <p><Bookmark/></p>
                            </div>
                            Job Listing 1
                        </div>

                        <div className="p-4 mb-4 rounded-lg bg-white h-[300px]">
                            <div className="flex items-center justify-between">
                                <p className="flex items-center space-x-2">
                                    <span
                                        className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
                                    <span className="items-center leading-normal">New</span>
                                </p>
                                <p><Bookmark/></p>
                            </div>
                            Job Listing 1
                        </div>

                        <div className="p-4 mb-4 rounded-lg bg-white h-[300px]">
                            <div className="flex items-center justify-between">
                                <p className="flex items-center space-x-2">
                                    <span
                                        className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
                                    <span className="items-center leading-normal">New</span>
                                </p>
                                <p><Bookmark/></p>
                            </div>
                            Job Listing 1
                        </div>

                        <div className="p-4 mb-4 rounded-lg bg-white h-[300px]">
                            <div className="flex items-center justify-between">
                                <p className="flex items-center space-x-2">
                                    <span
                                        className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
                                    <span className="items-center leading-normal">New</span>
                                </p>
                                <p><Bookmark/></p>
                            </div>
                            Job Listing 1
                        </div>
                    </div>
                </div>


                {/* job description tab */}
                <div
                    className="p-4 w-full 2xl:basis-4/6 rounded-lg bg-white h-[1000px] overflow-y-auto">
                    Job description goes here.
                </div>
            </div>
        </>
    )
}
export default ExtraFilterListedJob;
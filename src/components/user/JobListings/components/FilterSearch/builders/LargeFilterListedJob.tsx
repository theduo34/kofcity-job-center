import {Bookmark} from "lucide-react";


const LargeFilterListedJob = () => {
    return(
        <>
            <div className={"grid grid-cols-2 space-x-4"}>
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
                        Lar Listing Job one
                    </div>
                </div>

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
                        Large Listing Job two
                    </div>
                </div>
            </div>
        </>
    )
}
export default LargeFilterListedJob;
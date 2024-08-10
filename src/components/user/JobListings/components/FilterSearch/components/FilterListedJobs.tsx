import MediumFilterListedJob from "../builders/MediumFilterListedJob.tsx";
import LargeFilterListedJob from "../builders/LargeFilterListedJob.tsx";
import ExtraLargeFilterListedJob from "../builders/ExtraLargeFilterListedJob.tsx";
import {useState} from "react";

const FilterListedJobs = () => {
    const [bookmarkedJob, setBookmarkedJob] = useState<{ [key: string]: boolean }>( {})

    const toggleBookmark = (key: string) => {
        setBookmarkedJob((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }))
    }

    return (
        <>
           <div>
               <div className={"block xl:hidden"}>
                   <MediumFilterListedJob bookmarkedJob={bookmarkedJob} toggleBookmark={toggleBookmark} />
               </div>
               <div className={"hidden  xl:block 2xl:hidden"}>
                   <LargeFilterListedJob bookmarkedJob={bookmarkedJob} toggleBookmark={toggleBookmark} />
               </div>
               <div className={"hidden 2xl:block"}>
                   <ExtraLargeFilterListedJob bookmarkedJob={bookmarkedJob} toggleBookmark={toggleBookmark} />
               </div>
           </div>
        </>
    );
};

export default FilterListedJobs;

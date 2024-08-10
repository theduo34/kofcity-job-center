import MediumFilterListedJob from "../builders/MediumFilterListedJob.tsx";
import LargeFilterListedJob from "../builders/LargeFilterListedJob.tsx";
import ExtraFilterListedJob from "../builders/ExtraFilterListedJob.tsx";

const FilterListedJobs = () => {

    return (
        <>
           <div>
               <div className={"block xl:hidden"}>
                   <MediumFilterListedJob/>
               </div>
               <div className={"hidden  xl:block 2xl:hidden"}>
                   <LargeFilterListedJob/>
               </div>
               <div className={"hidden 2xl:block"}>
                   <ExtraFilterListedJob/>
               </div>
           </div>
        </>
    );
};

export default FilterListedJobs;

import WithContentLayout from "../../layout/hoc/WithContentLayout";
import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import FilterSearch from "./components/FilterSearch/FilterSearch.tsx";

const JobListings = () => {
    return(
        <>
            <div>
                <div className={"items-center py-4 md:py-8 lg:py-12 px-0 md:px-8 lg:px-12 text-lg md:text-xl lg:text-3xl shadow-md font-semibold text-black bg-kjcBtn-200 "}>
                   <h1 className={"px-4 md:px-12 mx-0 md:ms-4 lg:ms-6 xl:ms-8"}> Search results for
                       <span className={"text-white mx-3"}>Most popular jobs in Koforidua</span>
                   </h1>
                </div>
               <div>
                   <WithContentLayout>
                       <FilterSearch/>
                   </WithContentLayout>
               </div>
            </div>
        </>
    )
}
export default withBaseLayout(JobListings);
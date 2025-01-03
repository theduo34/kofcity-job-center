import JobSearchInputs from "./components/JobSearchInputs.tsx";
import ListedJobs from "./components/ListedJobs.tsx";


const JobRecommendation = () => {
    return(
        <>
            <div className="items-center py-8 px-2 md:px-0 ">
                <div className="items-center text-white leading-tight font-mono text-md md:text-2xl pb-8">
                    Jobs Recommendation
                </div>
                <p className={"text-md md:text-lg text-white"}>
                    Hi aquasiNinetyNine, based on your skills, we found these jobs for you.
                </p>

                {/*search inputs*/}
                <div className={"flex items-center justify-start"}>
                    <JobSearchInputs/>
                </div>

                {/*listed recommended jobs*/}
                <div className={"flex items"}>
                    <ListedJobs/>
                </div>
            </div>
        </>
    )
}
export default JobRecommendation;
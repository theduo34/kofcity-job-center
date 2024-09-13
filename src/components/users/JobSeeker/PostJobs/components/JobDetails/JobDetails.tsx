import PostJobSection from "../../builders/PostJobSection.tsx";
import {withBaseLayout} from "../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const JobDetails = () => {
    return(
        <PostJobSection>
            <div className ="flex pt-4 items-center justify-center w-full md:w-[80%] lg:w-[90%] xl:w-[70%] 2xl:w-[55%]">
                <div className={"items-center p-0 md:p-4 space-y-2 shadow-lg"}>
                    <p className={"p-2 shadow-lg bg-white"}>
                        Thank you for choosing our platform to find the best candidates for your team. We’re here to help you create an eye-catching and detailed job listing that will attract the right talent. Please take a few moments to fill in the job details below. Remember, a well-crafted job posting can make all the difference in finding your ideal candidate
                    </p>
                    <h2 className={"font-semibold text-lg capitalize p-2 shadow-lg bg-white"}>Fill in your Job Details</h2>
                </div>
            </div>
        </PostJobSection>
    )
}
export default withBaseLayout(JobDetails);
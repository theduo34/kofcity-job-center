import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import PostJobSection from "./builders/PostJobSection.tsx";
import {ArrowRight} from "lucide-react";

const PostJobs = () => {

    return(
        <>
            <PostJobSection>
                <div className={"w-full md:w-[75%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%]  space-y-8"}>
                    <h1 className={"items-center justify-center font-semibold text-lg md:text-2xl capitalize"}>
                        Let's find your company
                    </h1>
                    <p className="text-lg items-center leading-normal">
                        Reach millions of job seekers with Kofcity Job Center. Create a compelling company profile
                        effortlessly, designed to attract top talent for your job openings. Join now and ensure your
                        vacancies are seen by the best candidates available
                    </p>
                    <p className={"flex items-center justify-center py-2 px-12 float-right font-semibold rounded-md shadow-lg bg-kjcBtn-200 hover:kjcBtn-300 transition hover:-translate-y-1 hover:scale-110 duration-200"}
                    >
                        Get started <span className={"ml-2"}><ArrowRight/></span>
                    </p>

                </div>
            </PostJobSection>
        </>
    )
}
export default withBaseLayout(PostJobs);
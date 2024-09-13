import PostJobSection from "./builders/PostJobSection.tsx";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_POST_JOBS} from "../UserRoutes.constants.ts";
import {SET_UP_ACCOUNT_ROUTE_PATH} from "./PostJobsRoutes.constants.ts";
import {withBaseLayout} from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const PostJobs = () => {
    const navigate = useNavigate();

    return(
        <>
            <PostJobSection>
                <div className={"w-full md:w-[75%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%]  space-y-8 pt-4 md:pt-10"}>
                    <h1 className={"items-center justify-center font-semibold text-lg md:text-2xl capitalize"}>
                        Let's find your company
                    </h1>
                    <p className="text-lg items-center leading-normal">
                        Get your company in front of millions of job seekers. Join Kofcity Job Center, where you can easily create a company profile that will help you attract the best candidates for your open positions
                    </p>
                    <p className={"flex items-center justify-center py-2 px-12 float-right font-semibold rounded-md shadow-lg cursor-pointer bg-kjcBtn-200 hover:bg-kjcBtn-300 transition hover:-translate-y-1 hover:scale-110 duration-200"}
                       onClick = { () => { navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}${SET_UP_ACCOUNT_ROUTE_PATH}`)}}
                    >
                        Get started <span className={"ml-2"}><ArrowRight/></span>
                    </p>

                </div>
            </PostJobSection>
        </>
    )
}
export default withBaseLayout(PostJobs);
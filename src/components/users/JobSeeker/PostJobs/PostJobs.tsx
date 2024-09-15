import PostJobSection from "./builders/PostJobSection.tsx";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { USER_ROUTE_PATH, USER_ROUTE_PATH_POST_JOBS } from "../UserRoutes.constants.ts";
import {EXISTING_USERS_ROUTE_PATH, SET_UP_ACCOUNT_ROUTE_PATH} from "./PostJobsRoutes.constants.ts";
import { withBaseLayout } from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const PostJobs = () => {
    const navigate = useNavigate();

    const handleFirstTimeUser = () => {
        navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}${SET_UP_ACCOUNT_ROUTE_PATH}`);
    };

    const handleExistingUser = () => {
        navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}${EXISTING_USERS_ROUTE_PATH}`);
    };

    return (
        <>
            <PostJobSection>
                <div className={"w-full md:w-[75%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] space-y-8 pt-4 md:pt-10 text-center"}>
                    <h1 className={"font-semibold text-lg md:text-2xl capitalize"}>
                        Welcome to Koficity Job Center
                    </h1>
                    <p className="text-lg leading-normal">
                        We're glad to have you here!
                    </p>
                    <p className="text-lg leading-normal">
                        Are you here for the first time or have you already posted jobs with us?
                    </p>

                    {/* First Time Here Button */}
                    <p
                        className={"flex items-center justify-center py-2 px-12 mt-6 font-semibold rounded-md shadow-lg cursor-pointer bg-kjcBtn-200 hover:bg-kjcBtn-300 transition hover:-translate-y-1 hover:scale-110 duration-200"}
                        onClick={handleFirstTimeUser}
                    >
                        First Time Here? Click to Set Up an Account <span className={"ml-2"}><ArrowRight /></span>
                    </p>

                    {/* Already a User Button */}
                    <p
                        className={"flex items-center justify-center py-2 px-12 mt-6 font-semibold rounded-md shadow-lg cursor-pointer bg-kjcBtn-200 hover:bg-kjcBtn-300 transition hover:-translate-y-1 hover:scale-110 duration-200"}
                        onClick={handleExistingUser}
                    >
                        Already a User? Navigate to Your Posted Jobs <span className={"ml-2"}><ArrowRight /></span>
                    </p>
                </div>
            </PostJobSection>
        </>
    );
};

export default withBaseLayout(PostJobs);

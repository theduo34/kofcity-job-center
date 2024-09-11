import KjcButton from "../../../../builders/KjcButton";
import featuredJob from '/assets/images/gif/featuredJob.gif'
import KjcImage from "../../../../builders/KjcImage";
import {useNavigate} from "react-router-dom";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_JOB_LISTINGS} from "../../UserRoutes.constants.ts";
import React, {useEffect, useState} from "react";

const FeaturedJobs = () => {
    const [selectedCategories, setSelectedCategories] = useState<string>("newlyFeatured");
    const [hasFeaturedJobs, setHasFeaturedJobs] = useState<boolean>(false);
    const navigate = useNavigate();

    const featuredJobs: { name: string, role: string}[] = [
        // {
        //     name: "Aquasi",
        //     role: "senior level"
        // },
        // {
        //     name: "Smith",
        //     role: "Top executive"
        // }
    ]

    const featuredJobsCategories: { key?: string, label?: string, children?: React.ReactNode}[] = [
        {
            key: "newlyFeatured",
            label: "Newly Featured",
            children: "Soon!!! Newly Featured Jobs"
        },
        {
            key: "topPicks",
            label: "Top Picks",
            children: "Soon!!! Top Pick Jobs"
        },
        {
            key: "expiringSoon",
            label: "Expiring Soon",
            children: "Await!!! Expiring Soon Jobs"
        }
    ]
    useEffect(() => {
        if(!featuredJobs.length){
            setHasFeaturedJobs(true);
        }else {
            setHasFeaturedJobs(false);
        }
    }, [featuredJobs]);

    const handleSelectedCategories = (categoryKey: string) => {
        setSelectedCategories(categoryKey)
    }

    return(
        <>
            <div>
                <h1 className="text-xl font-semibold md:px-0">Featured Jobs</h1>
            </div>
            {/*has no featured jobs yet.*/}
            <div className={`${hasFeaturedJobs ? "flex" : "hidden"} mt-8 border-2 border-gray-200 p-8 flex items-center space-x-8 shadow-lg`}>
                <div className={"hidden md:block"}>
                    <KjcImage
                        src={featuredJob}
                        alt="Recommended jobs git"
                        width={300}
                    />
                </div>
                <div className={"w-full md:w-[35%]  items-center space-y-4"}>
                    <h2 className={"font-semibold text-2xl "}>Nothing to show here</h2>
                    <p className={"text-lg"}>This section is currently empty. We're working hard to bring you the best job matches. Check back soon for our featured listings!
                        <span className={"font-semibold hover:underline cursor-pointer ms-1"}
                              onClick={() => navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}`)}
                        >
                            Explore Jobs.</span>
                    </p>
                    <KjcButton className={" items-center px-6 py-2 bg-kjcBtn-200"}
                               onClick={() => navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}`)}
                    >
                       Explore Jobs
                    </KjcButton>
                </div>
            </div>

            {/*has featured jobs*/}
            <div className={`${hasFeaturedJobs ? "hidden" : "flex"} mt-8`}>
                <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 ">
                    <div className="w-full md:w-[20%] space-y-4 bg-white p-4 shadow-md h-[300px]">
                        <p className={"font-semibold"}>Feature coming soon</p>
                    </div>

                    <div className="w-full md:w-[50%] p-4 shadow-md bg-white h-[800px] ">
                        <h2 className={"font-semibold items-center text-xl"}>My Jobs</h2>
                        <div className="flex flex-wrap items-center  gap-2  md:gap-4 lg:gap-6 my-2">
                            {
                                featuredJobsCategories.map(category => {
                                    const isActive = selectedCategories === category.key
                                    return (
                                        <p
                                            key={category.key}
                                            className={`font-semibold px-3 py-1 rounded-full border-2 border-gray-200  cursor-pointer transition delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out ${isActive ? " bg-kjcBtn-200" : ""}`}
                                            onClick={() => handleSelectedCategories(category.key as string)}
                                        >
                                            {category.label}
                                        </p>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                featuredJobsCategories.map(category => (
                                    <div
                                        key={category.key}
                                        style={{display: selectedCategories === category.key ? "block" : "none"}}
                                    >
                                        {category.children}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-full md:w-[30%] p-4 shadow-md bg-white  h-[500px]">
                        <p className={"font-semibold"}>Feature coming soon</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FeaturedJobs;
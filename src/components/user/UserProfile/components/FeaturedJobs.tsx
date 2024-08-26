import KjcButton from "../../../../builders/KjcButton";
import featuredJob from '/assets/images/gif/featuredJob.gif'
import KjcImage from "../../../../builders/KjcImage";

const FeaturedJobs = () => {

    return(
        <>
            <div>
                <h1 className="text-xl font-semibold p-4 md:px-0">Featured Jobs</h1>
            </div>
            <div className="mt-8 border-2 border-gray-200 p-8 flex items-center space-x-8 shadow-lg">
                <div className={"hidden md:block"}>
                    <KjcImage
                        src={featuredJob}
                        alt="Recommended jobs git"
                        width={300}
                    />
                </div>
                <div className={"w-full md:w-[35%]  items-center space-y-4"}>
                    <h2 className={"font-semibold text-2xl "}>Nothing to show here</h2>
                    <p className={"text-lg"}>This section is currently empty. We're working hard to bring you the best job matches. Check back soon for our featured listings!<span className={"font-semibold hover:underline cursor-pointer"}> Explore Jobs.</span></p>
                    <KjcButton className={" items-center px-6 py-2 bg-kjcBtn-200"}>
                       Explore Jobs
                    </KjcButton>
                </div>
            </div>
        </>
    )
}
export default FeaturedJobs;
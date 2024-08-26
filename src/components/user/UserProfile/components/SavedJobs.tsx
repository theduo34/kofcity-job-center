import KjcButton from "../../../../builders/KjcButton";
import savedJobs from '/assets/images/gif/savedJobs.gif'
import KjcImage from "../../../../builders/KjcImage";

const SavedJobs = () => {

    return(
        <>
            <div>
                <h1 className="text-xl font-semibold p-4 md:px-0">Saved Jobs</h1>
            </div>
            <div className="mt-8 border-2 border-gray-200 p-8 flex items-center space-x-8 shadow-lg">
                <div className={"hidden md:block"}>
                    <KjcImage
                        src={savedJobs}
                        alt="Recommended jobs git"
                        width={300}
                    />
                </div>
                <div className={"w-full md:w-[35%]  items-center space-y-4"}>
                    <h2 className={"font-semibold text-2xl "}>Your Saved Jobs</h2>
                    <p className={"text-lg"}>You haven't saved any jobs yet. When you save a job, it will appear here for easy access and tracking. Manage your saved jobs<span className={"font-semibold hover:underline cursor-pointer"}> here.</span></p>
                    <KjcButton className={" items-center px-6 py-2 bg-kjcBtn-200"}>
                        Explore Jobs
                    </KjcButton>
                </div>
            </div>
        </>
    )
}
export default SavedJobs;
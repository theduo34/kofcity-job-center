import KjcButton from "../../../../builders/KjcButton";
import recommended from '/assets/images/gif/recommended.gif'
import KjcImage from "../../../../builders/KjcImage";

const RecommendedJobs = () => {

    return(
        <>
            <div>
                <h1 className="text-xl font-semibold p-4 md:px-0">Recommended Jobs</h1>
            </div>
            <div className="mt-8 border-2 border-gray-200 p-8 flex items-center space-x-8 shadow-lg">
               <div className={"hidden md:block"}>
                  <KjcImage
                      src={recommended}
                      alt="Recommended jobs git"
                      width={300}
                  />
               </div>
                <div className={"w-full md:w-[35%]  items-center space-y-4"}>
                    <h2 className={"font-semibold text-2xl "}>Nothing to show here</h2>
                    <p className={"text-lg"}>We will recommend jobs to you based on your activity and preferences. You can review your preferences <span className={"font-semibold hover:underline cursor-pointer"}> here.</span></p>
                    <KjcButton className={" items-center px-6 py-2 bg-kjcBtn-200"}>
                        Discover more
                    </KjcButton>
                </div>
            </div>
        </>
    )
}
export default RecommendedJobs;
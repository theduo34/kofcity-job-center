import KjcButton from "../../../../builders/KjcButton";
import jobAlert from '/assets/images/gif/jobAlert.gif'
import KjcImage from "../../../../builders/KjcImage";

const JobAlerts = () => {

    return(
        <>
            <div>
                <h1 className="text-xl font-semibold md:px-0">Job Alerts</h1>
            </div>
            <div className="mt-8 border-2 border-gray-200 p-8 flex items-center space-x-8 shadow-lg">
                <div className={"hidden md:block"}>
                    <KjcImage
                        src={jobAlert}
                        alt="Recommended jobs git"
                        width={300}
                    />
                </div>
                <div className={"w-full md:w-[35%]  items-center space-y-4"}>
                    <h2 className={"font-semibold text-2xl "}>Nothing to show here</h2>
                    <p className={"text-lg"}>TYou haven't set up any job alerts yet. Create custom alerts to receive notifications for new openings that match your preferences. Set up your first alert
                        <span className={"font-semibold hover:underline cursor-pointer ms-1"}>here.
                        </span>
                    </p>
                    <KjcButton className={" items-center px-6 py-2 bg-kjcBtn-200"}>
                        Set up Alerts
                    </KjcButton>
                </div>
            </div>
        </>
    )
}
export default JobAlerts;
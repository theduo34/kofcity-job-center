import WithContentLayout from "../../layout/hoc/WithContentLayout";
import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const JobListings = () => {
    return(
        <>
            <WithContentLayout>
                {"Job Listing Content Goes Here"}
            </WithContentLayout>
        </>
    )
}
export default withBaseLayout(JobListings);
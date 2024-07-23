import WithContentLayout from "../../layout/hoc/WithContentLayout";
import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const PostJobs = () => {
    return(
        <>
            <WithContentLayout>
                {"Post Jobs Content Goes Here"}
            </WithContentLayout>
        </>
    )
}
export default withBaseLayout(PostJobs);
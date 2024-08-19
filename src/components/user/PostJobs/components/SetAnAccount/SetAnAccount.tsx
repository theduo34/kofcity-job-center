import PostJobSection from "../../builders/PostJobSection.tsx";
import {withBaseLayout} from "../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const SetAnAccount = () => {
    return(
        <PostJobSection>
            <div>
                Set up an account content goes Here
            </div>
        </PostJobSection>
    )
}
export default withBaseLayout(SetAnAccount);
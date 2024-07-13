import WithContentLayout from "../../layout/hoc/WithContentLayout";
import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const IndustryTrends: React.FunctionComponent = () => {
    return(
        <>
            <WithContentLayout>
                {"Industry Trends Goes Here"}
            </WithContentLayout>
        </>
    )
}
export default withBaseLayout(IndustryTrends);
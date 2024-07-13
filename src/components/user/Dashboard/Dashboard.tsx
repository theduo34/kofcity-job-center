import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {Row} from "antd";
import WithContentLayout from "../../layout/hoc/WithContentLayout";
import FeaturedJobs from "./components/FeaturedJobs.tsx";

const Dashboard = () => {
    return(
        <>
           <Row>
               <WithContentLayout className={"bg-kjcBtn-50 bg-opacity-45"}> { <FeaturedJobs/> } </WithContentLayout>

           </Row>
        </>
    )
}
export default withBaseLayout(Dashboard);

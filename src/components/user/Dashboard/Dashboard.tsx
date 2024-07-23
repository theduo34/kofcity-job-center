import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {Row} from "antd";
import WithContentLayout from "../../layout/hoc/WithContentLayout";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs.tsx";

const Dashboard = () => {
    return(
        <>
           <Row>
               <WithContentLayout className={"bg-amber-50 bg-opacity-80"}> { <FeaturedJobs/> } </WithContentLayout>

           </Row>
        </>
    )
}
export default withBaseLayout(Dashboard);

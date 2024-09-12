import {Row} from "antd";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs.tsx";
import JobRecommendation from "./components/JobRecommendation";
import CompanySpotlight from "./components/CompanySpotlight";
import SuccessStories from "./components/SuccessStories";
import WithContentLayout from "../../../layout/hoc/WithContentLayout";
import {withBaseLayout} from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const Dashboard = () => {
    return(
        <>
           <Row>
               {/*featured jobs*/}
               <WithContentLayout className={"bg-white"}>
                   { <FeaturedJobs/> }
               </WithContentLayout>

               {/*job recommendations*/}
               <WithContentLayout  className={"bg-kjc-800"}>
                   { <JobRecommendation/>}
               </WithContentLayout>

               {/*company spotlight*/}
               <WithContentLayout >
                   { <CompanySpotlight/>}
               </WithContentLayout>

               {/*success stories*/}
               <SuccessStories/>

           </Row>
        </>
    )
}
export default withBaseLayout(Dashboard);

import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {Row} from "antd";
import WithContentLayout from "../../layout/hoc/WithContentLayout";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs.tsx";
import JobRecommendation from "./components/JobRecommendation";
import CompanySpotlight from "./components/CompanySpotlight";
import SuccessStories from "./components/SuccessStories";

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

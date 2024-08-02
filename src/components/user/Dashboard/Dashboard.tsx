import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {Row} from "antd";
import WithContentLayout from "../../layout/hoc/WithContentLayout";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs.tsx";
import JobRecommendation from "./components/JobRecommendation";
import CompanySpotlight from "./components/CompanySpotlight";

const Dashboard = () => {
    return(
        <>
           <Row>
               {/*featured jobs*/}
               <WithContentLayout className={"bg-amber-50 bg-opacity-80"}>
                   { <FeaturedJobs/> }
               </WithContentLayout>

               {/*job recommendations*/}
               <WithContentLayout  className={"bg-kjc-800"}>
                   { <JobRecommendation/>}
               </WithContentLayout>

               {/*company spotlight*/}
               <WithContentLayout className={"bg-kjc-800bg-amber-50 bg-opacity-80"}>
                   { <CompanySpotlight/>}
               </WithContentLayout>

           </Row>
        </>
    )
}
export default withBaseLayout(Dashboard);

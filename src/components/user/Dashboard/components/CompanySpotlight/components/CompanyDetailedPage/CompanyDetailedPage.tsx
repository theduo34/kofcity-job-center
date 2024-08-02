import {withBaseLayout} from "../../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import WithContentLayout from "../../../../../../layout/hoc/WithContentLayout";

const CompanyDetailedPage = () => {
    return(
        <>
           <WithContentLayout>
               {
                   <div className={"items-center leading-normal text-2xl"}>
                       Company Detailed Page Content Goes Here
                   </div>
               }
           </WithContentLayout>
        </>
    )
}
export default withBaseLayout(CompanyDetailedPage);

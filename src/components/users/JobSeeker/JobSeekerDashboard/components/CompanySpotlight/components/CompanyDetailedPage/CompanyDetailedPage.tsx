import WithContentLayout from "../../../../../../../layout/hoc/WithContentLayout";
import {withBaseLayout} from "../../../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

const CompanyDetailedPage = () => {
    return(
        <>
           <WithContentLayout>
               {
                   <div className={"items-center leading-normal text-md md:text-xl"}>
                       Company Detailed Page Content Goes Here
                   </div>
               }
           </WithContentLayout>
        </>
    )
}
export default withBaseLayout(CompanyDetailedPage);

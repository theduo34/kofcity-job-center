import {withBaseLayout} from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import FilterSearch from "./components/FilterSearch/FilterSearch.tsx";
import {Col, Row} from "antd";

const JobListings = () => {
    return(
        <>
            <div>
                <div className={"items-center py-4 md:py-8 px-0 md:px-8 lg:px-12 text-lg md:text-xl lg:text-3xl shadow-md font-semibold text-black bg-kjcBtn-300"}>
                   <h1 className={"px-4 md:px-12 mx-0 md:ms-4 lg:ms-6 xl:ms-8"}> Search results for
                       <span className={"text-white mx-3"}>Most popular jobs in Koforidua</span>
                   </h1>
                </div>

                {/*filter search*/}
                <Row>
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 20, offset: 2 }}
                        lg={{ span: 14, offset: 5 }}
                        xl={{ span: 18, offset: 3 }}
                        className="lg:py-12 py-8 px-4 md:px-8 lg:px-0"
                    >
                        <FilterSearch/>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default withBaseLayout(JobListings);
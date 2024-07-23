import React from "react";
import { withBaseLayout } from "../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import { Col, Row } from "antd";
import TopContent from "./components/TopContent/TopContent.tsx";
import PopularSearch from "./components/PopularSearch/PopularSearch.tsx";
import OurBenefits from "./components/OurBenefits";
import WithContentLayout from "../layout/hoc/WithContentLayout";

/**
 * Renders the home component.
 *
 * @return {JSX.Element} The rendered home component.
 */
const Home: React.FC = () => {
    return (
        <Row
        >
            {/*top section content*/}
            <Col
                span={24}
                className="relative items-center w-full px-4 lg:px-0 shadow-md"
            >
                <div className="absolute inset-0  z-10"></div>
                <div className="relative z-20 w-full flex ">
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 16, offset: 4 }}
                        className="py-8 md:py-12"
                    >
                        <TopContent />
                    </Col>
                </div>
            </Col>

            {/*popular search content*/}
            <WithContentLayout className={"shadow-md"}> { <PopularSearch/> } </WithContentLayout>

            {/*our benefits content*/}
            <WithContentLayout > { <OurBenefits/> }</WithContentLayout>
        </Row>
    );
};

export default withBaseLayout(Home);

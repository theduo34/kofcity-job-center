import React from "react";
import { withBaseLayout } from "../layout/hoc/withBaseLayout.tsx";
import { Col, Row } from "antd";
import TopContent from "./components/TopContent.tsx";
import PopularSearch from "./components/PopularSearch.tsx";

/**
 * Renders the home component.
 *
 * @return {JSX.Element} The rendered home component.
 */
const Home: React.FC = () => {
    return (
        <Row>
            <Col
                span={24}
                className="relative items-center w-full top-img px-4"
            >
                <div className="absolute inset-0 bg-kjcBtn-950 bg-opacity-45 z-10"></div>
                <div className="relative z-20 w-full flex justify-center">
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 16, offset: 3 }}
                        className="py-8 md:py-12"
                    >
                        <TopContent />
                    </Col>
                </div>

            </Col>

            <Col
                span={24}
                className="items-center w-full px-4"
            >
                <div className="w-full flex justify-center">
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 16, offset: 3 }}
                        className="py-8 md:py-12"
                    >
                        <PopularSearch/>
                    </Col>
                </div>
            </Col>
        </Row>
    );
};

export default withBaseLayout(Home);

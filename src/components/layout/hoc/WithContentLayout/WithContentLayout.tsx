// WithContentLayout.tsx
import React, { ReactNode } from 'react';
import { Col } from 'antd';

interface WithContentLayoutProps {
    className?: string;
    children: ReactNode;
}

const WithContentLayout: React.FC<WithContentLayoutProps> = ({ className, children }) => {
    return (
        <Col
            span={24}
            className= {`item-center w-full ${className}`}
        >
            <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 16, offset: 4 }}
                className=" lg:py-12 py-8 px-4 md:px-8 lg:px-0"
            >
                {children}
            </Col>
        </Col>
    );
};

export default WithContentLayout;

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
                md={{ span: 16, offset: 4 }}
                className="py-8 md:py-12"
            >
                {children}
            </Col>
        </Col>
    );
};

export default WithContentLayout;

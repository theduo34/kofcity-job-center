import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

export interface KjcFooterProps {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

const KjcFooter: React.FC<KjcFooterProps> = (props) => {
    return (
        <Footer
            style={props.style}
            className={props.className}
        >
            {props.children}
        </Footer>
    );
};

export default KjcFooter;

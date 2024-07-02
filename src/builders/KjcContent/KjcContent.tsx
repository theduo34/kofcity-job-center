import {Layout} from "antd";
import React from "react";

const { Content } = Layout;

export interface KjcContent {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
const KjcContent: React.FC<KjcContent> = (props) => {
    return(
        <Content
            style={props.style}
            className={props.className}
        >
            {props.children}
        </Content>

    )
}
export default KjcContent
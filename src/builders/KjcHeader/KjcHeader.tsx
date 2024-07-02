import {Layout} from "antd";
import React from "react";

const { Header } = Layout;
export interface KjcHeaderProps {
   style?: React.CSSProperties;
   className?: string;
   children?: React.ReactNode;

}
const KjcHeader: React.FC<KjcHeaderProps> = (props) => {
    return (
        <Header
        style={props.style}
        className={props.className}
        >
            {props.children}
        </Header>

    )
}
export default KjcHeader
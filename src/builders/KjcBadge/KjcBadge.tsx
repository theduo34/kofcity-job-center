import { Badge } from "antd";
import React from "react";

export interface KjcBadgeProps {
    children: React.ReactNode;
    color?: string;
    count?: number;
    dot?: boolean;
    offset?: [number, number];
    size?: "default" | "small";
    style?: React.CSSProperties;
    text?: string;
    title?: string;
    type?: "success" | "processing" | "default" | "error" | "warning";
    className?: string;
}

const KjcBadge = (props: KjcBadgeProps) => {

    return(
        <>
            <Badge
                color={props.color}
                count={props.count}
                dot={props.dot}
                offset={props.offset}
                size={props.size}
                style={props.style}
                text={props.text}
                title={props.title}
                className={props.className}
            >
                {props.children}
            </Badge>
        </>
    )
}

export default KjcBadge;
import React from "react";
import {Button} from "antd";

export interface KcjButtonProps {
    children?: React.ReactNode
    loading?: boolean
    block?: boolean
    danger?: boolean
    icon?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    size?: "large" | "middle" | "small"
    style?: React.CSSProperties
    type?: "primary" | "dashed" | "link" | "text" | "default"
    className?: string
    key?: string
    shape?: "default" | "circle" | "round"
    htmlType?: "button" | "submit" | "reset" | undefined
}

/**
 * Renders a KcjButton component with the specified properties.
 *
 * @param {KcjButtonProps} props - The properties for the KcjButton component.
 * @return {React.ReactNode} The rendered KcjButton component.
 */
const KcjButton = (props: KcjButtonProps): React.ReactNode =>{

    return (
        <Button
            loading={props.loading}
            block={props.block}
            danger={props.danger}
            icon={props.icon}
            onClick={props.onClick}
            disabled={props.disabled}
            size={props.size}
            style={props.style}
            type={props.type}
            className={props.className}
            key={props.key}
            htmlType={props.htmlType}
        >
            {props.children}
        </Button>
    )
}

export default  KcjButton;
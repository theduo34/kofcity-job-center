import {Avatar} from "antd";
import React from "react";
import type {AvatarSize} from "antd/es/avatar/AvatarContext";

export interface KjcAvatarProps {
    alt?: string
    gap?: number
    icon?: React.ReactNode
    shape?: "circle" | "square"
    size?: AvatarSize
    src?: string
    style?: React.CSSProperties
    className?: string
}
const KjcAvatar = (props: KjcAvatarProps) => {
    return(
        <>
            <Avatar
                alt={props.alt}
                gap={props.gap}
                icon={props.icon}
                shape={props.shape}
                size={props.size}
                src={props.src}
                style={props.style}
                className={props.className}
            />
        </>
    )
}

export default KjcAvatar;
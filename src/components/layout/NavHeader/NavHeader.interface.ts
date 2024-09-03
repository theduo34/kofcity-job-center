import React from "react";

export interface NavHeaderInterface {
}

export interface NavHeaderAuthBtnInterface{
    label?: string;
    onClick?: () => void;
    className?: string;
}

export interface LeftHeaderIconsInterface{
    label?: string,
    icon?: React.ReactNode,
    key?: string
    onClick?: () => void
    children?: React.ReactNode,
}

import React from "react";

export interface NavFooterMenuItemProps {
    label?: string,
    icon?: React.ReactNode,
    key?: string | undefined,
    onClick?: () => void
}

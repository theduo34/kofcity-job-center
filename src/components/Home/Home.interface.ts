export interface TopContentInterface{
    key?: string;
    label?: string;
    users?: string;
    description?: string;
    image?: string;
    onClick?: () => void;
    className?: string;
}

export interface JobTypesInterface{
    key?: string;
    label?: string;
    onClick?: () => void;
}

export interface JobCategoriesInterface{
    key?: string;
    label?: string;
    icon?: React.ReactNode,
    onClick?: () => void;
    className?: string;
    options?:Array<{ value: string; label: string }>;
}
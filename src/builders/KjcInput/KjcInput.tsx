import {CSSProperties} from "react";
import {Input} from "antd";

export interface JybekInputProps{
    maxLength?: number;
    minLength?: number;
    status?: "warning" | "error";
    allowClear?: boolean;
    onChange?: () => void;
    style?: CSSProperties;
    className?: string;
    id?: string
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    disabled?: boolean;
    value?: string
    type?: string
    placeholder?: string
}


const KjcInput = (props: JybekInputProps ) => {
    return (
        <Input
            prefix={props.prefix}
            maxLength={props.maxLength}
            minLength={props.minLength}
            status={props.status}
            allowClear={props.allowClear}
            onChange={props.onChange}
            style={props.style}
            className={props.className}
            id={props.id}
            suffix={props.suffix}
            disabled={props.disabled}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}
export default KjcInput

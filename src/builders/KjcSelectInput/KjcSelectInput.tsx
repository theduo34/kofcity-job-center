import React from "react";
import { Select } from "antd";

const { Option } = Select;


type KjcSelectInputProps = {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    id?: string;
    type?: string;
    name?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    options?: Array<{ value: string; label: string }>; // Updated options type
};

const KjcSelectInput: React.FC<KjcSelectInputProps> = (props) => {
    return (
        <Select
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            className={props.className}
            value={props.value}
        >
            {(props.options || []).map(option => (
                <Option
                    key={option.value}
                    value={option.value}
                    id={props.id}
                    style={{ borderStyle: 'none', ...props.style }}
                >
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default KjcSelectInput;

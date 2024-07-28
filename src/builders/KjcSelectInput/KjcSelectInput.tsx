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
    options?: Array<{ value: string; label: string }>;
    placeholder?: string,
};

const KjcSelectInput: React.FC<KjcSelectInputProps> = (props) => {
    const handleOnChange = (value: string) => {
        const selectedOptions = props.options?.find((option) => option.value === value);
        if(selectedOptions) {
            const id = `${props.name}.${selectedOptions.value}`;
            console.log(`Selected ID: ${id}`);
        }
        if( props.onChange){
            props.onChange(value);
        }
    }
    return (
        <Select
            defaultValue={props.defaultValue}
            onChange={handleOnChange}
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
        >
            {(props.options || []).map(option => (
                <Option
                    key={option.value}
                    value={option.value}
                    id={`${props.name}.${option.value}`}
                    style={{  ...props.style }}
                >
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default KjcSelectInput;

import React, { useState } from "react";
import { Form, FormInstance, Input } from "antd";

type KjcPasswordInputProps = {
    className?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    form?: FormInstance;
    // eslint-disable-next-line
    rules?: any[] | undefined;
    valuePropsName?: string;
    variant?: "outlined" | "filled" | "borderless";
    style?: React.CSSProperties;
    onChange?: (value: string) => void;
};

const KjcPasswordInput: React.FC<KjcPasswordInputProps> = (props) => {
    const [value, setValue] = useState<string>("");

    const handleInputChange = (value: string) => {
        setValue(value);
        if (props.onChange) {
            props.onChange(value);
        }
    };

    return (
        <Form.Item
            label={props.label}
            name={props.name}
            className={props.className}
            rules={[
                ...(props.rules || []),
            ]}
        >
            <Input.Password
                placeholder={props.placeholder}
                style={props.style}
                className={props.className}
                allowClear
                value={value}
                onChange={e=> handleInputChange(e.target.value)}
            />
        </Form.Item>
    );
};

export default KjcPasswordInput;

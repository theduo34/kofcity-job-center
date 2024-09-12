import React, { useState } from "react";
import { Form, FormInstance, Input, Menu } from "antd";

type KjcInputProps = {
    className?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    form?: FormInstance;
    //eslint-disable-next-line
    rules?: any[] | undefined;
    valuePropsName?: string;
    variant?: "outlined" | "filled" | "borderless";
    style?: React.CSSProperties;
    onChange?: (value: string) => void;
    //eslint-disable-next-line
    suggestions?: any[] | undefined;
};

const KjcInput: React.FC<KjcInputProps> = (props) => {
    const [value, setValue] = useState<string>("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

    const handleInputChange = (inputValue: string) => {
        setValue(inputValue);
        if (props.onChange) {
            props.onChange(inputValue);
        }
        if (props.suggestions) {
            const filtered = props.suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        }
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setValue(suggestion);
        setFilteredSuggestions([]);
        if (props.onChange) {
            props.onChange(suggestion);
        }
    };

    const menu = (
        <Menu>
            {filteredSuggestions.map((suggestion, index) => (
                <Menu.Item key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                    {suggestion}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Form.Item
            label={props.label}
            name={props.name}
            className={props.className}
            rules={[...(props.rules || [])]}
        >
            {/*<Dropdown*/}
            {/*    overlay={menu}*/}
            {/*    visible={filteredSuggestions.length > 0}*/}
            {/*>*/}
                <Input
                    placeholder={props.placeholder}
                    style={props.style}
                    className={props.className}
                    allowClear
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            {/*</Dropdown>*/}
        </Form.Item>
    );
};

export default KjcInput;

import React, {ReactNode} from "react";
import { Image } from 'antd';

export interface KcjImageProps {
    alt?: string;
    height?: string | number;
    width?: string | number;
    placeholder?: React.ReactNode;
    preview?: boolean;
    src?: string;
    key?: string;
    onError?: () => void;
    className?: string;
    onClick?: () => void;
}

/**
 * Renders a KcjImage component with the provided props.
 *
 * @param {KcjImageProps} props - The properties to configure the KcjImage component.
 * @return {ReactNode} The rendered KcjImage component.
 */
const KcjImage: React.FC<KcjImageProps> = (props: KcjImageProps): ReactNode => {
    return (
        <Image
            alt={props.alt}
            height={props.height}
            width={props.width}
            placeholder={props.placeholder}
            preview={props.preview || false}
            src={props.src}
            key={props.key}
            onError={props.onError}
            className={props.className}
            onClick={props.onClick}
        />
    );
};

export default KcjImage;
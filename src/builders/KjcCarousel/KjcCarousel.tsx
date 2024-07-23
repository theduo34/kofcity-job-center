import { Carousel } from "antd";
import React from "react";

export interface KjcCarouselProps {
    arrows?: boolean,
    autoplay?: boolean,
    autoplaySpeed?: number,
    dots?: boolean,
    dotsPosition?: "top" | "bottom" | "left" | "right",
    draggable?: boolean,
    fade?: boolean,
    speed?: number,
    infinite?: boolean,
    effect?: "scrollx" | "fade",
    afterChange?: (current: number) => void,
    beforeChange?: (current: number, next: number) => void,
    easing?: string,
    className?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

const KjcCarousel: React.FC<KjcCarouselProps> = (props) => {
    return (
        <Carousel
            arrows={props.arrows}
            autoplay={props.autoplay}
            autoplaySpeed={props.autoplaySpeed}
            dots={props.dots}
            dotPosition={props.dotsPosition}
            draggable={props.draggable}
            fade={props.fade}
            speed={props.speed}
            infinite={props.infinite}
            effect={props.effect}
            afterChange={props.afterChange}
            beforeChange={props.beforeChange}
            easing={props.easing}
            className={props.className}
        >
                {props.children}
        </Carousel>
    );
};

export default KjcCarousel;

import React from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {ServiceImageCarouselProps} from './imagecarousel.interface.ts'


const ServiceImageCarousel: React.FC<ServiceImageCarouselProps> = ({ images }) => (
    <Carousel
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
    >
        {images.map((src, index) => (
            <div key={index}>
                <img
                    src={src} alt={`slide-${index}`}
                    className="w-16 md:w-24 lg:w-42"
                    style={{ objectFit: 'cover' }}

                />
            </div>
        ))}
    </Carousel>
);

export default ServiceImageCarousel;
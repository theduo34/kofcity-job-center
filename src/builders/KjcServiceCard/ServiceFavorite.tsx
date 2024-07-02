import  { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const ServiceFavorite = () => {
    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <div
            onClick={toggleFavorite}
            style={{ position: 'absolute', top: 10, right: 10, fontSize: '24px', cursor: 'pointer', color: 'white' }}
        >
            {favorite ? <HeartFilled /> : <HeartOutlined />}
        </div>
    );
};

export default ServiceFavorite;

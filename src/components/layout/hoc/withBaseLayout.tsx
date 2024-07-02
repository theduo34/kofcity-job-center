import React, { ComponentType } from 'react';
import BaseLayout from '../Base';

interface Props {
    // eslint-disable-next-line
    [key: string]: any;
}

export const withBaseLayout = <P extends Props>(WrappedComponent: ComponentType<P>) => {
    const WithBaseLayout: React.FC<P> = (props) => (
        <BaseLayout>
            <WrappedComponent {...props} />
        </BaseLayout>
    );

    return WithBaseLayout;
};


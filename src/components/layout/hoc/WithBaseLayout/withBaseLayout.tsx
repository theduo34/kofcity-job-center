import React, { ComponentType } from 'react';
import BaseLayout from '../../Base';

interface Props {
    // eslint-disable-next-line
    [key: string]: any;
}
/**
 * Renders the with base layout component.
 *
 * @return {JSX.Element} The rendered with base layout component.
 */

export const withBaseLayout = <P extends Props>(WrappedComponent: ComponentType<P>) => {
    const WithBaseLayout: React.FC<P> = (props) => (
        <BaseLayout>
            <WrappedComponent {...props} />
        </BaseLayout>
    );

    return WithBaseLayout;
};


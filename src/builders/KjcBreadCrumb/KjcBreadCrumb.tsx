import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { UilPathfinderUnite } from '@iconscout/react-unicons';

const KjcBreadCrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    return (
        <Breadcrumb
            style={{
                margin: '16px 0',
            }}
            className="hidden lg:block"
        >
            <Breadcrumb.Item>
                <Link to="/">
                    <UilPathfinderUnite className="w-5 pl-1" />
                </Link>
            </Breadcrumb.Item>
            {pathSnippets.map((_, index) => {
                const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
                return (
                    <Breadcrumb.Item key={url}>
                        <Link to={url}>
                            {decodeURI(_).replace(/ /g, '-').toLowerCase()}
                        </Link>
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

export default KjcBreadCrumb;

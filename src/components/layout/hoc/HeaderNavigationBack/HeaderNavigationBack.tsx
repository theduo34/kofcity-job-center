import { Layout } from "antd";
import KjcContent from "../../../../builders/KjcContent";
import KjcHeader from "../../../../builders/KjcHeader";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React from "react";

const HeaderNavigationBack = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    const LayoutWrapper: React.FC<P> = (props) => {
        const navigate = useNavigate();

        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Layout>
                    <KjcHeader
                        style={{
                            textAlign: "center",
                            height: "64px",
                            paddingInline: "48px",
                            lineHeight: "64px",
                            padding: 0,
                        }}
                        className="items-center top-0 z-50 shadow-md w-full bg-white"
                    >
                        <div
                            className={"px-4 float-left space-x-1 cursor-pointer hover:underline"}
                            onClick={() => navigate(-1)}
                        >
                            <LeftOutlined style={{ fontSize: "12px" }} />
                            <span>Back</span>
                        </div>
                    </KjcHeader>

                    <KjcContent className="items-center">
                        <WrappedComponent {...props} />
                    </KjcContent>
                </Layout>
            </Layout>
        );
    };

    return LayoutWrapper;
};

export default HeaderNavigationBack;

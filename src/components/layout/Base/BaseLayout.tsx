import KjcHeader from "../../../builders/KjcHeader";
import KjcContent from "../../../builders/KjcContent";
import KjcFooter from "../../../builders/KjcFooter";
import NavFooter from "../NavFooter";
import React from "react";
import { Layout } from "antd";
import NavHeader from "../NavHeader";
import MainFooter from "../MainFooter";

export interface BaseLayoutProps {
    children: React.ReactNode
}

/**
 * Renders the base layout component.
 *
 * @return {JSX.Element} The rendered base layout component.
 */
const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => {
    return (
        <Layout
            style={{ minHeight: "100vh" }}
        >
            <Layout>
                <KjcHeader
                    style={{
                        textAlign: "center",
                        height: "64px",
                        paddingInline: "48px",
                        lineHeight: "64px",
                        padding: 0
                    }}
                    className="top-0 z-50 shadow-md"
                >
                    <NavHeader/>
                </KjcHeader>

                <KjcContent
                    className="items-center"
                >
                    { children }
                </KjcContent>

                <KjcFooter
                    style={{ textAlign: "center" }}
                    className="hidden md:block bg-amber-50"
                >
                    { <MainFooter/>}
                </KjcFooter>
                <KjcFooter
                    style={{padding: 0}}
                    className="md:hidden bg-white"
                >
                    <div>
                        <MainFooter/>
                        <NavFooter/>
                    </div>
                </KjcFooter>
            </Layout>
        </Layout>
    )
}
export default BaseLayout;
import React from "react";
import {withBaseLayout} from "../layout/hoc/withBaseLayout.tsx";


/**
 * This page contains everything about the landing page. In this context,
 * "landing page" refers to what appears on the page during the user's first visit to the site.
 * It features a quiet and user-friendly interface designed to enhance ease and smoothness
 * of user navigation and search on the platform.
 */

const Home: React.FC = () => {
    return (
        <>
         <h3>Landing Page</h3>
        </>
    )
}
export default withBaseLayout(Home);
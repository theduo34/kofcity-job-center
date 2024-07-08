import React from "react";
import {withBaseLayout} from "../layout/hoc/withBaseLayout.tsx";


/**
 * Renders the home component.
 *
 * @return {JSX.Element} The rendered home component.
 */

const Home: React.FC = () => {
    return (
        <>
         <h3>Landing Page</h3>
        </>
    )
}
export default withBaseLayout(Home);
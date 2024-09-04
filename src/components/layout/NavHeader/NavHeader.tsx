import { useNavigate } from "react-router-dom";
import { useState } from "react";
import KjcImage from "../../../builders/KjcImage";
import { getNavFooterMenuItems } from "../NavFooter/NavFooter.constants";
import LeftHeaderIcons from "./components/LeftHeaderIcons.tsx";
import NavHeaderAuthBtn from "./components/NavHeaderAuthBtn.tsx";
import KofJobs from '/assets/images/logo/IMG.png';
import {useAuth} from "../../../utils/context/AuthContext/AuthContext.tsx";
import {USER_ROUTE_PATH} from "../../user/UserRoutes.constants.ts";
import {DASHBOARD_ROUTES_PATH} from "../../user/Dashboard/DashboardRoutes.constants.ts";

/**
 * Renders the nav header component.
 *
 * @return {JSX.Element} The rendered nav header component.
 */
const NavHeader = () => {
    const { userLoggedIn} = useAuth()
    const [activeItem, setActiveItem] = useState<string>("");
    const navigate = useNavigate();

    const handleOnLogoClick = () => {
        if(userLoggedIn){
            navigate(`${USER_ROUTE_PATH}${DASHBOARD_ROUTES_PATH}`);
        }
        else {
            navigate(`/`)
        }

    }

    const headerMenuOptions = getNavFooterMenuItems(navigate);

    return (
        <>
            <nav className="fixed top-0 w-full text-center bg-white px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-24">
                        <div className={"flex w-24 me-12"}>
                            <KjcImage
                                src= {KofJobs}
                                alt="KcjImage"
                                className="w-8"
                                onClick={handleOnLogoClick}
                            />
                        </div>
                        <div className="ps-16 items-center justify-between hidden md:block">
                            <div className="flex items-center justify-evenly space-x-10 lg:space-x-12">
                                {headerMenuOptions.map((menuItem) => {
                                    const isActive = activeItem === menuItem.key;
                                    return (
                                        <div
                                            key={menuItem.key}
                                            className={`relative flex items-center text-xl font-semibold cursor-pointer hover:text-kjcBtn-900 active:text-kjcBtn-900 group ${isActive ? 'text-kjcBtn-900' : ''}`}
                                            onClick={() => {
                                                setActiveItem(menuItem.key || "");
                                                if (menuItem.onClick) {
                                                    menuItem.onClick();
                                                }
                                            }}
                                        >
                                            {menuItem.key}
                                            <span
                                                className={`absolute -bottom-8 left-0 w-full h-1 bg-kjcBtn-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-right ${isActive ? 'scale-x-100' : ''}`}
                                            ></span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        {
                            userLoggedIn ? <NavHeaderAuthBtn/> :<LeftHeaderIcons/>

                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavHeader;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import KjcImage from "../../../builders/KjcImage";
import { getNavFooterMenuItems } from "../NavFooter/NavFooter.constants";
import LeftHeaderIcons from "./components/LeftHeaderIcons.tsx";
import NavHeaderAuthBtn from "./components/NavHeaderAuthBtn.tsx";
import KofJobs from '/assets/images/logo/IMG.png';
//eslint-disable-next-line
// @ts-ignore
import { useAuth } from "../../shared/authContext/AuthContext.tsx";
import {USER_ROUTE_PATH} from "../../users/JobSeeker/UserRoutes.constants.ts";
import { DASHBOARD_ROUTES_PATH } from "../../users/JobSeeker/JobSeekerDashboard/DashboardRoutes.constants.ts";

const NavHeader = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const { currentUser } = useAuth();
    const [activeItem, setActiveItem] = useState<string>("");
    const navigate = useNavigate();

    // Check user authentication status
    useEffect(() => {
        const checkUser = async () => {
            if (currentUser) {
                try {
                    const token = await currentUser.getIdToken();
                    if (token) {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false);
                    }
                } catch (error) {
                    console.error("Error fetching token", error);
                    setAuthenticated(false);
                }
            } else {
                setAuthenticated(false);
            }
        };

        checkUser();
    }, [currentUser]);

    const handleOnLogoClick = () => {
        if (authenticated) {
            navigate(`${USER_ROUTE_PATH}${DASHBOARD_ROUTES_PATH}`);
        } else {
            navigate(`/`);
        }
    };

    const headerMenuOptions = getNavFooterMenuItems(navigate);

    return (
        <nav className="fixed top-0 w-full text-center bg-white px-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-24">
                    <div className={"flex w-24 me-12"}>
                        <KjcImage
                            src={KofJobs}
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
                                            className={`absolute -bottom-5 left-0 w-full h-1 bg-kjcBtn-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-right ${isActive ? 'scale-x-100' : ''}`}
                                        ></span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    { authenticated ? <LeftHeaderIcons /> : <NavHeaderAuthBtn /> }
                </div>
            </div>
        </nav>
    );
};

export default NavHeader;

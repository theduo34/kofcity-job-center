import { useNavigate } from "react-router-dom";
import { useState } from "react";
import KjcImage from "../../../builders/KjcImage";
import { NavFooterMenuItems } from "../NavFooter/NavFooter.constants.tsx";
import NavHeaderAuthBtn from "./NavHeaderAuthBtn.tsx";

type MenuItem = {
    key: string;
    onClick?: () => void;
};

/**
 * Renders the top header component.
 *
 * @return {JSX.Element} The rendered top header component.
 */
const NavHeader = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleOnLogoClick = () => {
        navigate('/');
    }

    const headerMenuOptions: MenuItem[] = NavFooterMenuItems();

    return (
        <>
            <nav className="fixed top-0 w-full text-center bg-white px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <KjcImage
                            src=" "
                            alt="KcjImage"
                            className="w-24"
                            onClick={handleOnLogoClick}
                        />
                    </div>
                    <div className="mx-auto text-center hidden md:block">
                        <div className="flex items-center justify-evenly space-x-10 lg:space-x-12">
                            {
                                headerMenuOptions.map((menuItem) => {
                                    const isActive = activeItem === menuItem.key;
                                    return (
                                        <div
                                            key={menuItem.key}
                                            className={`relative flex items-center text-xl font-sans cursor-pointer ease-in-out hover:text-kjcBtn-900 active:text-kjcBtn-900 group ${isActive ? 'text-kjcBtn-900' : ''}`}
                                            onClick={() => {
                                                setActiveItem(menuItem.key);
                                                if (menuItem.onClick) {
                                                    menuItem.onClick();
                                                }
                                            }}
                                        >
                                            {menuItem.key}
                                            <span
                                                className={`absolute -bottom-6 left-0 w-full h-1 bg-kjcBtn-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-right ${isActive ? 'scale-x-100' : ''}`}
                                            ></span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <NavHeaderAuthBtn/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavHeader;

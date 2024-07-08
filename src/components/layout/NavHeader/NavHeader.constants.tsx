import {NavHeaderAuthBtnInterface} from "./NavHeader.interface.ts";
import {useNavigate} from "react-router-dom";


// const NavHeaderConstant = (): NavHeaderInterface => [
//
// ]


const NAV_HEADER_AUTH_BUTTONS = {
    JOIN_NOW: "Join Now",
    SIGN_IN: "Sign in",
}

export const NavHeaderAuthBtn = (): NavHeaderAuthBtnInterface[] => {
    const navigate = useNavigate();

    return[
        {
            label: NAV_HEADER_AUTH_BUTTONS.JOIN_NOW,
            onClick:() => navigate('/registration/user'),
            className: "bg-kjcBtn-400 shadow-sm text-kjc-950 "
        },
        {
            label: NAV_HEADER_AUTH_BUTTONS.SIGN_IN,
            onClick: () => navigate('/auth/login'),
            className: "outline-2 border-kjc-950 text-kjc-950"
        }
    ]

}
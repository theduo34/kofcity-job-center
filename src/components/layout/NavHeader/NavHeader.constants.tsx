// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {AUTH_ROUTE_PATH, LOGIN_PATH} from "../../shared/auth/AuthRoutes.constants.ts";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH
} from "../../shared/registration/RegistrationRoutes.constants.ts";
import {NavHeaderAuthBtnInterface} from "./NavHeader.interface.ts";

//nav-header auth btn constants
const NAV_HEADER_AUTH_BUTTONS = {
    JOIN_NOW: "Join Now",
    SIGN_IN: "Sign in",
}

export const getNavHeaderAuthBtn = (navigate: (path: string) => void): NavHeaderAuthBtnInterface[] => [
        {
            label: NAV_HEADER_AUTH_BUTTONS.JOIN_NOW,
            onClick: () => navigate(`${ACCOUNT_REGISTRATION_ROUTE_PATH}${REGISTRATION_ROUTE_PATH}`),
            className: "rounded bg-kjcBtn-900 leading-normal text-white ease-in-out hover:bg-kjcBtn-500 focus:bg-kjcBtn-500 active:bg-kjcBtn-600 hover:shadow-kjcBtn-500 hover:text-white submitBtnsHover"
        },
        {
            label: NAV_HEADER_AUTH_BUTTONS.SIGN_IN,
            onClick: () => navigate(`${AUTH_ROUTE_PATH}${LOGIN_PATH}`),
            className: "outline-2 border-kjc-950 text-kjc-950"
        }
    ]



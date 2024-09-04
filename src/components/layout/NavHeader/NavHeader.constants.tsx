import {LeftHeaderIconsInterface, NavHeaderAuthBtnInterface} from "./NavHeader.interface.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { UilBookmark, UilChat, UilBell} from '@iconscout/react-unicons'
import KjcBadge from "../../../builders/KjcBadge";
import {
    USER_JOB_ALERTS_PATH,
    USER_PROFILE_PATH,
    USER_ROUTE_PATH,
    USER_SAVED_JOBS_PATH
} from "../../user/UserRoutes.constants.ts";
import {AUTH_ROUTE_PATH, LOGIN_PATH} from "../../shared/auth/AuthRoutes.constants.ts";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH
} from "../../shared/registration/RegistrationRoutes.constants.ts";
import SavedJobs from "../../user/UserProfile/components/SavedJobs.tsx";
import JobAlerts from "../../user/UserProfile/components/JobAlerts.tsx";

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

//nav-header left icons
const LEFT_HEADER_ICONS = {
    SAVED: "Saved",
    CHATBOT: "Chatbot",
    NOTIFICATION: "Notification",
    Account: "Account",
}
export const getLeftHeaderIcons = (navigate: (path: string) => void): LeftHeaderIconsInterface[] => [
    {
        key: LEFT_HEADER_ICONS.SAVED,
        label: LEFT_HEADER_ICONS.SAVED,
        icon: <KjcBadge size="small" count={5}><UilBookmark/></KjcBadge>,
        onClick: ()  => navigate( `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_SAVED_JOBS_PATH}`),
        children: <SavedJobs />
    },
    // {
    //     key: LEFT_HEADER_ICONS.CHATBOT,
    //     label: LEFT_HEADER_ICONS.CHATBOT,
    //     icon: <UilChat/>,
    //     onClick: ()  => navigate("")
    // },
    {
        key: LEFT_HEADER_ICONS.NOTIFICATION,
        label: LEFT_HEADER_ICONS.NOTIFICATION,
        icon: <KjcBadge size="small" count={2}><UilBell/></KjcBadge>,
        onClick: ()  => navigate(`${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_JOB_ALERTS_PATH}`),
        children: <JobAlerts />
    },

]

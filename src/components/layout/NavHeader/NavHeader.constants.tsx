import {LeftHeaderIconsInterface, NavHeaderAuthBtnInterface} from "./NavHeader.interface.ts";
import { UilBookmark, UilChat, UilBell} from '@iconscout/react-unicons'

// const NavHeaderConstant = (): NavHeaderInterface => [
//
// ]


//nav-header auth btn constants
const NAV_HEADER_AUTH_BUTTONS = {
    JOIN_NOW: "Join Now",
    SIGN_IN: "Sign in",
}

export const getNavHeaderAuthBtn = (navigate: (path: string) => void): NavHeaderAuthBtnInterface[] => [
        {
            label: NAV_HEADER_AUTH_BUTTONS.JOIN_NOW,
            onClick:() => navigate('/account/registration'),
            className:" rounded bg-kjcBtn-400 leading-normal text-white ease-in-out hover:bg-kjcBtn-500 focus:bg-kjcBtn-500 active:bg-kjcBtn-600 hover:shadow-kjcBtn-500 hover:text-white submitBtnsHover"
        },
        {
            label: NAV_HEADER_AUTH_BUTTONS.SIGN_IN,
            onClick: () => navigate('/auth/login'),
            className: "outline-2 border-kjc-950 text-kjc-950"
        }
    ]



//nav-header left icons
const LEFT_HEADER_ICONS = {
    SAVED: "Saved",
    CHATBOT: "Chatbot",
    NOTIFICATION: "Notification"
}
export const getLeftHeaderIcons = (navigate: (path: string) => void): LeftHeaderIconsInterface[] => [
    {
        key: LEFT_HEADER_ICONS.SAVED,
        label: LEFT_HEADER_ICONS.SAVED,
        icon: <UilBookmark/>,
        onClick: ()  => navigate("/")
    },
    {
        key: LEFT_HEADER_ICONS.CHATBOT,
        label: LEFT_HEADER_ICONS.CHATBOT,
        icon: <UilChat/>,
        onClick: ()  => navigate("/")
    },
    {
        key: LEFT_HEADER_ICONS.NOTIFICATION,
        label: LEFT_HEADER_ICONS.NOTIFICATION,
        icon: <UilBell/>,
        onClick: ()  => navigate("/")
    },
]

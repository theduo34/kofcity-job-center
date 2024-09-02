import pinterest from '/assets/images/social/pinterest.png';
import whatsapp from '/assets/images/social/whatsapp.png';
import linkedIn from '/assets/images/social/linkedIn.png';

export interface footerItemsProps {
    key?: string;
    label?: string;
    lists?: { item?: string; key?: string; onClick?: () => void }[];
}


export const getFooterItems = (navigate: (path: string) => void): footerItemsProps[] => [
        {
            key: "forJobSeekers",
            label: "For Job Seekers",
            lists: [
                {
                    item: "Browse Jobs",
                    key: "browseJobs",
                    onClick: () => navigate("")
                },
                {
                    item: "Filter Job Search",
                    key: "filterJobSearch",
                    onClick: () => navigate("")
                },
                {
                    item: "Apply Jobs",
                    key: "applyJobs",
                    onClick: () => navigate("")
                },
                {
                    item: "Profile Management",
                    key: "profileManagement",
                    onClick: () => navigate("")
                },
                {
                    item: "Industry Trends",
                    key: "industryTrends",
                    onClick: () => navigate("")
                },
                {
                    item: "Notification management",
                    key: "notificationManagement",
                    onClick: () => navigate("")
                },
                {
                    item: "Saved management",
                    key: "savedManagement",
                    onClick: () => navigate("")
                },
                {
                    item: "Log Out",
                    key: "logOut",
                    onClick: () => navigate("")
                },
                {
                    item: "Sign-in",
                    key: "signIn",
                    onClick: () => navigate("")
                },

            ]
        },
        {
            key: "forEmployers",
            label: "For Employers",
            lists: [
                {
                    item: "Post Jobs",
                    key: "postJobs",
                    onClick: () => navigate("")
                },
                {
                    item: "Account Management",
                    key: "industryTrends",
                    onClick: () => navigate("")
                },
                {
                    item: "User",
                    key: "user",
                    onClick: () => navigate("")
                },
                {
                    item: "Company Name",
                    key: "companyName",
                    onClick: () => navigate("")
                },
                {
                    item: "Contact Information",
                    key: "contactInformation",
                    onClick: () => navigate("")
                },
                {
                    item: "Application Preference",
                    key: "applicationPreference",
                    onClick: () => navigate("")
                },
                {
                    item: "Job Description",
                    key: "jobDescription",
                    onClick: () => navigate("")
                },
                {
                    item: "Company Overview",
                    key: "companyOverview",
                    onClick: () => navigate("")
                },
                {
                    item: "Basic Information",
                    key: "basicInformation",
                    onClick: () => navigate("")
                },


            ]
        },
    {
        key: "helpfulResource",
        label: "Helpful Resource",
        lists: [
            {
                item: "Industry Trends",
                key: "industryTrends",
                onClick: () => navigate("/industry-trends")
            },
            {
                item: "Blogs",
                key: "blogs",
                onClick: () => navigate("/blogs")
            },
            {
                item: "Help",
                key: "help",
                onClick: () => navigate("/help")
            },
            {
                item: "Terms of Service",
                key: "termsOfService",
                onClick: () => navigate("/terms-of-service")
            },
            {
                item: "Conditions",
                key: "conditions",
                onClick: () => navigate("/conditions")
            },
            {
                item: "Privacy Policy",
                key: "privacyPolicy",
                onClick: () => navigate("/privacy-policy")
            },
            {
                item: "Contact Us",
                key: "contactUs",
                onClick: () => navigate("/contact-us")
            },
            {
                item: "FAQ",
                key: "faq",
                onClick: () => navigate("/faq")
            },
            {
                item: "Agreement of Service",
                key: "agreementOfService",
                onClick: () => navigate("/community-guidelines")
            }
        ]
    }

];

export const SOCIAL_MEDIA_ICONS={
    WHATSAPP: 'WhatsApp',
    TWITTER: 'Twitter',
    LINKEDIN: 'Linkedin',
    PINTEREST: "Pinterest",
    MEDUIM: 'Meduim'

}

export interface socialMediaIconsProps {
    style?: React.CSSProperties;
    onClick?: () => void;
    icon?: string;
    key?: string;
}

//whatsApp
const handleWhatsApp = () => {
    window.open('https://wa.me/?text', '_blank')
}

//twitter
const handleTwitter = () => {
    window.open('https://twitter.com/', '_blank')

}

//facebook
const handleMeduim = () => {
    window.open('https://www.facebook.com/', '_blank')


}
//linkedInd
const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/r', '_blank')
}


export const getSocialIcons= (): socialMediaIconsProps[] => [
    {
        icon: "",
        onClick: handleMeduim,
        key: SOCIAL_MEDIA_ICONS.MEDUIM
    },
    {
        icon: whatsapp,
        onClick: handleWhatsApp,
        key: SOCIAL_MEDIA_ICONS.WHATSAPP
    },
    {
        icon: linkedIn,
        onClick: handleLinkedIn,
        key:SOCIAL_MEDIA_ICONS.LINKEDIN
    },
    {
        icon: "",
        onClick: handleTwitter,
        key: SOCIAL_MEDIA_ICONS.TWITTER
    },
    {
        icon: pinterest,
        onClick: () => {},
        key: SOCIAL_MEDIA_ICONS.PINTEREST,
    }

]

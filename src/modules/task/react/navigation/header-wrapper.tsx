"use client";

import {Header, type HeaderProps} from "@/ui/header";
import {FiBell, FiSettings} from "react-icons/fi";

export const HeaderWrapper = () => {
    return <Header {...defaultHeaderConfig} />;
};

const defaultHeaderConfig: HeaderProps = {
    user: {
        avatarSrc: "/random-guy.jpeg",
        name: "Markus"
    },
    searchPlaceholder: "Start searching here...",
    actions: [
        {
            icon: FiSettings
        },
        {
            icon: FiBell
        }
    ]
}
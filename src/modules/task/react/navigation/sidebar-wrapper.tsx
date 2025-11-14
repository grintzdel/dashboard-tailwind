"use client";

import {Sidebar, type SidebarProps} from "@/ui/sidebar";
import {FiBarChart2, FiCheckCircle, FiClipboard, FiClock, FiGrid, FiHome, FiMail} from "react-icons/fi";
import {AiFillRocket} from "react-icons/ai";

export const SidebarWrapper = () => {
    return <Sidebar {...defaultSidebarConfig} />;
};

const defaultSidebarConfig: SidebarProps = {
    branding: {
        logoSrc: "/logo-sidebar.png",
        logoAlt: "InsightHub Logo",
        title: "InsightHub"
    },
    menuItems: [
        {
            type: "link",
            icon: FiGrid,
            text: "Dashboard",
            href: "/"
        },
        {
            type: "menu",
            icon: FiBarChart2,
            text: "Inboxs",
            children: [
                {
                    type: "link",
                    icon: FiMail,
                    text: "Mails",
                    href: "/inboxs/mails"
                }
            ]
        },
        {
            type: "menu",
            icon: AiFillRocket,
            text: "Performances",
            children: [
                {
                    type: "link",
                    icon: AiFillRocket,
                    text: "Truc",
                    href: "/performances/truc"
                }
            ]
        },
        {
            type: "menu",
            icon: FiClipboard,
            text: "Projects",
            children: [
                {
                    type: "link",
                    icon: FiClock,
                    text: "Active Project",
                    href: "/projects/active-project"
                },
                {
                    type: "link",
                    icon: FiCheckCircle,
                    text: "Project Done",
                    href: "/projects/project-done"
                },
                {
                    type: "link",
                    icon: FiClock,
                    text: "Project On Hold",
                    href: "/projects/project-on-hold"
                }
            ]
        },
        {
            type: "menu",
            icon: FiBarChart2,
            text: "Employee Tasks",
            children: [
                {
                    type: "link",
                    icon: FiMail,
                    text: "Mails",
                    href: "/employee-tasks/mails"
                }
            ]
        },
        {
            type: "menu",
            icon: FiBarChart2,
            text: "Absence",
            children: [
                {
                    type: "link",
                    icon: FiMail,
                    text: "Mails",
                    href: "/absence/mails"
                }
            ]
        },
        {
            type: "menu",
            icon: FiBarChart2,
            text: "Analytics",
            children: [
                {
                    type: "link",
                    icon: FiMail,
                    text: "Mails",
                    href: "/analytics/mails"
                }
            ]
        },
        {
            type: "link",
            icon: FiHome,
            text: "Client List",
            href: "/client-list"
        },
        {
            type: "link",
            icon: FiHome,
            text: "Notification",
            href: "/notification"
        },
        {
            type: "link",
            icon: FiHome,
            text: "Help Center",
            href: "/help-center"
        }
    ]
}
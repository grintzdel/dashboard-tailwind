"use client";

import React, {JSX} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {IconType} from "react-icons";
import {
    FiHome,
    FiBarChart2,
    FiClipboard,
    FiMail,
    FiClock,
    FiCheckCircle,
    FiGrid
} from "react-icons/fi";
import {AiFillRocket} from "react-icons/ai";
import {Breadcrumb} from "@/ui/breadcrumb";

type SidebarLinkProps = {
    icon: IconType;
    text: string;
    href: string;
    iconColor?: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
                                                     icon: Icon,
                                                     text,
                                                     href,
                                                     iconColor = "text-gray-500"
                                                 }: SidebarLinkProps): JSX.Element => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li>
            <Link
                className={`flex flex-row gap-2 items-center text-sm py-2 px-3 rounded-md transition-colors ${
                    isActive ? "text-gray-700 font-medium" : "text-gray-500 hover:text-gray-700"
                }`}
                href={href}
            >
                <Icon className={`w-4 h-4 ${iconColor}`}/>
                {text}
            </Link>
        </li>
    )
}

type SidebarMenuProps = {
    icon: IconType;
    text: string;
    href?: string;
    children?: React.ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
                                                     icon: Icon,
                                                     text,
                                                     href,
                                                     children
                                                 }: SidebarMenuProps): JSX.Element => {
    const pathname = usePathname();
    const isActive = href ? pathname === href : false;

    const hasActiveChild = React.Children.toArray(children).some((child: any) => {
        if (child?.props?.href) {
            return pathname === child.props.href;
        }
        return false;
    });

    const shouldBeOpen = isActive || hasActiveChild;

    if (!children) {
        return (
            <Link
                className={`flex flex-row gap-3 items-center py-2 px-3 rounded-lg transition-all ${
                    isActive
                        ? "bg-[#1b58f5] text-white"
                        : "bg-[#f5f6f8] text-gray-800 hover:bg-[#dfeaf6]"
                }`}
                href={href || "#"}
            >
                <div className={`rounded-full p-3 ${isActive ? "bg-[#e1ecf8]" : "bg-[#fbfbf8]"}`}>
                    <Icon className="w-[15px] h-[15px] text-[#1858f5]"/>
                </div>
                <span className="font-medium">{text}</span>
            </Link>
        )
    }

    return (
        <details className="group" open={shouldBeOpen} suppressHydrationWarning>
            <summary
                className={`flex flex-row gap-3 items-center py-2 px-3 rounded-lg cursor-pointer list-none transition-all ${
                    isActive
                        ? "bg-[#1b58f5] text-white"
                        : "bg-[#f5f6f8] text-gray-800 hover:bg-[#dfeaf6]"
                }`}
            >
                <div className={`rounded-full p-3 ${isActive ? "bg-[#e1ecf8]" : "bg-[#fbfbf8]"}`}>
                    <Icon className="w-[15px] h-[15px] text-[#1858f5]"/>
                </div>
                <span className="font-medium flex-1">{text}</span>
                <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
            </summary>
            <nav className="mt-2 ml-7 pl-3 border-l-2 border-gray-300">
                <ul className="space-y-1 py-2">
                    {children}
                </ul>
            </nav>
        </details>
    )
}

type MenuItemLink = {
    type: "link";
    icon: IconType;
    text: string;
    href: string;
}

type MenuItemMenu = {
    type: "menu";
    icon: IconType;
    text: string;
    href?: string;
    children?: MenuItemLink[];
}

type MenuItem = MenuItemLink | MenuItemMenu;

type SidebarMenusListProps = {
    items: MenuItem[];
}

const SidebarMenusList: React.FC<SidebarMenusListProps> = ({items}: SidebarMenusListProps): JSX.Element => {
    return (
        <div className="space-y-2">
            {items?.map((item, index) => {
                if (item.type === "link") {
                    return (
                        <SidebarMenu
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            href={item.href}
                        />
                    );
                }

                return (
                    <SidebarMenu
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        href={item.href}
                    >
                        {item.children?.map((child, childIndex) => (
                            <SidebarLink
                                key={childIndex}
                                icon={child.icon}
                                text={child.text}
                                href={child.href}
                            />
                        ))}
                    </SidebarMenu>
                );
            })}
        </div>
    )
}

type SidebarBrandingProps = {
    logoSrc: string;
    logoAlt: string;
    title: string;
}

const SidebarBranding: React.FC<SidebarBrandingProps> = ({
                                                             logoSrc,
                                                             logoAlt,
                                                             title
                                                         }: SidebarBrandingProps): JSX.Element => {
    return (
        <div className="flex flex-row gap-3 items-center">
            {logoSrc && (
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={40}
                    height={40}
                    className="rounded-lg"
                />
            )}
            <h1 className="text-1xl font-bold text-gray-800">{title}</h1>
        </div>
    )
}

type SidebarProps = {
    branding: SidebarBrandingProps;
    menuItems: MenuItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({branding, menuItems}: SidebarProps): JSX.Element => {
    return (
        <aside className="w-64 h-screen bg-[#f5f6f8] p-6 fixed left-0 top-0 overflow-y-auto">
            <div className="flex flex-col gap-6">
                <SidebarBranding {...branding} />

                <div>
                    <Breadcrumb/>
                </div>

                <div>
                    <SidebarMenusList items={menuItems}/>
                </div>
            </div>
        </aside>
    )
}

export const defaultSidebarConfig: SidebarProps = {
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
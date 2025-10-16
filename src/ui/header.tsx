import React, {JSX} from "react";
import {Avatar} from "@/ui/avatar";
import {Input} from "@/ui/input";
import {FiSettings, FiBell} from "react-icons/fi";


type UserInfoProps = {
    avatarSrc: string;
    name: string;
}

const UserInfo: React.FC<UserInfoProps> = ({avatarSrc, name}: UserInfoProps): JSX.Element => {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex flex-row gap-5 items-center">
            <Avatar src={avatarSrc} alt={`${avatarSrc} Avatar`} width={40} height={40} className="h-13 w-13"/>
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-800">Hey, {name}</h2>
                <p className="text-sm text-gray-500">{today}</p>
            </div>
        </div>
    )
}

type SearchSectionProps = {
    placeholder?: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({placeholder}: SearchSectionProps): JSX.Element => {
    return (
        <div className="w-80">
            <Input placeholder={placeholder}/>
        </div>
    )
}

type ActionButtonProps = {
    icon: React.ComponentType<{ className?: string }>;
    onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({icon: Icon, onClick}: ActionButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
            <Icon className="w-5 h-5 text-gray-600"/>
        </button>
    )
}

type HeaderAction = {
    icon: React.ComponentType<{ className?: string }>;
    onClick?: () => void;
}

type HeaderActionsProps = {
    searchPlaceholder?: string;
    actions: HeaderAction[];
}

const HeaderActions: React.FC<HeaderActionsProps> = ({searchPlaceholder, actions}: HeaderActionsProps): JSX.Element => {
    return (
        <div className="flex flex-row gap-5 items-center">
            <SearchSection placeholder={searchPlaceholder}/>
            {actions.map((action, index) => (
                <ActionButton key={index} icon={action.icon} onClick={action.onClick}/>
            ))}
        </div>
    )
}

type HeaderProps = {
    user: UserInfoProps;
    searchPlaceholder?: string;
    actions: HeaderAction[];
}

export const Header: React.FC<HeaderProps> = ({user, searchPlaceholder, actions}: HeaderProps): JSX.Element => {
    return (
        <header className="h-20 bg-[#f5f6f8] fixed top-0 right-0 left-64 z-10 px-8">
            <div className="h-full flex flex-row justify-between items-center">
                <UserInfo {...user} />
                <HeaderActions searchPlaceholder={searchPlaceholder} actions={actions}/>
            </div>
        </header>
    )
}

export const defaultHeaderConfig: HeaderProps = {
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
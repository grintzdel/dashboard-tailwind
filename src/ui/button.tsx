import Link from "next/link";
import React, {JSX} from "react";
import {IconType} from "react-icons";

export type ButtonProps = {
    buttonHref: string
    buttonText: string
}

export type ButtonActionProps = {
    icon: IconType;
    onClick?: () => void;
    ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({buttonHref, buttonText}: ButtonProps): JSX.Element => {
    return (
        <Link href={buttonHref}
              className="text-white px-6 py-2 max-w-fit bg-[#1b58f5] text-sm rounded-full flex justify-center items-center text-center capitalize hover:bg-[#1448d1] transition-colors duration-200">{buttonText}</Link>
    )
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
                                                              icon: Icon,
                                                              onClick,
                                                              ariaLabel
                                                          }: ButtonActionProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
            <Icon className="w-5 h-5"/>
        </button>
    )
}
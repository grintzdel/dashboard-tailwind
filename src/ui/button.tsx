import Link from "next/link";
import React, {JSX} from "react";

export type ButtonProps = {
    buttonHref: string
    buttonText: string
}

export const Button: React.FC<ButtonProps> = ({buttonHref, buttonText}: ButtonProps): JSX.Element => {
    return (
        <Link href={buttonHref}
              className="text-white px-5 py-3 max-w-fit bg-[#1b58f5] text-sm rounded-full flex justify-center items-center text-center capitalize hover:bg-[#1448d1] transition-colors duration-200">{buttonText}</Link>
    )
}
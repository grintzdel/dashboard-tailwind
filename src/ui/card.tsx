import React, {JSX} from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({children, className}: CardProps): JSX.Element => {
    return (
        <div className={`bg-[#f9fafb] rounded-2xl p-5 shadow-sm ${className || ""}`}>
            {children}
        </div>
    )
}
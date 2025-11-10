import React, {JSX} from "react";
import Image from "next/image";

type AvatarProps = {
    src: string;
    alt: string;
    className?: string
}

export type AvatarsListProps = {
    children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({src, alt, className = ""}: AvatarProps): JSX.Element => {
    return (
        <Image src={src} alt={alt} width={10} height={10}
               className={`object-cover rounded-full border border-white ${className}`}/>
    )
}

export const AvatarsList = ({children}: AvatarsListProps): JSX.Element => {
    return (
        <div className="flex flex-row -space-x-2">
            {children}
        </div>
    )
}
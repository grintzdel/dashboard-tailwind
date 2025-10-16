import React, {JSX} from "react";
import Image from "next/image";

type AvatarProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string
}

export const Avatar: React.FC<AvatarProps> = ({src, alt, width, height, className = ""}: AvatarProps): JSX.Element => {
    return (
        <Image src={src} alt={alt} width={width} height={height} className={`object-cover rounded-full ${className}`}/>
    )
}
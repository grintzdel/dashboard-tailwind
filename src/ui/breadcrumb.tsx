"use client";

import React, {JSX} from "react";
import {usePathname} from "next/navigation";

export const Breadcrumb: React.FC = (): JSX.Element => {
    const pathname = usePathname();

    const generateBreadcrumb = (path: string): string => {
        if (path === "/" || path === "") {
            return "Dashboard";
        }

        const segments = path.substring(1).split("/");

        return segments
            .map(segment => {
                return segment
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
            })
            .join(" / ");
    };

    const breadcrumbText = generateBreadcrumb(pathname);

    return (
        <h5 className="text-[#b2b4b3] font-medium">
            {breadcrumbText}
        </h5>
    )
}
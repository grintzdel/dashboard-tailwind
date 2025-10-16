import React, {JSX} from "react";
import {IconType} from "react-icons";
import {Card} from "@/ui/card";
import {ButtonAction} from "@/ui/button";
import {MdOutlineFullscreen} from "react-icons/md";

type Children = {
    children: React.ReactNode;
}

type StatsTileProps = {
    statsTileTitle: string;
    icon: IconType;
    value: string;
}

type StatsTilesContainerProps = Children;

const StatTileButton: React.FC = (): JSX.Element => {
    const handleExpand = () => {
        console.log("Expand clicked");
    };
    return (
        <ButtonAction
            icon={MdOutlineFullscreen}
            onClick={handleExpand}
            ariaLabel="Expand chart"
        />
    )
}

export const StatTile: React.FC<StatsTileProps> = ({
                                                       statsTileTitle,
                                                       icon: Icon,
                                                       value
                                                   }: StatsTileProps): JSX.Element => {

    return (
        <Card className="flex flex-col gap-5 flex-1 min-w-fit">
            <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-row justify-between gap-4">
                    <h4 className="font-medium text-gray-500 text-sm">{statsTileTitle}</h4>
                    <StatTileButton/>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex justify-center items-center rounded-full border-1 border-gray-200 p-1">
                        <Icon className="h-5 w-5"/>
                    </div>
                    <span className="text-2xl font-bold">{value}</span>
                </div>
            </div>
        </Card>
    )
}

export const StatsTilesContainer: React.FC<StatsTilesContainerProps> = ({children}: StatsTilesContainerProps): JSX.Element => {
    return (
        <div className="flex flex-wrap gap-5 mt-10 mb-10">
            {children}
        </div>
    )
}
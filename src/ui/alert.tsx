import React, {JSX} from "react";
import {Card} from "@/ui/card";
import {Button} from "@/ui/button";
import {IconType} from "react-icons";

type AlertProps = {
    icon: IconType;
    title: string;
    text: string;
    buttonHref: string;
    buttonText: string;
}

export const Alert: React.FC<AlertProps> = ({
                                                icon: Icon,
                                                title,
                                                text,
                                                buttonHref,
                                                buttonText
                                            }: AlertProps): JSX.Element => {
    return (
        <Card className="py-6 w-full">
            <div className="flex flex-col justify-between gap-4 items-center lg:flex-row">
                <div className="flex flex-row gap-4 items-center">
                    <div className="bg-black p-3 flex items-center justify-center rounded-full flex-shrink-0">
                        <Icon className="text-white w-6 h-6"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-600">{text}</p>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <Button buttonHref={buttonHref} buttonText={buttonText}/>
                </div>
            </div>
        </Card>
    )
}
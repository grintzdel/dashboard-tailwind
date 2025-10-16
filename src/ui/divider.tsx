import React, {JSX} from "react";

type DividerProps = {
    axis?: 'vertical' | 'horizontal';
    color?: string;
    width?: 'full' | 'regular' | 'small';
}

export const Divider: React.FC<DividerProps> = ({
                                                    axis = 'horizontal',
                                                    color = 'bg-black',
                                                    width = 'regular'
                                                }: DividerProps): JSX.Element => {
    const isVertical = axis === 'vertical';

    const widthMap = {
        'full': isVertical ? 'h-full' : 'w-full',
        'regular': isVertical ? 'h-16' : 'w-16',
        'small': isVertical ? 'h-4' : 'w-4'
    };

    const thicknessClass = isVertical ? 'w-px' : 'h-px';
    const widthClass = widthMap[width];

    return (
        <div className={`${thicknessClass} ${widthClass} ${color}`}/>
    )
}
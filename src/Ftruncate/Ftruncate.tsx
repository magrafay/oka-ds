import React from 'react';
import { truncateMiddle } from '../assets/js/_helper';

enum FtruncateTextPlacementEnums {
    bottom = "bottom",
    bottomStart = "bottom-start",
    bottomEnd = "bottom-end"
}

interface FtruncateTextProps {
    text: any;
    tooltip?: any;
    style?: any;
    width?: number;
    length?: number;
    hideArrow?: any;
    placement?: any;
    className?: any;
    children?: any;

}

export const FTruncateText = ({
    text,
    tooltip,
    style,
    width,
    length,
    className,
    placement = FtruncateTextPlacementEnums,
    children,
}: FtruncateTextProps) => {

    return (
        <div className={`f-truncate-text ${className} f-placement-${placement}`} title={`${text}`} style={{ ...style }}>
            <span style={{ maxWidth: width, width: "100%" }}>{truncateMiddle(text)}</span>
        </div>

    );
}
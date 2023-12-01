import React, { FC } from "react";
import {gql} from "graphql-request";



export const HEADING_BLOCK_ATTRIBUTES = gql`
  fragment HeadingBlockAttributes on CoreHeadingBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    level
    style
    textAlign
    textColor
  }
`;

function getClassName(textAlign: string): string {
    if (textAlign === "center" || textAlign === "right") {
        return `text-${textAlign}`;
    }

    return "text-left";
}

interface HeadingBlockProps {
    align: string;
    anchor: string;
    backgroundColor: string;
    className: string;
    content: string;
    level: number;
    style: string;
    textAlign: string;
    textColor: string;
}

const HeadingBlock: FC<HeadingBlockProps> = ({
                                                 align,
                                                 anchor,
                                                 backgroundColor,
                                                 className,
                                                 content,
                                                 level,
                                                 style,
                                                 textAlign,
                                                 textColor,
                                             }) => {
    const tag = `h${level}`;

    return React.createElement(
        tag,
        {
            className: getClassName(textAlign),
        },
        content
    );
}

export default HeadingBlock;
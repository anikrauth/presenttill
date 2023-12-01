import React, { FC } from "react";
import {gql} from "graphql-request";



export const BUTTON_BLOCK_ATTRIBUTES = gql`
  fragment ButtonBlockAttributes on CoreButtonsBlockAttributes {
            align
            anchor
            fontSize
            style
            layout
  }
`;

function getClassName(align: string): string {
    if (align === "center" || align === "right") {
        return `text-${align}`;
    }

    return "text-left";
}

interface ButtonBlockProps {
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

const ButtonBlock: FC<ButtonBlockProps> = ({
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
    const tag = `h${align}`;

    return React.createElement(
        tag,
        {
            className: getClassName(align),
        },
        content
    );
}

export default ButtonBlock;
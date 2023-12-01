import {gql } from "graphql-request";
import parseHtml from "@/lib/Parser";

interface ParagraphBlockAttributes {
    align: string;
    anchor: string;
    backgroundColor: string;
    className: string;
    content: string;
    dropCap: boolean;
    style: string;
    textColor: string;
}

export const PARAGRAPH_BLOCK_ATTRIBUTES = gql`
  fragment ParagraphBlockAttributes on CoreParagraphBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    dropCap
    style
    textColor
  }
`;

function getClassName(align: string): string {
    if (align === "center" || align === "right") {
        return `text-${align}`;
    }

    return "text-left";
}

export default function ParagraphBlock({
                                           align,
                                           anchor,
                                           backgroundColor,
                                           className,
                                           content,
                                           dropCap,
                                           style,
                                           textColor,
                                       }: ParagraphBlockAttributes): JSX.Element {
    return <p className={getClassName(align)}>{parseHtml(content)}</p>;
}
import { gql } from "graphql-request";
import React, { FC } from 'react';
import HeadingBlock, { HEADING_BLOCK_ATTRIBUTES } from "@/components/Blocks/HeadingBlock";
import ParagraphBlock, { PARAGRAPH_BLOCK_ATTRIBUTES } from "@/components/Blocks/ParagraphBlock";
import ButtonBlock, { BUTTON_BLOCK_ATTRIBUTES } from "@/components/Blocks/ButtonBlock";


interface BlockProps {
    block: {
        attributes: any;
        name: string;
        innerBlocks?: any[];
    };
}

export const BLOCKS_FIELD = gql`
  fragment BlocksField on Post {
    blocks {
      name
      ... on CoreHeadingBlock {
        attributes {
          ... on CoreHeadingBlockAttributes {
            ...HeadingBlockAttributes
          }
        }
      }
      ... on CoreParagraphBlock {
        attributes {
          ... on CoreParagraphBlockAttributes {
            ...ParagraphBlockAttributes
          }
        }
      }
      
      ... on CoreButtonsBlock {
        attributes {
          ... on CoreButtonsBlockAttributes {
            ...ButtonBlockAttributes
          }
        }
      }
      
      # TODO: Add fragments for all other block types here.
    }
  }
  ${HEADING_BLOCK_ATTRIBUTES}
  ${PARAGRAPH_BLOCK_ATTRIBUTES}
  ${BUTTON_BLOCK_ATTRIBUTES}
`;

const Block: FC<BlockProps> = ({ block }) => {
    const { attributes, name } = block;

    switch (name) {
        // TODO: Add support for these commented-out blocks.
        // case 'core/quote':
        //   return <QuoteBlock {...attributes} key={index} />
        // case 'core/pullquote':
        //   return <PullQuoteBlock {...attributes} key={index} />
        // case 'core/code':
        // case 'core/preformatted':
        //   return <CodeBlock {...attributes} key={index} />
        // case 'core/embed':
        //   return <EmbedBlock {...attributes} key={index} />
        // case 'core/media-text':
        //   return <MediaTextBlock media={attributes} innerBlocks={innerBlocks} key={index} />
        case 'core/button':
          return <ButtonBlock {...attributes}  />
        // case 'core/buttons':
        //   return <ButtonsBlock options={attributes} innerBlocks={innerBlocks} key={index} />
        // case 'core/columns':
        //   return <ColumnsBlock columns={attributes} innerBlocks={innerBlocks} key={index} />
        // case 'core/cover':
        //   return <CoverBlock media={attributes} innerBlocks={innerBlocks} key={index} />
        case "core/heading":
            return <HeadingBlock {...attributes} />;
        // case 'core/image':
        //   return <ImageBlock {...attributes} key={index} />
        // case 'core/gallery':
        //   return <ImageGalleryBlock {...attributes} key={index} />
        // case 'core/table':
        //   return <TableBlock {...attributes} key={index} />
        // case 'core/list':
        //   return <ListBlock {...attributes} key={index} />
        case "core/paragraph":
            return <ParagraphBlock {...attributes} />;
        // case 'core/separator':
        //   return <SeparatorBlock {...attributes} key={index} />
        // case 'core/spacer':
        //   return <SpacerBlock {...attributes} key={index} />
        default:
            return null;
    }
}

export default Block;
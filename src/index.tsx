import { Fragment } from "react";

import { Box, Newline, Text } from "ink";
import { marked } from "marked";
import TerminalRenderer from "marked-terminal";

import type {
  ActionsBlock,
  ContextBlock,
  ImageBlock,
  ImageElement,
  KnownBlock,
  MrkdwnElement,
  PlainTextElement,
  RichTextBlock,
  RichTextElement,
  RichTextSection,
  SectionBlock,
} from "@slack/types";

type Flatten<T> = T extends (infer U)[] ? U : never;

// setup TerminalRenderer
marked.use({ mangle: false, headerIds: false });
marked.setOptions({ renderer: new TerminalRenderer() });

// Actually, children should be KnownBlock but I accept Block here
export function Slack({ children }: { children: KnownBlock[] }) {
  return <>{children.map((e, i) => convertBlock(`blocks-${i}`, e))}</>;
}
export function slack2Ink({ blocks }: { blocks: KnownBlock[] }) {
  return () => Slack({ children: blocks });
}

export function convertBlock(key: string, block: KnownBlock): JSX.Element {
  switch (block.type) {
    case "actions":
      return (
        <Fragment key={key}>
          {block.elements.map((e, i) => convertActionElement(`${key}-actions-elements-${i}`, e))}
        </Fragment>
      );
    case "context":
      return (
        <Fragment key={key}>
          {block.elements.map((e, i) => convertElement(`${key}-contexts-elements-${i}`, e))}
        </Fragment>
      );
    case "divider":
      return <Text key={key}>────────────────────────────────────────────────────────────────────────────────</Text>;
    case "file":
      return <Text key={key}>(file block is not yet supported)</Text>;
    case "header":
      // larger is difficult
      return (
        <Text key={key} bold>
          {block.text.text}
        </Text>
      );
    case "image":
      return convertImage(key, block);
    case "input":
      return <Text key={key}>(input block is not yet supported)</Text>;
    case "rich_text":
      return (
        <Fragment key={key}>
          {block.elements.map((e, i) => convertRichText(`${key}-rich_text-elements-${i}`, e))}
        </Fragment>
      );
    case "section":
      return (
        <Fragment key={key}>
          {convertElement(`${key}-section-text`, block.text)}
          {convertFields(`${key}-section-fields`, block.fields)}
          {convertActionElement(`${key}-section-accessory`, block.accessory)}
        </Fragment>
      );
    case "video":
      return <Text key={key}>(video block is not yet supported)</Text>;
    default:
      const never: never = block;
      throw new Error(`unknown block type: ${never}`);
  }
}

export function convertActionElement(
  key: string,
  element: Flatten<ActionsBlock["elements"]> | SectionBlock["accessory"]
): JSX.Element | undefined {
  if (typeof element === "undefined") return undefined;

  // check image_url just to omit Action in types
  if (element.type === "image" && "image_url" in element) return convertImage(key, element);

  return <Text key={key}>(actions are not yet supported)</Text>;
}

export function convertFields(key: string, fields: SectionBlock["fields"]): JSX.Element | undefined {
  if (typeof fields === "undefined") return;

  return (
    <Box key={key}>
      {fields.map((e, i) => (
        <Text key={`${key}-${i}`}>(fields are not yet supported)</Text>
      ))}
    </Box>
  );
}

export function convertElement(
  key: string,
  element: Flatten<ContextBlock["elements"]> | SectionBlock["text"]
): JSX.Element | undefined {
  if (typeof element === "undefined") return;

  switch (element.type) {
    case "image":
      return convertImage(key, element);
    case "mrkdwn":
      return convertText(key, element);
    case "plain_text":
      return convertText(key, element);
    default:
      const never: never = element;
      throw new Error(`unknown element type: ${JSON.stringify(never)}`);
  }
}

export function convertRichText(key: string, element: Flatten<RichTextBlock["elements"]>): JSX.Element {
  switch (element.type) {
    case "rich_text_list":
      return (
        <Text key={key}>
          {element.elements.map((e, i) => (
            //TODO: tell convertRichTextSection to use bullet
            <Fragment key={`${key}-${i}`}>
              <Text key={`${key}-${i}-text`}>* {convertRichTextSection(`${key}-${i}-sections`, e)}</Text>
              <Newline />
            </Fragment>
          ))}
        </Text>
      );
    case "rich_text_section":
      return <Text key={key}>{element.elements.map((e, i) => convertRichTextElement(`${key}-${i}`, e))}</Text>;
    case "rich_text_preformatted":
      return <Text key={key}>{`(${element.type} is not yet supported)`}</Text>;
    case "rich_text_quote":
      //TODO: tell convertRichTextSection to use quote
      return (
        <Text key={key}>
          {">"} {element.elements.map((e, i) => convertRichTextElement(`${key}-${i}`, e))}
        </Text>
      );
  }
}

export function convertRichTextSection(key: string, element: RichTextSection): JSX.Element[] {
  return element.elements.map((e, i) => convertRichTextElement(`${key}-${i}`, e));
}

export function convertRichTextElement(key: string, element: RichTextElement): JSX.Element {
  const text: string | undefined =
    element.type === "channel"
      ? `#${element.channel_id}`
      : element.type === "emoji"
      ? `:${element.name}:`
      : element.type === "link"
      ? element.url
      : element.type === "text"
      ? element.text
      : element.type === "user"
      ? `@${element.user_id}`
      : element.type === "usergroup"
      ? `@${element.usergroup_id}`
      : undefined;

  return (
    <Text key={key} bold={element.style?.bold} italic={element.style?.italic} strikethrough={element.style?.strike}>
      {text!}
    </Text>
  );
}

export function convertImage(key: string, element: ImageBlock | ImageElement): JSX.Element {
  return <Text key={key}>(image is not yet supported)</Text>;
}

export function convertText(key: string, element: PlainTextElement | MrkdwnElement): JSX.Element {
  return element.type === "mrkdwn" ? (
    <Text key={key}>{marked(element.text.replace(/<(.+?)\|(.+?)>/g, (_, r1, r2) => `[${r2}](${r1})`))}</Text>
  ) : (
    <Text key={key}>{element.text}</Text>
  );
}

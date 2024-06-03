import { Fragment } from "react";

import { Box, Text } from "ink";
import { marked } from "marked";
import TerminalRenderer from "marked-terminal";

import type {
  Action,
  ActionsBlock,
  Button,
  Checkboxes,
  Datepicker,
  ImageElement,
  KnownBlock,
  MrkdwnElement,
  MultiSelect,
  Overflow,
  PlainTextElement,
  RadioButtons,
  SectionBlock,
  Select,
  Timepicker,
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
      return <Text key={key}>(image block is not yet supported)</Text>;
    case "input":
      return <Text key={key}>(input block is not yet supported)</Text>;
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
  element: Flatten<ActionsBlock["elements"]> | undefined,
): JSX.Element | undefined {
  if (typeof element === "undefined") return undefined;

  return <Text key={key}>(actions are not yet supported)</Text>;
}

export function convertFields(key: string, fields: SectionBlock["fields"]): JSX.Element | undefined {
  if (typeof fields === "undefined") return;

  return (
    <Box key={key}>
      {fields.map((e, i) => (
        <Text>(fields is not yet supported)</Text>
      ))}
    </Box>
  );
}

export function convertElement(
  key: string,
  element: // Actions
  | Button
    | Checkboxes
    | Datepicker
    | MultiSelect
    | Overflow
    | RadioButtons
    | Select
    | Timepicker
    | Action
    // Elements
    | ImageElement
    | PlainTextElement
    | MrkdwnElement
    | undefined,
): JSX.Element | undefined {
  if (typeof element === "undefined") return;

  if ("text" in element && element.type !== "button") return convertText(key, element);
  if ("image_url" in element) return <Text key={key}>(image is not yet supported)</Text>;

  return <Text key={key}>(unknown element)</Text>;
}

export function convertText(key: string, e: PlainTextElement | MrkdwnElement | undefined): JSX.Element | undefined {
  if (typeof e === "undefined") return;

  return e.type === "mrkdwn" ? (
    <Text key={key}>{marked(e.text.replace(/<(.+?)\|(.+?)>/g, (_, r1, r2) => `[${r2}](${r1})`))}</Text>
  ) : (
    <Text key={key}>{e.text}</Text>
  );
}

import type { RichTextBlock } from "@slack/types";

export const richTextSection: RichTextBlock[] = [
  {
    type: "rich_text",
    elements: [
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: "Hello there, I am a basic rich text block!",
          },
        ],
      },
    ],
  },
  {
    type: "rich_text",
    elements: [
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: "Hello there, ",
          },
          {
            type: "text",
            text: "I am a bold rich text block!",
            style: {
              bold: true,
            },
          },
        ],
      },
    ],
  },
  {
    type: "rich_text",
    elements: [
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: "Hello there, ",
          },
          {
            type: "text",
            text: "I am an italic rich text block!",
            style: {
              italic: true,
            },
          },
        ],
      },
    ],
  },
  {
    type: "rich_text",
    elements: [
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: "Hello there, ",
          },
          {
            type: "text",
            text: "I am a strikethrough rich text block!",
            style: {
              strike: true,
            },
          },
        ],
      },
    ],
  },
];

export const richTextList: RichTextBlock[] = [
  {
    type: "rich_text",
    block_id: "block1",
    elements: [
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: "My favorite Slack features (in no particular order):",
          },
        ],
      },
      {
        type: "rich_text_list",
        elements: [
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "Huddles",
              },
            ],
          },
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "Canvas",
              },
            ],
          },
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "Developing with Block Kit",
              },
            ],
          },
        ],
        style: "bullet",
        indent: 0,
        border: 1,
      },
    ],
  },
];

export const richTextQuote: RichTextBlock[] = [
  {
    type: "rich_text",
    block_id: "Vrzsu",
    elements: [
      {
        type: "rich_text_quote",
        elements: [
          {
            type: "text",
            text: "What we need is good examples in our documentation.",
          },
        ],
      },
      {
        type: "rich_text_section",
        elements: [
          {
            type: "text",
            text: "Yes - I completely agree, Luke!",
          },
        ],
      },
    ],
  },
];

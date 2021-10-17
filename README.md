# ink-slack

render Slack blocks into console

## Install

```console
$ npm install @okitan/ink-slack ink react
```

## Usage

```typescript
import { Slack } from "@okitan/ink-slack";
import { KnownBlock } from "@slack/types";
import { render } from "ink";

const blocks: KnownBlock[] = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "New Paid Time Off request from <example.com|Fred Enriquez>\n\n<https://example.com|View request>",
    },
  },
];

render(<Slack>{blocks}</Slack>); /* => outputed
New Paid Time Off request from Fred Enriquez (example.com)

View request (https://example.com)
*/
```

import { render } from "ink";

import { Slack } from "../src/index.js";
import { exampleJSXBlocks } from "./fixtures/jsxslack.js";

render(<Slack>{exampleJSXBlocks}</Slack>);

/* 
  alternatively
const Example = slack2Ink({ blocks: exampleJSXBlocks });
render(<Example />);
*/

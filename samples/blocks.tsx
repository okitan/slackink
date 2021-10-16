import { render } from "ink";
import React from "react";

import { Slack } from "../src";
import { exampleJSXBlocks } from "./fixtures/jsxslack";

render(<Slack>{exampleJSXBlocks}</Slack>);

/* 
  alternatively
const Example = slack2Ink({ blocks: exampleJSXBlocks });
render(<Example />);
*/

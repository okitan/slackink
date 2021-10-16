import { render } from "ink";
import React from "react";

import { slack2Ink } from "../src";
import { exampleJSXBlocks } from "./fixtures/jsxslack";

const Example = slack2Ink({ blocks: exampleJSXBlocks() });

render(<Example />);

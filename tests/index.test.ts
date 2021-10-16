import React from "react";

import { exampleJSXBlocks } from "../samples/fixtures/jsxslack";
import { slack2Ink } from "../src";

describe(slack2Ink, () => {
  test("works", () => {
    expect(slack2Ink({ blocks: exampleJSXBlocks() })()).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text
              bold={false}
              dimColor={false}
              italic={false}
              strikethrough={false}
              underline={false}
              wrap="wrap"
            >
              Enjoy building blocks!

      &gt; *&lt;https://github.com/yhatt/jsx-slack|jsx-slack&gt;*
      &gt; _Build JSON for Slack Block Kit from JSX_
      &gt; 
            </Text>
          </React.Fragment>
          <Text
            bold={false}
            dimColor={false}
            italic={false}
            strikethrough={false}
            underline={false}
            wrap="wrap"
          >
            (image is not yet supported)
          </Text>
        </React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text
              bold={false}
              dimColor={false}
              italic={false}
              strikethrough={false}
              underline={false}
              wrap="wrap"
            >
              Maintained by &lt;https://github.com/yhatt|Yuki Hattori&gt;
            </Text>
          </React.Fragment>
          <Text
            bold={false}
            dimColor={false}
            italic={false}
            strikethrough={false}
            underline={false}
            wrap="wrap"
          >
            (image is not yet supported)
          </Text>
        </React.Fragment>
        <Text
          bold={false}
          dimColor={false}
          italic={false}
          strikethrough={false}
          underline={false}
          wrap="wrap"
        >
          --------------------------------------------------------------------------------
        </Text>
        <React.Fragment>
          <Text
            bold={false}
            dimColor={false}
            italic={false}
            strikethrough={false}
            underline={false}
            wrap="wrap"
          >
            (actions are not yet supported)
          </Text>
          <Text
            bold={false}
            dimColor={false}
            italic={false}
            strikethrough={false}
            underline={false}
            wrap="wrap"
          >
            (actions are not yet supported)
          </Text>
        </React.Fragment>
      </React.Fragment>
    `);
  });
});

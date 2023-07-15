import { exampleJSXBlocks } from "../samples/fixtures/jsxslack.js";
import { slack2Ink } from "../src/index.js";

describe(slack2Ink, () => {
  test("works", () => {
    expect(slack2Ink({ blocks: exampleJSXBlocks })()).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          <Text>
            [0mEnjoy building blocks![0m

      [0m&gt; [3m[34mjsx-slack ([34m[4mhttps://github.com/yhatt/jsx-slack[24m[39m[34m)[39m[23m[0m
      [0m&gt; [3mBuild JSON for Slack Block Kit from JSX[23m[0m
      [0m&gt; [0m


          </Text>
          <Text>
            (image is not yet supported)
          </Text>
        </React.Fragment>
        <React.Fragment>
          <Text>
            [0mMaintained by [34mYuki Hattori ([34m[4mhttps://github.com/yhatt[24m[39m[34m)[39m[0m


          </Text>
          <Text>
            (image is not yet supported)
          </Text>
        </React.Fragment>
        <Text>
          ────────────────────────────────────────────────────────────────────────────────
        </Text>
        <React.Fragment>
          <Text>
            (actions are not yet supported)
          </Text>
          <Text>
            (actions are not yet supported)
          </Text>
        </React.Fragment>
      </React.Fragment>
    `);
  });
});

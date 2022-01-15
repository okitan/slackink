import { exampleJSXBlocks } from "../samples/fixtures/jsxslack";

const { slack2Ink } = await import("../src");

describe(slack2Ink, () => {
  test("works", () => {
    expect(slack2Ink({ blocks: exampleJSXBlocks })()).toMatchInlineSnapshot(`
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
            [0mEnjoy building blocks![0m

      [0m&gt; [3m[34mjsx-slack ([34m[4mhttps://github.com/yhatt/jsx-slack[24m[39m[34m)[39m[23m[0m
      [0m&gt; [3mBuild JSON for Slack Block Kit from JSX[23m[0m
      [0m&gt; [0m


          </Text>
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
          <Text
            bold={false}
            dimColor={false}
            italic={false}
            strikethrough={false}
            underline={false}
            wrap="wrap"
          >
            [0mMaintained by [34mYuki Hattori ([34m[4mhttps://github.com/yhatt[24m[39m[34m)[39m[0m


          </Text>
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
          ────────────────────────────────────────────────────────────────────────────────
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

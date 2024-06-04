import { exampleJSXBlocks } from "../samples/fixtures/jsxslack.js";
import { richTextList, richTextQuote, richTextSection } from "../samples/fixtures/rich_text.js";
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

describe("converting richTextSection", () => {
  test("works", () => {
    expect(slack2Ink({ blocks: richTextSection })()).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text>
              Hello there, I am a basic rich text block!
            </Text>
          </React.Fragment>
        </React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text>
              Hello there, 
            </Text>
            <Text>
              I am a bold rich text block!
            </Text>
          </React.Fragment>
        </React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text>
              Hello there, 
            </Text>
            <Text>
              I am an italic rich text block!
            </Text>
          </React.Fragment>
        </React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text>
              Hello there, 
            </Text>
            <Text>
              I am a strikethrough rich text block!
            </Text>
          </React.Fragment>
        </React.Fragment>
      </React.Fragment>
    `);
  });
});

describe("converting richTextList", () => {
  test("works", () => {
    expect(slack2Ink({ blocks: richTextList })()).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <Text>
              My favorite Slack features (in no particular order):
            </Text>
          </React.Fragment>
          <Text>
            <Text>
              * 
              <React.Fragment>
                <Text>
                  Huddles
                </Text>
              </React.Fragment>
            </Text>
            <Text>
              * 
              <React.Fragment>
                <Text>
                  Canvas
                </Text>
              </React.Fragment>
            </Text>
            <Text>
              * 
              <React.Fragment>
                <Text>
                  Developing with Block Kit
                </Text>
              </React.Fragment>
            </Text>
          </Text>
        </React.Fragment>
      </React.Fragment>
    `);
  });
});

describe("converting richTextQuote", () => {
  test("works", () => {
    expect(slack2Ink({ blocks: richTextQuote })()).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          <Text>
            &gt;
             
            <Text>
              What we need is good examples in our documentation.
            </Text>
          </Text>
          <React.Fragment>
            <Text>
              Yes - I completely agree, Luke!
            </Text>
          </React.Fragment>
        </React.Fragment>
      </React.Fragment>
    `);
  });
});

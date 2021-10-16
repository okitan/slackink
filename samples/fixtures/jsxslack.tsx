/** @jsxImportSource jsx-slack **/
import { KnownBlock } from "@slack/types";
import JSXSlack, { Actions, Blocks, Button, Context, Divider, Section } from "jsx-slack";

// taken from https://github.com/yhatt/jsx-slack
export const exampleJSXBlocks: KnownBlock[] = JSXSlack(
  <Blocks>
    <Section>
      <p>Enjoy building blocks!</p>
      <blockquote>
        <b>
          <a href="https://github.com/yhatt/jsx-slack">jsx-slack</a>
        </b>
        <br />
        <i>Build JSON for Slack Block Kit from JSX</i>
      </blockquote>
      <img src="https://github.com/yhatt.png" alt="yhatt" />
    </Section>
    <Context>
      Maintained by <a href="https://github.com/yhatt">Yuki Hattori</a>
      <img src="https://github.com/yhatt.png" alt="yhatt" />
    </Context>
    <Divider />
    <Actions>
      <Button url="https://github.com/yhatt/jsx-slack">GitHub</Button>
      <Button url="https://npm.im/jsx-slack">npm</Button>
    </Actions>
  </Blocks>
);

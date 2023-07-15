declare module "marked-terminal" {
  import { Renderer } from "marked";

  declare class TerminalRenderer extends Renderer {
    constructor();
  }

  export = TerminalRenderer;
}

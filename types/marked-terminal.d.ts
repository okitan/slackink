import { Renderer } from "marked";

declare class TerminalRenderer extends Renderer {
  constructor(options?: TerminalRenderer.TerminalRendererOptions);
}

export = TerminalRenderer;

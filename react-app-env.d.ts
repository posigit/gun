/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "lucide-react" {
  import { FC, SVGAttributes } from "react";

  export interface IconProps extends SVGAttributes<SVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type Icon = FC<IconProps>;

  export const X: Icon;
  export const Info: Icon;
  export const RotateCcw: Icon;
  export const CreditCard: Icon;
  export const Shield: Icon;
  export const HelpCircle: Icon;
  export const ExternalLink: Icon;
  // Add other icons as needed
}

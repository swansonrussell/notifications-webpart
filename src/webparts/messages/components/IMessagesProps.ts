import { IIconProps } from "office-ui-fabric-react";

export interface IMessagesProps {
  type: string;
  icon: IIconProps;
  headline: string;
  text: string;
  hasLink: boolean;
  link: string;
  url: string;
}

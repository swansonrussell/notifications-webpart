import { DisplayMode } from '@microsoft/sp-core-library';

export interface IMessagesProps {
  description: string;
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
  text: string;
}

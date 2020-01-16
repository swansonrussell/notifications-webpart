declare interface IMessagesWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  text: string;
  description: string;
  type: string;
  headline: string;
  link: string;
  hasLink: boolean;
  url: string;
}

declare module 'MessagesWebPartStrings' {
  const strings: IMessagesWebPartStrings;
  export = strings;
}

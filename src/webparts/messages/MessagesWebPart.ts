import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown,
  PropertyPaneHorizontalRule
} from '@microsoft/sp-property-pane';

import * as strings from 'MessagesWebPartStrings';
import Messages from './components/Messages';
import { IMessagesProps } from './components/IMessagesProps';

export interface IMessagesWebPartProps {
  text: string;
  description: string;
  type: string;
  headline: string;
  link: string;
  hasLink: boolean;
  url: string;
  isMultiline: boolean;
  isTruncated: boolean;
}

export default class MessagesWebPart extends BaseClientSideWebPart<IMessagesWebPartProps> {
  
  public render(): void {
    const element: React.ReactElement<IMessagesProps > = React.createElement(
      Messages,
      {
        text: this.properties.text,
        type: this.properties.type,
        headline: this.properties.headline,
        link: this.properties.link,
        hasLink: this.properties.hasLink,
        url: this.properties.url,
        isMultiline: this.properties.isMultiline,
        isTruncated: this.properties.isTruncated,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Message Bar',
              groupFields: [
                PropertyPaneDropdown('type', {
                  label: 'Message Type',
                  options: [
                    { key: 'info', text: 'Info' },
                    { key: 'error', text: 'Error' },
                    { key: 'blocked', text: 'Blocked' },
                    { key: 'severeWarning', text: 'Severe Warning' },
                    { key: 'success', text: 'Success' },
                    { key: 'warning', text: 'Warning' }
                  ]
                }),
                PropertyPaneTextField('headline', {
                  label: 'Headline'
                }),
                PropertyPaneTextField('text', {
                  label: 'Message Text',
                  multiline: true,
                  placeholder: "Enter Message here."
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneToggle('isMultiline', {
                  label: 'Multiline',
                  onText: 'Yes',
                  offText: 'No',
                  checked: true,
                }),
                PropertyPaneToggle('isTruncated', {
                  label: 'Collapsed',
                  onText: 'Yes',
                  offText: 'No',
                  disabled: this.properties.isMultiline,
                  checked: true,
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneToggle('hasLink', {
                  label: 'Hyperlink (Optional)',
                  onText: 'Display a link',
                  offText: 'Do not display a link'
                }),
                PropertyPaneTextField('link', {
                  label: 'Link Text',
                  disabled: !this.properties.hasLink
                }),
                PropertyPaneTextField('url', {
                  label: 'Link URL',
                  disabled: !this.properties.hasLink
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

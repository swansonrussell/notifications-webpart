import * as React from 'react';
import styles from './Messages.module.scss';
import { IMessagesProps } from './IMessagesProps';
import { MessageBar, MessageBarType, Link } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text'
import { IFontStyles } from 'office-ui-fabric-react/lib/Styling';

interface ISetting<TType> {
  name: TType;
}

const Variants: ISetting<keyof IFontStyles>[] = [
  { name: 'tiny' },
  { name: 'xSmall' },
  { name: 'small' },
  { name: 'smallPlus' },
  { name: 'medium' },
  { name: 'mediumPlus' },
  { name: 'large' },
  { name: 'xLarge' },
  { name: 'xxLarge' },
  { name: 'mega' }
];

export default class Messages extends React.Component<IMessagesProps, {}> {
  
  constructor(props) {
    super(props);
  }

  public render(): React.ReactElement<IMessagesProps> {
    return (
      <div className={ styles.messages }>
        <div className={ styles.container }>
          <MessageBar
            messageBarType={MessageBarType[this.props.type]}
            isMultiline={this.props.isMultiline}
            dismissButtonAriaLabel="Close"
          >
            <Text
              variant={ Variants[this.props.size].name ? Variants[this.props.size].name : 'small'}
            >
              Testing!
            </Text>
              <b>{ this.props.headline }</b> { this.props.text }
              { this.props.hasLink && 
                <>
                  <Link href={ this.props.url } target="_blank">
                    { this.props.link }
                  </Link>
                </>
              }
          </MessageBar>
          
        </div>
      </div>
    );
  }
}

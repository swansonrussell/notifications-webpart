import * as React from 'react';
import styles from './Messages.module.scss';
import { IMessagesProps } from './IMessagesProps';
import { MessageBar, MessageBarType, Link } from 'office-ui-fabric-react';

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
              isMultiline={false}
              dismissButtonAriaLabel="Close"
          >
            <b>{ this.props.headline }</b> { this.props.text }
            { this.props.hasLink && 
              <Link href={ this.props.url } target="_blank">
                 { this.props.link }
              </Link>
            }
          </MessageBar>
        </div>
      </div>
    );
  }
}

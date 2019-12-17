import * as React from 'react';
import styles from './Messages.module.scss';
import { IMessagesProps } from './IMessagesProps';
import { escape } from '@microsoft/sp-lodash-subset';


const notifications = [
  { title: "Info", value: "info" },
  { title: "Notice", value: "notice" },
  { title: "Error", value: "error" },
  { title: "OK", value: "ok" },
  { title: "Warning", value: "warning" }
];
const selectOptions = notifications.map((notification) =>
  <option value={notification.value}>{notification.title}</option>
);

export default class Messages extends React.Component<IMessagesProps, { value: string }> {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  public render(): React.ReactElement<IMessagesProps> {
    return (
      <div className={ styles.messages }>
        <div className={ styles.container }>
          <select value={ this.state.value } onChange={ this.handleChange }>{selectOptions}</select>
          <div>
            <textarea className={ styles[this.state.value] }>

            </textarea>
          </div>

          <div className={ styles[this.state.value] }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

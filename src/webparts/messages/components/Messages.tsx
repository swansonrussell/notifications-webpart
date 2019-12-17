import * as React from 'react';
import styles from './Messages.module.scss';
import { IMessagesProps } from './IMessagesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DisplayMode } from '@microsoft/sp-core-library';


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

    this._onChange = this._onChange.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
  }

  private _onChange(event) {
    // this.props.updateProperty(event.target.value);
    this.setState({value: event.target.value});
  }

  private _onTextChange(event) {
    this.props.updateProperty(event.target.value);
  }

  public render(): React.ReactElement<IMessagesProps> {
    return (
      <div className={ styles.messages }>
        <div className={ styles.container }>
          <select value={ this.state.value } onChange={ this._onChange }>{selectOptions}</select>
          <div>
            {
              this.props.displayMode === DisplayMode.Edit && (
                <textarea className={ styles[this.state.value] } onChange={ this._onTextChange } value={ this.props.text }>
                </textarea>
              )
            }

            {
              this.props.displayMode !== DisplayMode.Edit && (
                <span>{this.props.text}</span>
              )
            }
            
          </div>
        </div>
      </div>
    );
  }
}

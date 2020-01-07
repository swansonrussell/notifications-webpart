import * as React from 'react';
import styles from './Messages.module.scss';
import { IMessagesProps } from './IMessagesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DisplayMode } from '@microsoft/sp-core-library';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

const notifications = [
  { title: "Info", value: "info" },
  { title: "Notice", value: "notice" },
  { title: "Error", value: "error" },
  { title: "OK", value: "ok" },
  { title: "Warning", value: "warning" }
];

const selectOptions = notifications.map((notification) =>
  <option value={ notification.value }>{ notification.title }</option>
);

export default class Messages extends React.Component<IMessagesProps, { value: string, title: string, text: string }> {
  constructor(props) {
    super(props);
    this.state = { value: "", title: "", text: "" };

    this._onChange = this._onChange.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
  }

  private _onChange(event) {
    this.setState({ value: event.target.value });
    let element = notifications.find(element => element.value === event.target.value); //Had to update tsconfig from es5 to es6 to allow Array.prototype.find. Need to change it back to work on IE11. Adapt global Array type polyfill.
    this.setState({ title: element.title });
    console.log(event.target);
  }

  private _onTextChange(event) {
    this.setState({ text: event.target.value });
  }

  public render(): React.ReactElement<IMessagesProps> {
    return (
      <div className={ styles.messages }>
        <div className={ styles.container }>
            {
              this.props.displayMode === DisplayMode.Edit && (
                <>
                  <select value={ this.state.value } onChange={ this._onChange }>{ selectOptions }</select>
                  {/* <Drop */}
                  <div>
                    <TextField label={ this.state.title } multiline rows={ 3 } className={ styles[this.state.value]} onChange={ this._onTextChange } value={ this.state.text }/>
                    {/* <textarea className={ styles[this.state.value] } onChange={ this._onTextChange } value={ this.state.text }></textarea> */}
                  </div>
                </>
              )
            }

            {
              this.props.displayMode !== DisplayMode.Edit && (
                <>
                  <h2>{ this.state.title }</h2>
                  <span className={ styles[this.state.value] }>{ this.state.text }</span>
                </>
              )
            }
        </div>
      </div>
    );
  }
}

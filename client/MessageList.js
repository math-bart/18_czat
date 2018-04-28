import React from 'react';

import styles from './MessageList.css';

const Message = props => {
  if (props.from === props.me) {
    return (
      <div className={styles.MessageMe}>
        <strong>{props.from} :</strong>
        <span>{props.text}</span>
      </div>
    );
  }
  else if (props.from === 'server') {
    return (
      <div >
        <strong>server :</strong>
        <span>{props.text}</span>
      </div>
    );
  }
  else {
    return (
      <div className={styles.MessageElse}>
        <strong>{props.from} :</strong>
        <span>{props.text}</span>
      </div>
    );
  }
}

class MessageList extends React.Component {
  constructor() {
    super();
  }
  componentDidUpdate() {
    let element = this.el;
    if(element.clientHeight < element.scrollHeight) {
      element.scrollTop = element.scrollHeight;
    }
  }
  render() {
    return (
      <div 
        className={styles.MessageList}
        ref={ref => this.el = ref}
      >
        {this.props.messages.map((message, i) => {
          return (
            <Message
              key={i}
              from={message.from}
              text={message.text}
              me={this.props.me}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
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

else {
	return (
  <div className={styles.MessageElse}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
);
}
}
const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
			me={props.me}
          />
        );
      })
    }
  </div>
);

export default MessageList;
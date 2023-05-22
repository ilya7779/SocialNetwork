import message from './../Messages.module.css';

const MessagesText = (props) => {
  return (
    <div className={message.messages__text}>{props.text}</div>
  )
}

export default MessagesText;
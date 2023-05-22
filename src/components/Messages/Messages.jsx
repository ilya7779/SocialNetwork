import React from 'react';
import message from './Messages.module.css';
import {Outlet, Navigate} from "react-router-dom";
import MessagesName from "./MessagesName/MessagesName"
import MessagesText from "./MessagesText/MessagesText";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/messages-reducer";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Messages = (props) => {
  let state = props.messageData;

  let messageNameElements = state.messageNameData
    .map(messageName => <MessagesName name={messageName.name} key={messageName.id} id={messageName.id}/>);

  let messageTextElements = state.messageTextData
    .map(messageText => <MessagesText text={messageText.text} key={messageText.id}/>);

  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Navigate to={"/login"}/>;

  return (
    <div>
      <div className={message.messages}>
        <div className={message.messages__names}>
          {messageNameElements}
        </div>
        <div className={message.messages__texts}>
          <div>{messageTextElements}</div>

        </div>
        <Outlet/>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>

  );
}

export default Messages;
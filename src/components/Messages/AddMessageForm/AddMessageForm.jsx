import {Field, reduxForm} from "redux-form";
import message from "../Messages.module.css";
import React from 'react';
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={Textarea} name={"newMessageBody"}
           validate={[required, maxLength50]} placeholder={"Enter your message"}/>
    <button className={message.messages__addNewMessage}>Submit</button>
  </form>
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
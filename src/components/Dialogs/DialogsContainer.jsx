import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (<Dialogs updateNewMessageBody={onNewMessageChange}
	                 sendMessage={onSendMessageClick}
	                 dialogsPage={props.store.getState().dialogsPage}/>);
};

export default DialogsContainer;
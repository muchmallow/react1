import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				<div>
					{messagesElements}
				</div>
				<div className={classes.sendMessage}>
					<textarea onChange={onNewMessageChange} cols={40} rows={3} value={props.dialogsPage.newMessageBody} placeholder={"Your message"}/>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
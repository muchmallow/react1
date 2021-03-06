import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

	let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
	};

	if(!props.isAuth) return <Redirect to={"/login"}/>;

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				<div>
					{messagesElements}
				</div>
			</div>
            <AddMessageForm onSubmit={addNewMessage}/>
		</div>
	);
};


export default Dialogs;
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import storeContext from "../../storeContext";

const DialogsContainer = (props) => {

	return (<storeContext.Consumer>
			{(store) => {

				let onSendMessageClick = () => {
					store.dispatch(sendMessageCreator());
				};

				let onNewMessageChange = (body) => {
					store.dispatch(updateNewMessageBodyCreator(body));
				};

				return (<Dialogs updateNewMessageBody={onNewMessageChange}
				                 sendMessage={onSendMessageClick}
				                 dialogsPage={store.getState().dialogsPage}/>);
			}
			}
		</storeContext.Consumer>
	);
};

export default DialogsContainer;
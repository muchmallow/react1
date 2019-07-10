const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
	messages: [
		{id: 1, message: "Hi!"},
		{id: 2, message: "How is your business?"},
		{id: 3, message: "Yo!"},
		{id: 4, message: "Grats!"},
		{id: 5, message: "Hilarious!"},
		{id: 6, message: "Good evening!"}
	],
	newMessageBody: "",
	dialogs: [
		{id: 1, name: "Dmitriy"},
		{id: 2, name: "Andrey"},
		{id: 3, name: "Svetlana"},
		{id: 4, name: "Oleg"},
		{id: 5, name: "Yurij"},
		{id: 6, name: "Mick"},
		{id: 7, name: "Evgeniy"}
	]
};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {

		case SEND_MESSAGE:
			let newMessage = {
				id: 7,
				message: state.newMessageBody
			};
			state.messages.push(newMessage);
			state.newMessageBody = "";
			return state;

		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;

		default:
			return state;
	}
};

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE
	};
};
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	};
};

export default dialogsReducer;
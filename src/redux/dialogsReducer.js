const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
	messages: [
		{id: 1, message: "Hi!"},
		{id: 2, message: "How is your business?"},
		{id: 3, message: "Yo!"},
		{id: 4, message: "Grats!"},
		{id: 5, message: "Hilarious!"},
		{id: 6, message: "Good evening!"}
	],
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
		case SEND_MESSAGE: {
			let newMessage = {
				id: 7,
				message: action.newMessageBody
			};
			return {
				...state,
				messages: [...state.messages, newMessage]
			}
		}
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => {
	return {
		type: SEND_MESSAGE,
        newMessageBody
	};
};

export default dialogsReducer;
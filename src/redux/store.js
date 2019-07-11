import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "Hi, how are you?", likeCount: 16},
				{id: 2, message: "It's my first post", likeCount: 20}
			],
			newPostText: "lalala"
		},
		dialogsPage: {
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
		},
		sideNavbar: {
			avatarUrls: [
				{url: "http://ttod.ru/avatar/m/index.php"},
				{url: "http://ttod.ru/avatar/m/index.php"},
				{url: "http://ttod.ru/avatar/m/index.php"}
			]
		}
	},
	_callSubscriber() {
		console.log("State changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action){
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sideNavbar = sidebarReducer(this._state.sideNavbar, action);
		this._callSubscriber(this._state);
	}
};

export default store;
//window.store = store;
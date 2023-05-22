import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profile: {
      posts: [
        {id: 1, message: "Мой пост1", likesCount: 11},
        {id: 2, message: "Мой пост2", likesCount: 21},
        {id: 3, message: "Мой пост3", likesCount: 31},
        {id: 4, message: "Мой пост4", likesCount: 41},
      ],
      newPostText: "Hello",
    },
    messages: {
      messageNameData: [
        {id: '1', name: "Ilya"},
        {id: '2', name: "Anna"},
        {id: '3', name: "Vladislav"},
      ],
      messageTextData: [
        {id: 1, text: "It's me"},
        {id: 2, text: "Hello"},
        {id: 3, text: "Yo"},
      ],
      newMessageBody: ""
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch: function (action) {

    this._state.main.content.profile = profileReducer(this._state.main.content.profile, action);
    this._state.main.content.messages = messagesReducer(this._state.main.content.messages, action);
    this._state.main.sidebar = sidebarReducer(this._state.main.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;
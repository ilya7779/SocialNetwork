const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messageNameData: [
    {id: '1', name: "Ilya"},
    {id: '2', name: "Anna"},
    {id: '3', name: "Vladislav"},
  ],
  messageTextData: [
    {id: 1, text: "It's me"},
    {id: 2, text: "Hello"},
    {id: 3, text: "Yo"},
  ]
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messageTextData: [...state.messageTextData, {id: 4, text: body}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default messagesReducer;
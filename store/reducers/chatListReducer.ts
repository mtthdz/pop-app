import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatRoom {
  chat_room_id: string;
  latest_message: string;
  latest_message_timestamp: string;
  other_user_id: string;
  other_user_name: string;
  other_user_image: string;
}

interface ChatRoomState {
  chatRooms: ChatRoom[];
}

const initialState: ChatRoomState = {
  chatRooms: [],
};

const chatListSlice = createSlice({
  name: 'chatRooms',
  initialState,
  reducers: {
    chatListAdd(state, action: PayloadAction<ChatRoom[]>) {
      state.chatRooms = action.payload;
    },
    chatListDelete(state) {
      state.chatRooms = [];
    }
  }
});

export const { chatListAdd, chatListDelete } = chatListSlice.actions;
export default chatListSlice.reducer;
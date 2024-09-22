import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the state for mail
export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: "", // Holds the currently selected mail
    sendMessageIsOpen: false, // Indicates if the send message modal is open
  },

  reducers: {
    // Action to select a mail
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    // Action to open the send message modal
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    // Action to close the send message modal
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

// Export actions for use in components
export const { 
    openSendMessage, 
    closeSendMessage, 
    selectMail 
} = mailSlice.actions;

// Selectors to access state values
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

// Export the reducer to be used in the store
export default mailSlice.reducer;

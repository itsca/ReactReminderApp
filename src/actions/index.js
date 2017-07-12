import {ADD_REMINDER} from '../constants/constants.js';
import {DELETE_REMINDER} from '../constants/constants.js';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text: text
  }
  //console.log('action in addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleteting in actions', action);
  return action;
}

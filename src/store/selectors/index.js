import { get } from 'lodash';

export const getUserName = (state) => get(state, 'link.firebaseUserData.displayName', '');
export const getWheelId = (state) => get(state, 'link.profileData.wheel_id', '');
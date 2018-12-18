import { get } from 'lodash';
import { wheelsRef, profilesRef, usernamesRef } from '../../config/fbConfig';
import C from '../../constants';

export const fetchCurrentWheelData = (wheelId) => (dispatch, getState) => {
    if (!wheelId) return;
    console.log('fetchCurrentWheelData');

    wheelsRef.child(wheelId).on('value', (snap) => {
        console.log('current action', snap.val());
        const currentStats = get(snap.val(), 'current', {});
        const tripStats = get(snap.val(), 'trip', {});
        dispatch({
            type: C.CURRENT_STATS,
            result: currentStats
        });
        dispatch({
            type: C.TRIP_STATS, 
            result: tripStats
        });
    });
}

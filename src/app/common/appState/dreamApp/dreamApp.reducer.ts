
import { DreamAppState } from 'app/common/appState/dreamApp/dreamApp.interface';
import { dreamAppInitial } from 'app/common/appState/dreamApp/dreamApp.initial';
import {dreamAppActions} from 'app/common/appState/dreamApp/dreamApp.action';

export const dreamAppReducer = (
    currState: DreamAppState = dreamAppInitial,
    action: { type: string, payload?: any }) => {
    const newState: DreamAppState = JSON.parse((JSON.stringify(currState || null)));
    const payload = JSON.parse(JSON.stringify(action.payload || null));
    switch (action.type) {
        case dreamAppActions.appSessions.load:
            newState.appSessions = payload;
            break;
    }
    return newState;
};


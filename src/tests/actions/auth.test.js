import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Tests in auth actions', () => {

    beforeEach( () => {
        store = mockStore(initState);
    });
    
    test('login and logout should create their actions', () => {
        
        const uid = 'ABC123';
        const displayName = 'Daniela';

        const loginAction = login( uid, displayName );
        const logoutAction = logout();

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect( logoutAction ).toEqual({
            type: types.logout
        });

    });

    test('should logout', async() => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });


    });

    test('should init startLoginEmailPassword', async() => {
        
        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') );

        const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: '95AaG4V02VUTusbThM1OfAuRP202',
                displayName: null
            }
        });
    });
    
    
    
});

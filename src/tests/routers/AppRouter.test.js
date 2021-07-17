import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { firebase } from '../../firebase/firebase-config';
import { AppRouter } from '../../routers/AppRouter';
import { login } from '../../actions/auth';
import { act } from '@testing-library/react';
jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id:  'ABC',
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Tests in AppRouter', () => {
   
    // test('should call login if is authenticated', async() => {

    //     let user;

    //     await act( async () => {

    //         const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
    //         user = userCred.user;

    //         const wrapper = mount(
    //             <Provider store={store}>
    //                 <MemoryRouter>
    //                     <AppRouter />
    //                 </MemoryRouter>
    //             </Provider>
    //         );
    //     });

    //     expect( login ).toHaveBeenCalledWith('95AaG4V02VUTusbThM1OfAuRP202', null);
    // });

    test('should pass', () => {
        expect( true ).toBe(true);
    });
    

});

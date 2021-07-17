import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Sidebar } from '../../../components/journal/Sidebar';
import { startNewNote } from '../../../actions/notes';
import { startLogout } from '../../../actions/auth';
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));
jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Daniela'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <Sidebar />
    </Provider>
);


describe('Tests in Sidebar component', () => {
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should call startLogout', () => {
        wrapper.find('button').prop('onClick')();

        expect( startLogout ).toHaveBeenCalled();
    });

    test('should call startNewNote', () => {
        
        wrapper.find('.journal__new-entry').prop('onClick')();

        expect( startNewNote ).toHaveBeenCalled();

    });
    
});

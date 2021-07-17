/*** @jest-environment node */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: (jest.fn( () => {
        // return 'https://hola-mundo.com/cosa.jpg'
        return new Promise.resolve('https://hola-mundo.com/cosa.jpg')
    }))
}));

global.scrollTo = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: '4ZiWWzwxmOnbY4pBrWJM',
            title: 'hola',
            body: 'mundo'
        }
    }
}

let store = mockStore(initState);

describe('Tests on actions in notes', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });

    afterAll(() => {
        db.disableNetwork();
        db.terminate();
    });
    
    test('should create a new note with startNewNote', async() => {
        await store.dispatch( startNewNote() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docID = actions[0].payload.id;
        await db.doc(`TESTING/journal/notes/${docID}`).delete();        
    });

    test('"startLoadingNotes" action should load the notes', async() => {
        
        await store.dispatch( startLoadingNotes('TESTING') );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject(expected);
    });

    test('"startSaveNote" action should update the note', async() => {
        
        const note = {
            id: 'kzUFEzzoJlwbFk84oCVM',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get();

        expect( docRef.data().title ).toBe( note.title );


    });

    test('"startUploading" action should update the url entry', async() => {
        
        const file = [];
        await store.dispatch( startUploading( file ) );

        const docRef = await db.doc(`/TESTING/journal/notes/4ZiWWzwxmOnbY4pBrWJM`).get();
        expect( docRef.data().url ).toBe('https://hola-mundo.com/cosa.jpg');
    });
    

});

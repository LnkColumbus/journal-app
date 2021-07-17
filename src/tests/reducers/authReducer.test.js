import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Tests in authReducer', () => {
   
    test('should login with uid and name', () => {
        
        const state = authReducer({}, {
            type: types.login,
            payload: {
                uid: 123456,
                displayName: 'Daniela',
            }
        });

        expect( state ).toEqual({
            uid: 123456,
            name: 'Daniela'
        });
    });

    
    test('should logout and set state to empty object', () => {
        
        const state = authReducer({ uid: 123456, name: 'Daniela'}, {
            type:types.logout
        });
        
        expect( state ).toEqual({});
        
    });
    
    test('should return default state, empty object', () => {
       
        const state = authReducer({}, {});
        expect( state ).toEqual({});
        
    });

});

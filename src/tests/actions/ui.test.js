import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Tests in UI actions', () => {
    
    test('should work correctly, sync actions', () => {
        
        const action = setError('HELP!!!');

        
        const removeErrorAction = removeError();
        const startLoadinAction = startLoading();
        const finishLoadingAction = finishLoading();
        
        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!!!'
        });

        expect ( removeErrorAction ).toEqual({
            type: types.uiRemoveError
        });

        expect( startLoadinAction ).toEqual({
            type: types.uiStartLoading
        });

        expect( finishLoadingAction ).toEqual({
            type: types.uiFinishLoading
        });

    });


    
})

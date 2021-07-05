import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isloggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async (user) => {
            
            if (user?.uid) {
                dispatch( login( user.uid, user.displayName ) );
                setIsloggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );
            } else {
                setIsloggedIn( false );
            }

            setChecking( false );

        });

    }, [dispatch, setChecking, setIsloggedIn])

    if ( checking ) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        isAuthenticated={ isloggedIn }
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={ isloggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}

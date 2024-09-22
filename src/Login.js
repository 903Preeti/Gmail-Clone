import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    };

    return (
        <div className='login'>
            <div className='login_container'>
                <img src="" alt="Logo" />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default Login;

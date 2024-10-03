import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebase'; // Import your Firebase app configuration

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const SignIn = () => {
    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log('User signed in:', result.user);
        } catch (error) {
            console.error('Error during sign-in:', error.message);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                <Typography variant="h5" gutterBottom>
                    Sign In to Continue
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSignIn}
                >
                    Sign In with Google
                </Button>
            </Box>
        </Container>
    );
};

export default SignIn;
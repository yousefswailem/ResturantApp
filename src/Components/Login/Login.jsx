import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Card, CardContent, Typography, TextField, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [redirectToSettings, setRedirectToSettings] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (username === 'bbq@gmail.com' && password === 'bbq@123') {
            setRedirectToSettings(true);
        } else {
            setErrorMessage('Incorrect username or password');
        }
    };

    useEffect(() => {
        if (redirectToSettings) {
            navigate('/settings');
        }
    }, [redirectToSettings, navigate]);

    return (
        <>
            <Card sx={{ borderRadius: '35px', backdropFilter: "blur", backgroundColor: 'rgba(0,0,30,0.4)' }} className='card'>
                <CardContent>
                    <Typography className='formLabel' variant="h5" component="div" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Username"
                            type="email"
                            variant="outlined"
                            margin="normal"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && (
                            <Typography color="error" variant="body2" component="p">
                                {errorMessage}
                            </Typography>
                        )}
                        <CardActions>
                            <Button type="submit" size="large" variant="contained" fullWidth>
                                Submit
                            </Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default Login;

import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/authContext';

const RegisterForm = () => {
    const {signUp, error} = useContext(authContext)
    const navigate = useNavigate()
    console.log(signUp);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleValues(){
        if(!email || !password){
            alert("заполните поля!")
            return
        }
        signUp(email,password, navigate)
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'70vh'}>
            <Typography variant="h4" component="h2">Register</Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '10px'}} id="outlined-basic" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px'}}  id="outlined-basic" label="Password" type={"password"} variant="outlined" />
            {error ? (<Alert style={{marginBottom: '10px'}} severity="error">{error}</Alert>) : null}
            
            <Button variant="contained" onClick={handleValues}>Register</Button>
        </Box>
    );
};

export default RegisterForm;
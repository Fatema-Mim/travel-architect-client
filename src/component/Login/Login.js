import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleSignIn = () =>{
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
        })
    .finally(() => setIsLoading(false));
    }
    return (
        <div className="text-center mt-5 mb-5 p-5" >
            <h1>Pls login</h1>
            <Button onClick={handleSignIn} variant="warning">Google Login</Button>
        </div>
    );
};

export default Login;
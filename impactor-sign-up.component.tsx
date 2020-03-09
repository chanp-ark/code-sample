import React, {useState} from 'react';

import { FormInput } from '../FormInput/form-input.component';
import CustomButton from '../CustomButton/custom-button.component';

import './impactor-sign-up.styles.css';

const ImpactorSignUp = () => {

    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
    };

    const [ userProfile, setUserProfile ] = useState(initialState);

    const { displayName, email, password, confirmPassword, description } = userProfile;

    const reset = () => {
        setUserProfile({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            description: '',
        });
    };

    const handleChange = e => {
        e.preventDefault();
        setUserProfile({...userProfile, [e.target.name]: e.target.value});
    };

    const handleClick = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    // ** pseudocode for once mock api is complete **
        // try
            // create an object with label 'impactor' using await for authorization from backend
            // await creating impactor profile is complete and stored
            // alert success message
        // catch
            // alert error message
        reset();
        // redirect to impactor landing page
    };

    return (
        <div className="sign-up">
            <h2>Impactor Sign Up</h2>
            <form className="sign-up-form">
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    label="Display Name"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="Email"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="Password"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="description"
                    type="text"
                    value={description}
                    label="Description"
                    onChange={handleChange}
                    required
                />
                <CustomButton
                    label="Submit"
                    onClick={handleClick}
                />
            </form>
        </div>
    );
};

export default ImpactorSignUp;

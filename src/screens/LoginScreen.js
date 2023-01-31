import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Auth } from 'aws-amplify';
import {LinearGradient} from 'expo-linear-gradient';
import {AntDesign} from '@expo/vector-icons';
import Button from '../components/Button';

import Routes from '../constants/Routes';

import { Auth } from 'aws-amplify';

const LoginScreen = ({ navigation }) => {
    const [showLogin, setShowLogin] = useState(true);
    const [formState, setFormState] = useState({});
    async function signUp() {
        const {username, password, email} = formState;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    const handleSubmit = () => {
        navigation.navigate(routes.Home);
        if (showLogin) {
          SignIn();
        } else {
          SignUp();
        }
      };

    useEffect(() => {
      // clear formState when switching between login and signup
      setFormState({});
    }, [showLogin]);

}


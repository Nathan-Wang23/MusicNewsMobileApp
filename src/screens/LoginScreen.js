import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import Button from '../components/Button';

import routes from '../constants/routes';
import { useNavigation } from '@react-navigation/native';

import { GRADIENT_COLORS } from '../constants/colors';

const LoginScreen = ({navigation}) => {
  const [showLogin, setShowLogin] = useState(true);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    // clear formState when switching between login an d signup
    setFormState({});
  }, [showLogin]);


  const handleSubmit = () => {
    navigation.navigate(routes.Home);
    if (showLogin) {
      // call login API
    } else {
      // call sign in API
    }
  };



  return (
    <View >
      <LinearGradient colors={GRADIENT_COLORS} >
        <AntDesign
          name="filetext1"

          size={124}
          color="rgba(255,255,255, 0.3)"
        />
        <View >
          <Text

          >
            {showLogin ? 'LOGIN' : 'SIGNUP'}
          </Text>
          <AntDesign name="addusergroup" size={24} color="white" />
        </View>

        <View >
          {!showLogin && (
            <TextInput
              value={formState.email}
              onChangeText={(text) =>
                setFormState({ ...formState, email: text })
              }
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          )}
          <TextInput
            value={formState.username}
            onChangeText={(text) =>
              setFormState({ ...formState, username: text })
            }
            placeholder="Username"

          />
          <TextInput
            value={formState.password}
            onChangeText={(text) =>
              setFormState({ ...formState, password: text })
            }
            placeholder="Password"
            secureTextEntry

          />

          <Button onPress={handleSubmit}>
            <Text

            >
              {showLogin ? 'Login' : 'Create'}
            </Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </Button>
          <View >
            <Text >
              {showLogin
                ? 'Do not have an account?'
                : 'Already have an account?'}
            </Text>
            <Text
              onPress={() => setShowLogin((prev) => !prev)}

            >
              {showLogin ? 'Sign Up' : 'Login'}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

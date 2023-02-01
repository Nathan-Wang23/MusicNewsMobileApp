import React from 'react';
import { View, Text } from 'react-native';
//import { t, color } from 'react-native-tailwindcss';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigationState } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import { AntDesign } from '@expo/vector-icons';

import { GRADIENT_COLORS } from '../constants/colors';
import routes from '../constants/routes';

const Header = ({ navigation, title, onDeletePost }) => {
  const currentScreen = useNavigationState(
    (state) => state.routeNames[state.index]
  );
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={GRADIENT_COLORS}
      >

        <View>
          <Ripple
            onPress={() => navigation.goBack()}
            rippleColor="white"

          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </Ripple>
          <Text>
            {title}
          </Text>
        </View>
        <View >
          {currentScreen !== routes.Create && (
            <Ripple
              onPress={() => navigation.navigate(routes.Create)}
              rippleColor="white"

            >
              <AntDesign name="pluscircle" size={24} color="white" />
            </Ripple>
          )}
          {onDeletePost && (
            <Ripple onPress={onDeletePost} rippleColor="white" >
              <AntDesign name="delete" size={24} color="white" />
            </Ripple>
          )}
          <Ripple rippleColor="white" >
            <AntDesign name="logout" size={24} color="white" />
          </Ripple>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager
} from 'react-native';
import Ripple from 'react-native-material-ripple';

import { GRADIENT_COLORS } from '../constants/colors';
import Header from '../components/Header';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Post',
    description: 'This took so much work :|'
  },
];

const Item = ({ title, description, editable }) => {
  const [fullView, setFullView] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setFullView((prev) => !prev);
      }}
      activeOpacity={0.8}
    >
      <View >
        <Text >
          {title}
        </Text>
        {editable && (
          <TouchableOpacity >
            <AntDesign name="edit" size={20} color={color.gray900} />
          </TouchableOpacity>
        )}
      </View>
      <Text
        numberOfLines={fullView ? 0 : 2}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <Header navigation={navigation} title="Blog Posts" />
      <View >
        <Text

        >
          Hello User!
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item description={item.description} title={item.title} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

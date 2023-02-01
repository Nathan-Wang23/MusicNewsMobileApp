import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Header from '../components/Header';
import Button from '../components/Button';

const CreateScreen = ({ navigation }) => {
  const [formState, setFormState] = useState({});
  const headerProps = {
    navigation,
    title: false ? 'Edit Post' : 'Create Post',
    ...(false && { onDeletePost: () => {} })
  };
  return (
    <View>
      <Header {...headerProps} />
      <ScrollView keyboardShouldPersistTaps="never">
        <Text>Title</Text>
        <TextInput
          value={formState.title}
          onChangeText={(text) => setFormState({ ...formState, title: text })}
          placeholder="Title here..."

        />
        <Text>Description</Text>
        <TextInput
          value={formState.description}
          onChangeText={(text) =>
            setFormState({ ...formState, description: text })
          }
          placeholder="Description here..."
          multiline

        />
        <Button>
          <Text

          >
            Submit
          </Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </Button>
      </ScrollView>
    </View>
  );
};

export default CreateScreen;
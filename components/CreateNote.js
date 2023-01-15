import * as eva from '@eva-design/eva';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Button,
} from '@ui-kitten/components';
import { ApplicationProvider } from '@ui-kitten/components/theme';
import { Dimensions, Platform, View } from 'react-native';
import { Input } from '@ui-kitten/components';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { StyleSheet } from 'react-native';

export default function CreateNote() {
  const [note, setNote] = useState('');
  const navigation = useNavigation();

  const saveNote = async () => {
    navigation.navigate('main');
    setNote('');
  };

  return (
    <View>
      <Input
        multiline={true}
        placeholder='Place your Text'
        value={note}
        onChangeText={setNote}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={StyleSheet.bottom}
      >
        <Button
          style={StyleSheet.button}
          appearance='filled'
          onPress={saveNote}
        >
          Create Note
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222B45',
    color: 'white',
    padding: 30,
    paddingTop: 80,
    width: Dimensions.get('window').width,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  button: {
    marginBottom: 30,
  },
});

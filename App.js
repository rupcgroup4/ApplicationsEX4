import * as eva from '@eva-design/eva';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Layout, Text, Button } from '@ui-kitten/components';
import { ApplicationProvider } from '@ui-kitten/components/theme';
import Categories from './components/Categories';
import Notes from './components/Notes';
import NotesContextProvider from './context/NotesContextProvider';
import AddNote from './components/AddNote';
import { useNavigation } from '@react-navigation/native';
import AddNoteButton from './components/AddNoteButton';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NotesContextProvider>
        <NavigationContainer>
          <Layout style={{ flex: 1 }}>
            <Navigator initialRouteName='Categories'>
              <Screen name='Categories' component={Categories} />
              <Screen name='Notes' component={Notes} />
              <Screen name='AddNote' component={AddNote} />
            </Navigator>
            <AddNoteButton />
          </Layout>
        </NavigationContainer>
      </NotesContextProvider>
    </ApplicationProvider>
  );
}

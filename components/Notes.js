import { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NotesContext } from '../context/NotesContextProvider';
import Note from './Note';
import { Layout } from '@ui-kitten/components';

export default function Notes(props) {
  const route = useRoute();
  const { category } = route.params;
  const navigation = useNavigation();
  const { notes, categories } = useContext(NotesContext);

  return (
    <Layout style={styles.container}>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    padding: 30,
    paddingTop: 80,
    width: Dimensions.get('window').width,
  },
});

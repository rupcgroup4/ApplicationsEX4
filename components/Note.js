import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Layout, Text, Button } from '@ui-kitten/components';
import { NotesContext } from '../context/NotesContextProvider';

const Note = ({ note }) => {
  const { RemoveNote } = useContext(NotesContext);

  const remove = () => {
    RemoveNote(note.id);
  };

  return (
    <Layout style={styles.container}>
      <Card style={styles.card} status='success'>
        <Text status='warning' style={{ textAlign: 'right' }}>
          {note.datetime}
        </Text>
        <Layout style={{ marginVertical: 30 }}>
          <Text>{note.content}</Text>
        </Layout>
        <Button onPress={remove}>Delete</Button>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'col',
  },
  card: {
    margin: 2,
  },
});

export default Note;

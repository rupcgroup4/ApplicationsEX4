import { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Text, Button, Popover } from '@ui-kitten/components';
import { NotesContext } from '../context/NotesContextProvider';

const AddNote = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState([]);
  const [visible, setVisible] = useState(false);

  const { AddNote } = useContext(NotesContext);

  const createNewNote = () => {
    if (!content || !category) {
      alert('Fill all fields');
      return;
    }
    AddNote(content, category);
    setContent('');
    setCategory('');

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const renderToggleButton = () => (
    <Button onPress={createNewNote}>Add Note</Button>
  );

  return (
    <Layout style={styles.container}>
      <Layout style={styles.insideContainer}>
        <Text category='h3' style={{ textAlign: 'center', marginBottom: 20 }}>
          Add New Note
        </Text>
        <Layout style={{ marginHorizontal: 20 }}>
          <Input
            style={styles.input}
            multiline={true}
            textStyle={{ minHeight: 64 }}
            placeholder='Enter note content'
            value={content}
            onChangeText={setContent}
          />
          <Text style={{ marginTop: 20 }}>Enter category</Text>
          <Input
            style={styles.input}
            placeholder='Category'
            value={category}
            onChangeText={setCategory}
          />
          <Popover
            visible={visible}
            anchor={renderToggleButton}
            onBackdropPress={() => setVisible(false)}
          >
            <Layout style={styles.content}>
              <Text>Note was added</Text>
            </Layout>
          </Popover>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  insideContainer: {
    marginTop: 60,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    marginVertical: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});

export default AddNote;

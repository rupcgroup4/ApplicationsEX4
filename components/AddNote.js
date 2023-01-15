import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Input, Layout, Text, Button } from '@ui-kitten/components';

const AddNote = () => {
  const [note, setNote] = useState('');
  return (
    <Layout style={styles.container}>
      <Layout style={styles.insideContainer}>
        <Text style={{ textAlign: 'center', marginBottom: 20 }}>
          Add New Note
        </Text>
        <Layout style={{ marginHorizontal: 20 }}>
          <Input
            style={styles.input}
            multiline={true}
            textStyle={{ minHeight: 64 }}
            placeholder='Enter note content'
            value={note}
            onChangeText={setNote}
          />
          <Input
            style={styles.input}
            placeholder='Category'
            value={note}
            onChangeText={setNote}
          />
          <Button style={styles.input}>Add Note</Button>
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
    marginTop: 100,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    marginVertical: 20,
  },
});

export default AddNote;

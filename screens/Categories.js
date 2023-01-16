import React, { useContext, useEffect, useState } from 'react';
import { Button, List, Layout, Card, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NotesContext } from '../context/NotesContextProvider';

const Categories = () => {
  const [categories, setCategories] = useState();

  const navigation = useNavigation();
  const { notes } = useContext(NotesContext);

  useEffect(() => {
    setCategories([...new Set(notes.map((note) => note.category))]);
  }, [notes]);

  const renderItem = ({ item, index }) => {
    return (
      <Card status='success' style={{ marginTop: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text category='h6'>{item}</Text>
          <Button
            size='small'
            onPress={() => navigation.navigate('Notes', { category: item })}
          >
            {notes.filter((note) => note.category === item).length + ' '} NOTES
          </Button>
        </View>
      </Card>
    );
  };

  return (
    <Layout style={styles.layout}>
      <View style={styles.conatiner}>
        <List style={styles.list} data={categories} renderItem={renderItem} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  conatiner: {
    marginTop: 40,
    alignItems: 'center',
    flex: 1,
  },
  list: {
    maxHeight: 500,
    width: '95%',
    backgroundColor: 'transparent',
  },
});

export default Categories;

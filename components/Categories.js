import React, { useContext, useEffect, useState } from 'react';
import { Button, List, ListItem, Layout } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NotesContext } from '../context/NotesContextProvider';

const data = new Array(20).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const Categories = () => {
  const [categories, setCategories] = useState();

  const navigation = useNavigation();
  const { notes } = useContext(NotesContext);

  useEffect(() => {
    setCategories([...new Set(notes.map((note) => note.category))]);
  }, [notes]);

  const renderItemAccessory = (item) => (
    <Button
      size='tiny'
      onPress={() => navigation.navigate('Notes', { category: item })}
    >
      SEE NOTES
    </Button>
  );

  const renderItem = ({ item, index }) => {
    return (
      <ListItem
        title={`${item}`}
        description={`Number of notes  ${
          notes.filter((note) => note.category === item).length
        }`}
        accessoryRight={() => renderItemAccessory(item)}
      />
    );
  };
  console.log(categories);
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
  },
  list: {
    maxHeight: 500,
    width: '95%',
  },
});

export default Categories;

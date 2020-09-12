import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './components/ListItem';

import Header from './components/Header';
import AddItem from './components/AddItems';

const App = () => {

  const [items, setItems] = useState([
    // { id: uuidv4(), text: 'Milk' },
    // { id: uuidv4(), text: 'Bread' },
    // { id: uuidv4(), text: 'Eggs' },
    // { id: uuidv4(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (text) {
      setItems(prevItems => {
        return [...prevItems, { id: uuidv4(), text }];
      }); 
    } else {
      Alert.alert('Error','Please enter an Item',[
        { text: "OK"}]);
    }

    // setItems(prevItems => {
    //   return [...prevItems, { id: uuidv4(), text }];
    // }); 

  }


  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
}




Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
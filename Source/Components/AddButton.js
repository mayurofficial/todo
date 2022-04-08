import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.addButtonWrapper}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10,
  },
  button: {
    backgroundColor: 'tomato',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default AddButton;

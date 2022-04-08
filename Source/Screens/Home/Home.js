import {View, Text, StyleSheet, Animated} from 'react-native';
import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Searchbar,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AddButton from '../../Components/AddButton';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const Home = () => {
  return (
    <Animated.View style={styles.wrapper}>
      {/* <LinearGradient
        colors={['#2A2A2E', '#1F1338', '#000000']}
        style={styles.linearGradient}> */}
      <Searchbar
        placeholder="Search"
        style={styles.searchbar}
        //   onChangeText={onChangeSearch}
        //   value={searchQuery}
      />
      <Card style={styles.card}>
        <Card.Content>
          {/* <Title style={styles.title}>Card title</Title> */}
          <Paragraph style={styles.task}>Walk the Dog</Paragraph>
        </Card.Content>
      </Card>
      {/* </LinearGradient> */}
      <AddButton />
    </Animated.View>
  );
};

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fef3e7',
    borderRadius: 8,
  },
  linearGradient: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    backgroundColor: '#ccc2fe',
    borderRadius: 22,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  task: {
    color: '#371B34',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Home;

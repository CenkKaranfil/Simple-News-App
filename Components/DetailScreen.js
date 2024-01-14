import { View, Text, Image, StyleSheet } from 'react-native';
import * as React from 'react';

const DetailScreen = ({ route }) => {

  const { article } = route.params;


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: article.image_url }} ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {article.title}
        </Text>
        <Text style={styles.text}>
          {article.description}
        </Text>
        <Text style={styles.text}>
          {article.snippet}
        </Text>
        <Text style={styles.text}>
          {article.source}
        </Text>
        <Text style={styles.text}>
          {article.published_at}
        </Text>
      </View>

    </View>




  )
}

export default DetailScreen


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }







})
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'UgnEf5bsQ6jFcFx0jTiVKQY0aVv4UGPKGotGzd7b';
    const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&language=tr`;

    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching news', error);
      });

  }, []);

  const renderItem = ({ item }) => (

    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate('DetailScreen', { article: item })}
    >
      <Image style={styles.image} source={{ uri: item.image_url }} ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {item.description}
        </Text>
        <Text style={styles.text}>
          {item.source}
        </Text>
        <Text style={styles.text}>
          {item.publishedAt}
        </Text>
      </View>

    </TouchableOpacity>

  )
  return (

    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.uuid}
        renderItem={renderItem}

      />
    </View>



  )
}

export default HomeScreen

const styles = StyleSheet.create({

  textContainer: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100,
  },
  list:{

  }






})
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '4YAvv8-NdtgmR4olP350mwT1GIHmzjNbbaFcp2HY6ZFJGi31';
    const apiUrl = `https://api.currentsapi.services/v1/latest-news?language=tr&apiKey=${apiKey}&page_size=200`;

    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.news);
        console.log(response.data)

      })
      .catch(error => {
        console.error('Error fetching news', error);
      });


  }, []);


  //const politicsItems = news.filter(item => item.category === 'general');

  const renderItem = ({ item }) => (


    <View style={styles.newsCard}>
      <Image style={styles.image} source={{ uri: item.image }} ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.Title}>
          {item.title}
        </Text>
        <View style={styles.innerBox}>
          <Text style={styles.Author}>
            {item.author}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', { article: item })}
          >
            <Text style={styles.Details}>
              Detaylar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  )
  return (

    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}

      />
    </View>



  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  
  innerBox: {
    flexDirection:'row',
    justifyContent: 'space-between'

  },

  textContainer: {
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  Title: {
    flexShrink: 1,
    fontSize: 18,
  },

  Author: {
    fontSize: 14,
    color: "gray",
    justifyContent:'center',
    alignSelf:'center'

  },
  Details: {
    fontSize: 18,
  },

  button:{
    borderColor:"black",
    borderWidth:1,
    backgroundColor:"white",
    borderRadius:6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    textAlign:'center',
    padding:6,
    marginRight:6,
  },

  newsCard: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'75.5%'

  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 6,
    marginRight: 8,
    marginLeft: 2,
  }







})
import { Alert, View, Text, Image, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import * as React from 'react';
import { useCallback } from 'react';

const DetailScreen = ({ route }) => {

  const { article } = route.params;

  const OpenURLButton = ({ url }) => {

    const handlePress = useCallback(async () => {

      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Cannot open: ${url}`);
      }

    }, [url]);

    return <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
    >
      <Text style={styles.link}>
        Haberin Devamı
      </Text>
    </TouchableOpacity>

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: article.image }} ></Image>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {article.title}
          </Text>
          <Text style={styles.desc}>
            {article.description}
          </Text>
          <View style={styles.innerBox}>
            <Text style={styles.author}>
              {article.author}
            </Text>
            <Text style={styles.date}>
              {article.published}
            </Text>
            <OpenURLButton url={article.url}>Haberin Devamı</OpenURLButton>

          </View>
        </View>

      </View>

    </ScrollView>


  )
}

export default DetailScreen


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,

  },
  textContainer: {
    flex: 1,
    marginTop: 40,
    marginStart: 10,
    marginEnd: 10,
    marginBottom:20,

  },

  image: {

    width: 400,
    height: 400,
  },

  title: {
    fontSize: 20,


  },
  desc: {
    marginTop: 20,
    fontSize: 18,


  },

  button: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    textAlign: 'center',
    marginTop: 20,
    marginRight: 6,
    paddingVertical:6,
    paddingHorizontal:2,
    justifyContent: 'center',
    maxWidth: "50%",
    alignItems: 'center',
  },

  link: {
    fontSize: 20,
    color: "black"
  },

  author: {
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },

  date: {
    marginTop: 10,
    color: "gray",
  },







})
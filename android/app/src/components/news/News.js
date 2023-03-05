import { AppBar, FAB, Icon, IconButton, ListItem, Stack } from '@react-native-material/core';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, Button, Text, SafeAreaView, FlatList, ActivityIndicator, ScrollView, RefreshControl, ToastAndroid } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';
import { Linking } from 'react-native';
import newsStyles from './css/News.css';
import {NEWS_API_KEY} from '@env';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;
const colors = { primary: "#1f145c", white: "#fff" }
const News = ({ navigation }) => {
  const [getAllNews, setNews] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [moveToTop, setMoveToTop] = useState(true);
  const [totalResults, setTotalResults] = useState('')
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getNews()
  }, [])
  const getNews = () => {
    axios.get(apiUrl)
      .then(response => {
        ToastAndroid.show('News fetch successfully', ToastAndroid.TOP)
        setTotalResults(response?.data?.totalResults);
        setNews(response?.data?.articles);
        // Do something with the response data
      })
      .catch(error => {
      })
      .finally(() => setLoading(false));
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  useEffect(() => {
    if (refreshing) getNews()
  })
  const scrollRef = useRef();
  const navigateToHome = () => {
    navigation.navigate('Home')
  }
  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }
  return (
    <SafeAreaView>
      <SafeAreaView style={{ backgroundColor: 'white' }}>

        {
          getAllNews?.length > 0 && (
            <TouchableOpacity style={{
              zIndex: 999,
              position: 'absolute',
              bottom: '20%',
              right: '10%',
            }} onPress={onPressTouch}>
              <View style={newsStyles.iconContainer}>
                <View style={newsStyles.arrow}>
                </View>
              </View>
            </TouchableOpacity>
          )
        }
        <>
          <AppBar
            title="News"
            leading={props => (
              <TouchableOpacity onPress={navigateToHome}>
                <View style={newsStyles.backContainer}>
                  <View style={newsStyles.backArrow}>
                    <Text style={{ color: '#fff' }}><Text style={{ fontSize: 15 }}>&lt; </Text>- Back</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            trailing={props =>
              <Text {...props} style={{ color: 'white', fontSize: 15, paddingRight: 10 }}>
                Total feeds :- &nbsp;
                {!totalResults ? (
                  <Stack fill center spacing={4}>
                    <ActivityIndicator color="#fff" />
                  </Stack>) : totalResults}
              </Text>
            }
          />
          <ScrollView
            ref={scrollRef}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            } style={{ backgroundColor: "white", height: "100%" }}>
            {
              getAllNews?.length <= 0 ?
                <View style={{
                  backgroundColor: '#fff',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center'
                }}>
                  <Image source={require('../../../../../assets/icons/newspaper.png')} style={{ marginVertical: 20, width: 200, height: 200 }} />
                  <Text style={{
                    color: '#000',
                    fontSize: 20
                  }}>
                    No news found
                  </Text>
                </View> :
                getAllNews?.map((news, i) => {
                  return (
                    <View key={i} style={{
                      backgroundColor: '#fff',
                      borderRadius: 25,
                      elevation: 40,
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <View style={newsStyles.container}>
                        {news?.urlToImage ?
                          <Image source={{ uri: news?.urlToImage }} style={newsStyles.image} /> :
                          <Image source={require('../../../../../assets/images/image-not-found.png')} style={newsStyles.image} />
                        }
                        <View style={{ padding: 10 }}>

                          <Text style={newsStyles.title}>
                            {news?.title}, <Text style={{ color: 'blue', fontSize: 15 }}
                              onPress={() => Linking.openURL(news?.url)}>Read more-</Text>
                          </Text>
                          <Text style={newsStyles.description}>
                            {news?.description}
                          </Text>
                          <View style={newsStyles.data}>
                            <Text style={newsStyles.authorHeading}>
                              by:- <Text style={newsStyles.author}>{news?.author}</Text>
                            </Text>
                            <Text style={newsStyles.date}>{new Date(news?.publishedAt).toDateString()}</Text>
                          </View>
                          <View style={{ marginTop: 10 }}>
                            <Text style={{color:'#000'}}>Source:-<Text style={newsStyles.source}>
                              {news?.source?.name}
                            </Text></Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })
            }
          </ScrollView>
        </>
      </SafeAreaView>
    </SafeAreaView>

  )
}
export default News;
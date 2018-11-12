import React from 'react';

import { 
    View, 
    Linking, 
    TouchableNativeFeedback,
    StyleSheet, 
} from 'react-native';

import {
    Text, 
    Button, 
    Card, 
    Divider, 
} from 'react-native-elements';

import moment from 'moment';    // Date Library - Written in pure Javascript! Praise the Lord!

export default class Article extends React.Component {
  render() {

    // Contents of news article 
    const {
      title,        // Headlines
      description,  // Short Desription
      publishedAt,  // Time of publishing
      source,       // Sorce - name
      urlToImage,   // URL to image
      url           // URL to news article
    } = this.props.article;
    // article is passed aa a property to <Article /> in App.js 

   // In case the publishedAt comes back as null, the dumbest thing to do is to set the time to the current time :p
    const time = moment(publishedAt || moment.now()).fromNow();

    // Fallback Image - Easter Egg! 
    const defaultImg = 'https://i.imgur.com/izo2nXq.jpg';

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
        style = {{backgroundColor: '#000000'}}
      >
        <Card
          containerStyle = {{backgroundColor: '#000000'}}
          featuredTitle={title}
          featuredTitleStyle={styles.featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10, backgroundColor: '#000000', color: '#FFFFFF' }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#000000' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={styles.noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#FFFFFF',
    fontSize: 10,
    backgroundColor: '#000000'
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
});
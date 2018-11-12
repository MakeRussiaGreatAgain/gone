import React from 'react';

import { 
  FlatList,
} from 'react-native';

// Importing the fetching functions and components
import { getNews } from './src/newsfetch';
import Article from './src/components/Article';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };// Collecting and storing all the news articles - also a flag for refreshing the feed
    this.fetchNews = this.fetchNews.bind(this);     // Didn't know how to declare a function here, stackoverflow solution - Praise the lord!
  }

  // Fetching the news after the view has mounted. Sometimes speedy JSON response can throw exception and at times a blak render will come through
  componentDidMount() {
    this.fetchNews();
  }

  // Fetching news using the JSON API
  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
      // ES5 cause I got lost implementing async-await
  }

  // Refreshing the feed - setting state and refetching the news
  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  // Because we can't see anything without this!
  // Flat list cause it looks neat and listview is unfortuately deprecated RIP!
  render() {
    return (
      <FlatList
        style={{backgroundColor: '#000000'}}
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

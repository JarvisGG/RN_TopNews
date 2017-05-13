/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import Home from './Component/Home/home';
import Video from './Component/Video/video';
import Picture from './Component/Picture/picture';
import Account from './Component/Account/account';
import TabBar from './TabBar'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tabNames: ['首页','视频','图片','我的'],
      tabIconNames: ['md-home','md-grid','md-time','md-contact'],
    };
  }


  render() {
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;

    return (
      <ScrollableTabView
        renderTabBar={()=><TabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
        tabBarPosition='bottom'

        onChangeTab={
          (obj) => {
            console.log('被选中的tab下标：' + obj.i);
          }
        }

        onScroll={
          (position) => {
            console.log('滑动时的位置：' + position);
          }
        }
        locked={false}
        initialPage={3}
        prerenderingSiblingsNumber={1}>

        <View tabLabel="Home" style={styles.center}>
          <Text >Home</Text>
        </View>

        <View tabLabel="Video" style={styles.center}>
          <Text >Video</Text>
        </View>
        <View tabLabel="Picture" style={styles.center}>
          <Text >Picture</Text>
        </View>

        <View tabLabel="Account" style={styles.center}>
          <Text >Account</Text>

        </View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


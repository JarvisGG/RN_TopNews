/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  ListView,
  Text,
  View
} from 'react-native';

export default class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1, row2)=> row1 !== row2
      }),
    }
    this.state = {
      dataSource:this.state.dataSource.cloneWithRows(
        ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11'])
    };
  }

  // componentWillCount() {
  //   this.dsfetchData();
  // }

  // dsfetchData() {
  //   this.setState({
  //     dataSource:this.state.dataSource.cloneWithRows(
  //       ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11'])
  //   });
  // }

  _renderRow = (rowData) => {
    return (<Text>{rowData}</Text>);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.headerText}>
            视频列表
          </Text>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={styles.listView}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    paddingTop:25,
    paddingBottom:12,
    backgroundColor:'#FF0000'
  },
  headerText: {
    fontSize:16,
    fontWeight:'600',
    textAlign:'center',
    color:'#fff'
  },
  listView: {
    paddingTop:53,
    backgroundColor:'#F5FCFF',
  },
});

